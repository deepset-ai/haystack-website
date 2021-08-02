import { Octokit } from "octokit";

type Version = "v0.9.0" | "v0.8.0" | "v0.7.0" | "v0.6.0" | "v0.5.0" | "v0.4.0";
type DocsType = "tutorials" | "api" | "usage";

export const octokit = new Octokit();

export const getDownloadUrls = async ({
  type,
  version,
}: {
  type: DocsType;
  version?: Version;
}) => {
  const res = await octokit.rest.repos.getContent({
    owner: "deepset-ai",
    repo: "haystack",
    path: `docs/${version ? `${version}/` : ""}_src/${type}/${type}`,
  });
  if (Array.isArray(res.data)) {
    return res.data.map((item) => item.download_url);
  } else {
    return res.data.download_url;
  }
};
