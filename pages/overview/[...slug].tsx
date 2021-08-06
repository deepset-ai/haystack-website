import matter from "gray-matter";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import dynamic from "next/dynamic";
import Head from "next/head";
import Link from "next/link";
import {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from "next";
import { join } from "path";
import fs from "fs";
import Layout from "components/Layout";
import {
  getSlugsFromLocalMarkdownFiles,
  getVersionFromParams,
  getDirectory,
  getDocsVersions,
  getLatestVersion,
  getMenu,
} from "lib/utils";
import { Pre } from "components/Pre";

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
const components = {
  a: Link,
  // It also works with dynamically-imported components, which is especially
  // useful for conditionally loading components for certain routes.
  // See the notes in README.md for more details.
  Disclosures: dynamic(() => import("components/Disclosures")),
  Tabs: dynamic(() => import("components/Tabs")),
  Head,
  pre: Pre,
};

export default function OverviewDoc({
  menu,
  editOnGitHubLink,
  source,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout menu={menu} editOnGitHubLink={editOnGitHubLink}>
      {source && <MDXRemote {...source} components={components} />}
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  // we want to get all versions, apart from the latest one
  const latestVersion = getLatestVersion();
  const versions = getDocsVersions().filter((v) => v !== latestVersion);

  // we initialize the paths array with the paths that will be used for the latest version (i.e. without a version in the url)
  let paths = getSlugsFromLocalMarkdownFiles("overview").map((param) => ({
    params: { slug: [param] },
  }));

  // we loop over all versions other than the latest one, to create paths that will include the version and the slug in the url
  for (const version of versions) {
    const slugs = getSlugsFromLocalMarkdownFiles("overview", version);
    paths = [
      ...paths,
      ...slugs.map((param) => ({
        params: { slug: [version, param] },
      })),
    ];
  }

  return {
    paths: paths.flat(),
    fallback: false,
  };
};

type Props = {
  menu: any;
  editOnGitHubLink: string;
  source: MDXRemoteSerializeResult;
};

export const getStaticProps: GetStaticProps<Props> = async ({
  params,
}: GetStaticPropsContext) => {
  if (!params?.slug || !Array.isArray(params.slug)) {
    return {
      notFound: true,
    };
  }

  try {
    const docTitleSlug = params.slug?.[params.slug?.length - 1];
    const directory = getDirectory(
      "overview",
      getVersionFromParams(params.slug)
    );
    const fullPath = join(directory, `${docTitleSlug.replace("-", "_")}.mdx`);

    if (!fs.existsSync(directory) || !fs.existsSync(fullPath)) {
      return {
        notFound: true,
      };
    }

    const fileContents = fs.readFileSync(fullPath, "utf8");

    // remove once all markdown files have correctly formatted front matter:
    const fileContentWithFrontMatter = fileContents
      .replace("<!---", "---")
      .replace("--->", "---");

    const { content, data } = matter(fileContentWithFrontMatter);

    const mdxSource = await serialize(content, {
      // Optionally pass remark/rehype plugins
      mdxOptions: {
        remarkPlugins: [],
        rehypePlugins: [],
      },
      scope: data,
    });

    const version = getVersionFromParams(params.slug) || getLatestVersion();
    const menu = getMenu(version);

    return {
      props: {
        menu,
        source: mdxSource,
        editOnGitHubLink: `https://github.com/deepset-ai/haystack-website/blob/source/docs/${version}/${docTitleSlug.replace(
          "-",
          "_"
        )}.mdx`,
      },
      revalidate: 1,
    };
  } catch (e) {
    console.log(e);
    return {
      notFound: true,
    };
  }
};
