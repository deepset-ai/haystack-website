import matter from "gray-matter";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import remarkSlug from "remark-slug";
import remarkAutolinkHeadings from "remark-autolink-headings";
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
  getStaticLayoutProps,
  StaticPageProps,
} from "lib/utils";
import { components } from "lib/mdx";

export default function PipelineNodeDoc({
  menu,
  toc,
  editOnGitHubLink,
  stars,
  source,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout
      menu={menu}
      editOnGitHubLink={editOnGitHubLink}
      stars={stars}
      toc={toc}
    >
      {source && (
        <MDXRemote
          {...(source as MDXRemoteSerializeResult)}
          components={components}
        />
      )}
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  // we want to get all versions, apart from the latest one
  const latestVersion = await getLatestVersion();
  const versions = await getDocsVersions();
  const versionsOtherThanLatest = versions.filter((v) => v !== latestVersion);

  // we initialize the paths array with the paths that will be used for the latest version (i.e. without a version in the url)
  const slugsForLatestVersion = await getSlugsFromLocalMarkdownFiles("pipeline_nodes");
  let paths = slugsForLatestVersion.map((param) => ({
    params: { slug: [param] },
  }));

  // we loop over all versions other than the latest one, to create paths that will include the version and the slug in the url
  for (const version of versionsOtherThanLatest) {
    const slugs = await getSlugsFromLocalMarkdownFiles("pipeline_nodes", version);
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

export const getStaticProps: GetStaticProps<StaticPageProps> = async ({
  params,
}: GetStaticPropsContext) => {
  if (!params?.slug || !Array.isArray(params.slug)) {
    return {
      notFound: true,
    };
  }

  try {
    const docTitleSlug = params.slug?.[params.slug?.length - 1];
    const version = await getVersionFromParams(params.slug);
    const directory = await getDirectory("components", version);
    const fullPath = join(directory, `${docTitleSlug.split("-").join("_")}.mdx`);

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
        // @ts-ignore
        remarkPlugins: [remarkSlug, remarkAutolinkHeadings],
        rehypePlugins: [],
      },
      scope: data,
    });

    const type = "pipeline_nodes";

    const layoutProps = await getStaticLayoutProps({
      content,
      version,
      docTitleSlug,
      type,
    });

    return {
      props: {
        ...layoutProps,
        source: mdxSource,
      },
    };
  } catch (e) {
    console.log(e);
    return {
      notFound: true,
    };
  }
};
