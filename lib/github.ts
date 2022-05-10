import fs from "fs";
import { Octokit } from "octokit";

export const octokit = new Octokit({
  auth: process.env.GITHUB_PERSONAL_ACCESS_TOKEN,
});

export const getStargazersCount = async () => {
  const res = await octokit.rest.repos.get({
    owner: "deepset-ai",
    repo: "haystack",
  });
  return res.data.stargazers_count;
};

export const getHaystackReleaseTagNames = async () => {
  const res = await octokit.rest.repos.listReleases({
    owner: "deepset-ai",
    repo: "haystack",
  });
  return res.data.map((release) => release.tag_name);
};

export function getRawURL(path: string): string {
  return `https://raw.githubusercontent.com/deepset-ai/haystack/master/docs/${path}`;
}

export function getRelativePath(
  filename: string,
  repoPath: string,
  version: string
): string {
  const versionPrefix = version == "latest" ? "" : `/${version}`;
  const relPath = `haystack/docs${versionPrefix}${repoPath}${filename}`;
  if (!fs.existsSync(relPath)) {
    return "";
  }

  return relPath;
}
