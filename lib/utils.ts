import fs from "fs";
import { join } from "path";
import remark from "remark";
import html from "remark-html";
import slug from "remark-slug";
import autolink from "remark-autolink-headings";
import prism from "remark-prism";
import GitHubSlugger from "github-slugger";
import imgLinks from "@pondorasti/remark-img-links";
import semverCompare from "semver-compare";
import { getStargazersCount } from "./github";
import { MDXRemoteSerializeResult } from "next-mdx-remote";

export const markdownToHtml = async ({
  content,
  downloadUrl,
}: {
  content: string;
  downloadUrl: string;
}) => {
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
    .use(prism)
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

  const menu = getMenu(version);

  const toc = getHeadings();

  const latestVersion = getLatestVersion();
  const editOnGitHubLink = `https://github.com/deepset-ai/haystack-website/blob/source/docs/${
    version || latestVersion
  }/${type}/${docTitleSlug.replace("-", "_")}.mdx`;

  const stars = await getStargazersCount();

  return { menu, toc, editOnGitHubLink, stars };
};

export const getMenu = (version?: string) => {
  const latestVersion = getLatestVersion();
  const menuPath = join(
    process.cwd(),
    `docs/${version || latestVersion}/menu.json`
  );
  return JSON.parse(fs.readFileSync(menuPath, "utf8"));
};

export const getBenchmarks = (type: string, name: string, version?: string) => {
  const latestVersion = getLatestVersion();
  const benchmarksPath = join(
    process.cwd(),
    `benchmarks/${version || latestVersion}/${type}/${name}.json`
  );
  return JSON.parse(fs.readFileSync(benchmarksPath, "utf8"));
};

export function getDocsVersions() {
  return fs.readdirSync(join(process.cwd(), "docs"));
}

export function getVersionFromParams(params: string[]) {
  const versions = getDocsVersions();
  return versions.find((version) => params.includes(version));
}

export function getLatestVersion() {
  return getDocsVersions().sort(semverCompare).pop();
}

export function getDirectory(category: "overview" | "usage", version?: string) {
  const latestVersion = getLatestVersion();
  return join(process.cwd(), `docs/${version || latestVersion}/${category}`);
}

export function getDirectoryBenchmarks(
  category: "map" | "performance" | "speed",
  version?: string
) {
  const latestVersion = getLatestVersion();
  return join(
    process.cwd(),
    `benchmarks/${version || latestVersion}/${category}`
  );
}

export function getSlugsFromLocalMarkdownFiles(
  category: "overview" | "usage",
  version?: string
) {
  const directory = getDirectory(category, version);
  if (!fs.existsSync(directory)) return [];
  const filenames = fs.readdirSync(directory);
  return filenames.map((file) => file.replace(/\.mdx$/, "").replace("_", "-"));
}

export function getSlugsFromLocalBenchmarksFiles(
  category: "map" | "performance" | "speed",
  version?: string
) {
  const directory = getDirectoryBenchmarks(category, version);
  if (!fs.existsSync(directory)) return [];
  const filenames = fs.readdirSync(directory);
  return filenames;
}
