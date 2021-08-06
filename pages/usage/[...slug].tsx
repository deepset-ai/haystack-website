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
import { Pre } from "components/Pre";
import { getStargazersCount } from "lib/github";
import {
  getSlugsFromLocalMarkdownFiles,
  getVersionFromParams,
  getDirectory,
  getDocsVersions,
  getLatestVersion,
  getMenu,
} from "lib/markdown";

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
const components = {
  // It also works with dynamically-imported components, which is especially
  // useful for conditionally loading components for certain routes.
  // See the notes in README.md for more details.
  Disclosures: dynamic(() => import("components/Disclosures")),
  Tabs: dynamic(() => import("components/Tabs")),
  Head,
  pre: Pre,
};

export default function UsageDoc({
  menu,
  source,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout menu={menu}>
      {source && <MDXRemote {...source} components={components} />}
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  // we want to get all versions, apart from the latest one
  const latestVersion = getLatestVersion();
  const versions = getDocsVersions().filter((v) => v !== latestVersion);

  // we initialize the paths array with the paths that will be used for the latest version (i.e. without a version in the url)
  let paths = getSlugsFromLocalMarkdownFiles("usage").map((param) => ({
    params: { slug: [param] },
  }));

  // we loop over all versions other than the latest one, to create paths that will include the version and the slug in the url
  for (const version of versions) {
    const slugs = getSlugsFromLocalMarkdownFiles("usage", version);
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
  stars: number;
  menu: any;
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
    const stars = await getStargazersCount();

    const docTitleSlug = params.slug?.[params.slug?.length - 1];
    const directory = getDirectory("usage", getVersionFromParams(params.slug));

    const fullPath = join(directory, `${docTitleSlug.replace("-", "_")}.mdx`);
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

    const menu = getMenu(getVersionFromParams(params.slug));

    return {
      props: {
        stars,
        menu,
        source: mdxSource,
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
