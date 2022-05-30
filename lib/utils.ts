import imgLinks from "@pondorasti/remark-img-links";
import fs from "fs";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { join } from "path";
import remark from "remark";
import autolink from "remark-autolink-headings";
import html from "remark-html";
import remarkPrism from "remark-prism";
import slug from "remark-slug";
import { getHaystackReleaseTagNames, getStargazersCount } from "./github";

// we have to explicitly require prismjs and loadLanguages so that they're available during revalidation on Vercel
const Prism = require("prismjs");
const loadLanguages = require("prismjs/components/index");
const slugger = require("github-slugger").slug;

// To reduce the number of calls to the GitHub API, we store
// the results in the following variables, acting as a cache.
var tags: string[] = [];
var stars: number = 0;

export const markdownToHtml = async ({
  content,
  rawURL,
}: {
  content: string;
  rawURL: string;
}) => {
  loadLanguages();

  const result = await remark()
    .use(imgLinks, {
      absolutePath: rawURL,
    })
    // @ts-ignore
    .use(html)
    // @ts-ignore
    .use(slug)
    // @ts-ignore
    .use(autolink)
    .use(remarkPrism)
    .process(content);

  return {
    markup: result.toString(),
  };
};

export type StaticPageProps = {
  htmlTitle?: string;
  meta?: Metadata;
  menu: any;
  toc: { text: string; level: number; link: string }[];
  editOnGitHubLink: string;
  stars: number;
  source: MDXRemoteSerializeResult | string;
};

export const getStaticLayoutProps = async ({
  content,
  version,
  docTitleSlug,
  type,
  htmlTitle,
  meta,
}: {
  content: string;
  version?: string;
  docTitleSlug: string;
  type: string;
  htmlTitle?: string;
  meta?: Metadata;
}) => {
  const getHeadings = () => {
    const headingLines = content
      .split("\n")
      .filter((line) => line.match(/^###*\s/));
    return headingLines.map((raw) => {
      const text = raw.replace(/^###*\s/, "").replace(/\\/g, "");
      const level = raw.slice(0, 3) === "###" ? 3 : 2;
      return { text, level, link: slugger(text) };
    });
  };

  const menu = await getMenu(version);

  const toc = getHeadings();

  const latestVersion = await getLatestVersion();
  const editOnGitHubLink = `https://github.com/deepset-ai/haystack-website/blob/source/docs/${
    version || latestVersion
  }/${type}/${docTitleSlug.split("-").join("_")}.mdx`;

  // Only hit the GitHub API the first time and cache the result
  if (stars == 0) {
    stars = await getStargazersCount();
  }

  return { menu, toc, editOnGitHubLink, stars, htmlTitle, meta };
};

export const getMenu = async (version?: string) => {
  const latestVersion = await getLatestVersion();
  const menu = await import(`../docs/${version || latestVersion}/menu.json`);
  // JSON files don’t have a default export, so we have to explicitly return the default property
  return menu.default;
};

export async function getDocsVersions() {
  // Don't hit the GitHub API if we did it already
  if (tags.length > 0) {
    return tags;
  }

  const tagNames = await getHaystackReleaseTagNames();
  // cache the results
  tags = tagNames.filter((tagName) => tagName.startsWith("v"));
  return tags;
}

export async function getVersionFromParams(params: string[]) {
  const versions = await getDocsVersions();
  const latestVersion = "latest";
  return versions.find((version) => params.includes(version)) ?? latestVersion;
}

export async function getLatestVersion() {
  return "latest";
}

export async function getDirectory(
  category: "overview" | "usage" | "guides" | "components" | "pipeline_nodes",
  version?: string
) {
  const latestVersion = await getLatestVersion();
  return join(process.cwd(), `docs/${version || latestVersion}/${category}`);
}

export async function getDirectoryBenchmarks(
  category: "map" | "performance" | "speed",
  version?: string
) {
  const latestVersion = await getLatestVersion();
  return join(
    process.cwd(),
    `benchmarks/${version || latestVersion}/${category}`
  );
}

export async function getSlugsFromLocalMarkdownFiles(
  category: "overview" | "usage" | "guides" | "components" | "pipeline_nodes",
  version?: string
) {
  const directory = await getDirectory(category, version);
  if (!fs.existsSync(directory)) return [];
  const filenames = fs.readdirSync(directory);
  return filenames.map((file) =>
    file
      .replace(/\.mdx$/, "")
      .split("_")
      .join("-")
  );
}

export const getH1FromMarkdown = (md: string): string => {
  const matches = md.match(/# [a-zA-Z0-9 \-\"]+/);
  if (matches?.length != 1) return "";
  return matches[0].slice(2);
};

export interface Metadata {
  title: string;
  description: string;
  image: string;
  type: string;
}

export const getMetaFromMarkdown = (md: string): Metadata => {
  const title = md.match(/<!-- meta_title: "(.+)" -->/)
  const description = md.match(/<!-- meta_description: "(.+)" -->/)
  const image = md.match(/<!-- meta_image: "(.+)" -->/)

  return {
    title: title?.at(1) || "",
    description: description?.at(1) || "",
    image: image?.at(1) || "",
    type: "website",
  }
}
