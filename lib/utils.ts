import fs from "fs";
import { join } from "path";
import remark from "remark";
import html from "remark-html";
import slug from "remark-slug";
import remarkPrism from "remark-prism";
import autolink from "remark-autolink-headings";
import GitHubSlugger from "github-slugger";
import imgLinks from "@pondorasti/remark-img-links";
import { getHaystackReleaseTagNames, getStargazersCount } from "./github";
import { MDXRemoteSerializeResult } from "next-mdx-remote";

// we have to explicitly require prismjs and loadLanguages so that they're available during revalidation on Vercel
const Prism = require("prismjs");
const loadLanguages = require("prismjs/components/index");

export const markdownToHtml = async ({
  content,
  downloadUrl,
}: {
  content: string;
  downloadUrl: string;
}) => {
  loadLanguages();

  const result = await remark()
    .use(imgLinks, {
      absolutePath: downloadUrl,
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
  menu: any;
  toc: { text: string; level: number; link: string }[];
  editOnGitHubLink: string;
  stars: number;
  source: MDXRemoteSerializeResult | string;
};

const slugger = new GitHubSlugger();

export const getStaticLayoutProps = async ({
  content,
  version,
  docTitleSlug,
  type,
}: {
  content: string;
  version?: string;
  docTitleSlug: string;
  type: string;
}) => {
  const getHeadings = () => {
    const headingLines = content
      .split("\n")
      .filter((line) => line.match(/^###*\s/));
    return headingLines.map((raw) => {
      const text = raw.replace(/^###*\s/, "").replace(/\\/g, "");
      const level = raw.slice(0, 3) === "###" ? 3 : 2;
      return { text, level, link: slugger.slug(text) };
    });
  };

  const menu = await getMenu(version);

  const toc = getHeadings();

  const latestVersion = await getLatestVersion();
  const editOnGitHubLink = `https://github.com/deepset-ai/haystack-website/blob/source/docs/${
    version || latestVersion
  }/${type}/${docTitleSlug.replace("-", "_")}.mdx`;

  const stars = await getStargazersCount();

  return { menu, toc, editOnGitHubLink, stars };
};

export const getMenu = async (version?: string) => {
  const latestVersion = await getLatestVersion();
  const menu = await import(`../docs/${version || latestVersion}/menu.json`);
  // JSON files don’t have a default export, so we have to explicitly return the default property
  return menu.default;
};

export async function getDocsVersions() {
  const tagNames = await getHaystackReleaseTagNames();
  return tagNames.filter((tagName) => tagName.startsWith("v"));
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
  category: "overview" | "usage",
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
  category: "overview" | "usage",
  version?: string
) {
  const directory = await getDirectory(category, version);
  if (!fs.existsSync(directory)) return [];
  const filenames = fs.readdirSync(directory);
  return filenames.map((file) => file.replace(/\.mdx$/, "").split("_").join("-"));
}
