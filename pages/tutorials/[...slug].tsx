import {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from "next";
import styles from "components/non-mdx.module.css";
import Layout from "components/Layout";
import { getDownloadUrl } from "lib/github";
import {
  markdownToHtml,
  getVersionFromParams,
  getDocsVersions,
  getStaticLayoutProps,
  StaticPageProps,
} from "lib/utils";
import { tutorialFiles } from "lib/constants";
import matter from "gray-matter";

export default function TutorialDoc({
  menu,
  toc,
  editOnGitHubLink,
  stars,
  source,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout
      menu={menu}
      editOnGitHubLink="https://github.com/deepset-ai/haystack/tree/master/tutorials"
      stars={stars}
      toc={toc}
    >
      <div
        dangerouslySetInnerHTML={{ __html: source as string }}
        className={styles["nonMdx"]}
      />
    </Layout>
  );
}

// TODO: This function can be shorter and cleaner, similar to how it's written for overview and usage pages
export const getStaticPaths: GetStaticPaths = async () => {
  const versions = getDocsVersions();

  const paths = [
    ...tutorialFiles.items.map((item) => ({ params: { slug: [item.slug] } })),
    ...tutorialFiles.items
      .map((item) =>
        versions.map((version) => ({
          params: {
            slug: [version, item.slug],
          },
        }))
      )
      .flat(),
  ];

  return {
    paths,
    fallback: true,
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
    const item = tutorialFiles.items.find((item) => item.slug === docTitleSlug);

    if (!item) {
      return {
        notFound: true,
      };
    }

    const version = getVersionFromParams(params.slug);

    const downloadUrl = await getDownloadUrl({
      repoPath: tutorialFiles.repoPath,
      filename: item.filename,
      version,
    });

    if (!downloadUrl) {
      return {
        notFound: true,
      };
    }

    const res = await fetch(downloadUrl);
    const fileContent = await res.text();

    // remove once all markdown files have correctly formatted front matter:
    const fileContentWithFrontMatter = fileContent
      .replace("<!---", "---")
      .replace("--->", "---");

    const { content } = matter(fileContentWithFrontMatter);
    const { markup } = await markdownToHtml({ content, downloadUrl });

    const type = "";

    const layoutProps = await getStaticLayoutProps({
      content,
      version,
      docTitleSlug,
      type,
    });

    return {
      props: {
        ...layoutProps,
        source: markup,
      },
    };
  } catch (e) {
    console.log(e);
    return {
      notFound: true,
    };
  }
};
