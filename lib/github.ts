import { Octokit } from "octokit";

export const octokit = new Octokit({
  auth: process.env.GITHUB_PERSONAL_ACCESS_TOKEN,
});

export const getDownloadUrl = async ({
  filename,
  repoPath,
  version,
}: {
  filename: string;
  repoPath: string;
  version?: string;
}) => {
  try {
    const res = await octokit.rest.repos.getContent({
      owner: "deepset-ai",
      repo: "haystack",
      path: `docs${version ? `/${version}` : ""}${repoPath}${filename}`,
    });
    if (Array.isArray(res.data)) return;
    if (!res.data.download_url) return;
    return res.data.download_url;
  } catch (e) {
    console.log(e);
    return;
  }
};

export const getStargazersCount = async () => {
  const res = await octokit.rest.repos.get({
    owner: "deepset-ai",
    repo: "haystack",
  });
  return res.data.stargazers_count;
};
