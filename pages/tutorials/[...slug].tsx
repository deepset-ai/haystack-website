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
import { tutorialFilesLatest } from "lib/constants";
import { tutorialFilesV110 } from "lib/constants";
import { tutorialFilesV100 } from "lib/constants";
import { tutorialFilesV0100 } from "lib/constants";
import { tutorialFilesV090 } from "lib/constants";
import { tutorialFilesV080 } from "lib/constants";
import { tutorialFilesV070 } from "lib/constants";
import { tutorialFilesV060 } from "lib/constants";
import { tutorialFilesV050 } from "lib/constants";
import { tutorialFilesV040 } from "lib/constants";
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
  const versions = await getDocsVersions();

  const pathsLatest = [
    ...tutorialFilesLatest.items.map((item) => ({ params: { slug: [item.slug] } })),
  ];
  const pathsV110 = [
    ...tutorialFilesV110.items
      .map((item) =>({
          params: {
            slug: ["v1.1.0", item.slug],
          },
        }))
      .flat(),
  ];
  const pathsV100 = [
    ...tutorialFilesV100.items
      .map((item) =>({
          params: {
            slug: ["v1.0.0", item.slug],
          },
        }))
      .flat(),
  ];
  const pathsV0100 = [
    ...tutorialFilesV0100.items
      .map((item) =>({
          params: {
            slug: ["v0.10.0", item.slug],
          },
        }))
      .flat(),
  ];
  const pathsV090 = [
    ...tutorialFilesV090.items
      .map((item) =>({
          params: {
            slug: ["v0.9.0", item.slug],
          },
        }))
      .flat(),
  ];
  const pathsV080 = [
    ...tutorialFilesV080.items
    .map((item) =>({
        params: {
          slug: ["v0.8.0", item.slug],
        },
      }))
    .flat(),
  ];
  const pathsV070 = [
    ...tutorialFilesV070.items
      .map((item) =>({
          params: {
            slug: ["v0.7.0", item.slug],
          },
        }))
      .flat(),
  ];
  const pathsV060 = [
    ...tutorialFilesV060.items
      .map((item) =>({
          params: {
            slug: ["v0.6.0", item.slug],
          },
        }))
      .flat(),
  ];
  const pathsV050 = [
    ...tutorialFilesV050.items
      .map((item) =>({
          params: {
            slug: ["v0.5.0", item.slug],
          },
        }))
      .flat(),
  ];
  const pathsV040 = [
    ...tutorialFilesV040.items
      .map((item) =>({
          params: {
            slug: ["v0.4.0", item.slug],
          },
        }))
      .flat(),
  ];
  let paths = pathsLatest.concat(pathsV110)
                          .concat(pathsV100)
                          .concat(pathsV0100)
                          .concat(pathsV090)
                          .concat(pathsV080)
                          .concat(pathsV070)
                          .concat(pathsV060)
                          .concat(pathsV050)
                          .concat(pathsV040);

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
    let item = tutorialFilesLatest.items.find(
      (item) => item.slug === docTitleSlug
    );
    if(!item) {
      item = tutorialFilesV110.items.find(
        (item) => item.slug === docTitleSlug
      );
    }
    if(!item) {
      item = tutorialFilesV100.items.find(
        (item) => item.slug === docTitleSlug
      );
    }
    if(!item) {
      item = tutorialFilesV0100.items.find(
        (item) => item.slug === docTitleSlug
      );
    }
    if(!item) {
      item = tutorialFilesV090.items.find(
        (item) => item.slug === docTitleSlug
      );
    }
    if(!item) {
      item = tutorialFilesV080.items.find(
        (item) => item.slug === docTitleSlug
      );
    }
    if(!item) {
      item = tutorialFilesV070.items.find(
        (item) => item.slug === docTitleSlug
      );
    }
    if(!item) {
      item = tutorialFilesV060.items.find(
        (item) => item.slug === docTitleSlug
      );
    }
    if(!item) {
      item = tutorialFilesV050.items.find(
        (item) => item.slug === docTitleSlug
      );
    }
    if(!item) {
      item = tutorialFilesV040.items.find(
        (item) => item.slug === docTitleSlug
      );
    }

    if (!item) {
      return {
        notFound: true,
      };
    }
    const version = await getVersionFromParams(params.slug);

    const downloadUrl = await getDownloadUrl({
      repoPath: tutorialFilesLatest.repoPath,
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
      revalidate: 600,
    };
  } catch (e) {
    console.log(e);
    return {
      notFound: true,
    };
  }
};
