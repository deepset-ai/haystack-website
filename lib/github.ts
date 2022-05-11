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

/**
 * This function is used during the markdown conversion process
 * when an image stored in the Haystack repo has a relative URL
 * that needs to be converted to absolute.
 *
 * @param path - the relative path to a file from the root of the repo
 * @returns - the absolute path of a file in the Haystack repo
 */
export function getRawURL(path: string): string {
  return `https://raw.githubusercontent.com/deepset-ai/haystack/master/docs/${path}`;
}

/**
 * Provided that the Haystack repo was cloned locally under `./haystack`, this
 * function returns the filesystem path to a certain Haystack file
 *
 * @param filename - the name of the file
 * @param repoPath - the path within the Haystack repo
 * @param version - the version of the docs
 * @returns - a path for a file relative to the local copy of Haystack
 */
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
