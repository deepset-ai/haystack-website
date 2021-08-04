import fs from "fs";
import { join } from "path";
import remark from "remark";
import html from "remark-html";
import matter from "gray-matter";
import prism from "remark-prism";
import imgLinks from "@pondorasti/remark-img-links";
import semverCompare from "semver-compare";

export const markdownToHtml = async (downloadUrl: string) => {
  const res = await fetch(downloadUrl);
  const fileContent = await res.text();

  // remove once all markdown files have correctly formatted front matter:
  const fileContentWithFrontMatter = fileContent
    .replace("<!---", "---")
    .replace("--->", "---");

  const { content, data } = matter(fileContentWithFrontMatter);

  const result = await remark()
    .use(imgLinks, {
      absolutePath: downloadUrl,
    })
    .use(html)
    .use(prism)
    .process(content);

  return {
    frontMatter: data,
    markup: result.toString(),
  };
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

export function getSlugsFromLocalMarkdownFiles(
  category: "overview" | "usage",
  version?: string
) {
  const directory = getDirectory(category, version);
  const filenames = fs.readdirSync(directory);
  return filenames.map((file) => file.replace(/\.md$/, "").replace("_", "-"));
}

export function getAllDocs(category: "overview" | "usage", version?: string) {
  const directory = getDirectory(category, version);
  const slugs = getSlugsFromLocalMarkdownFiles(category, version);
  return slugs.map((slug) => getDocBySlug(slug, directory));
}

export async function getDocBySlug(slug: string, directory: string) {
  const fullPath = join(directory, `${slug.replace("-", "_")}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  return await localMarkdownToHtml(fileContents);
}

export const localMarkdownToHtml = async (fileContent: string) => {
  // remove once all markdown files have correctly formatted front matter:
  const fileContentWithFrontMatter = fileContent
    .replace("<!---", "---")
    .replace("--->", "---");

  const { content, data } = matter(fileContentWithFrontMatter);
  const result = await remark().use(html).use(prism).process(content);

  return {
    frontMatter: data,
    markup: result.toString(),
  };
};
