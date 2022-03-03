import styles from "components/non-mdx.module.css";
import {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from "next";
import Layout from "components/Layout";
import { getDownloadUrl } from "lib/github";
import {
  markdownToHtml,
  getVersionFromParams,
  getDocsVersions,
  getStaticLayoutProps,
  StaticPageProps,
} from "lib/utils";
import { referenceFilesLatest } from "lib/constants";
import { referenceFilesV120 } from "lib/constants";
import { referenceFilesV110 } from "lib/constants";
import { referenceFilesV100 } from "lib/constants";
import { referenceFilesV0100 } from "lib/constants";
import { referenceFilesV090 } from "lib/constants";
import { referenceFilesV080 } from "lib/constants";
import { referenceFilesV070 } from "lib/constants";
import { referenceFilesV060 } from "lib/constants";
import { referenceFilesV050 } from "lib/constants";
import { referenceFilesV040 } from "lib/constants";
import matter from "gray-matter";
import { join } from "path";

export default function ReferenceDoc({
  menu,
  toc,
  editOnGitHubLink,
  stars,
  source,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout
      menu={menu}
      editOnGitHubLink="https://github.com/deepset-ai/haystack/tree/master/haystack"
      stars={stars}
      toc={toc}
    >
      <div
        className={styles["nonMdx"]}
        dangerouslySetInnerHTML={{ __html: source as string }}
      />
    </Layout>
  );
}

// TODO: This function can be shorter and cleaner, similar to how it's written for overview and usage pages
export const getStaticPaths: GetStaticPaths = async () => {
  const versions = await getDocsVersions();

  const pathsLatest = [
    ...referenceFilesLatest.items.map((item) => ({ params: { slug: [item.slug] } })),
  ];
  const pathsV120 = [
    ...referenceFilesV110.items
      .map((item) =>({
          params: {
            slug: ["v1.2.0", item.slug],
          },
        }))
      .flat(),
  ];
  const pathsV110 = [
    ...referenceFilesV110.items
      .map((item) =>({
          params: {
            slug: ["v1.1.0", item.slug],
          },
        }))
      .flat(),
  ];
  const pathsV100 = [
    ...referenceFilesV100.items
      .map((item) =>({
          params: {
            slug: ["v1.0.0", item.slug],
          },
        }))
      .flat(),
  ];
  const pathsV0100 = [
    ...referenceFilesV0100.items
      .map((item) =>({
          params: {
            slug: ["v0.10.0", item.slug],
          },
        }))
      .flat(),
  ];
  const pathsV090 = [
    ...referenceFilesV090.items
      .map((item) =>({
          params: {
            slug: ["v0.9.0", item.slug],
          },
        }))
      .flat(),
  ];
  const pathsV080 = [
    ...referenceFilesV080.items
      .map((item) =>({
          params: {
            slug: ["v0.8.0", item.slug],
          },
        }))
      .flat(),
  ];
  const pathsV070 = [
    ...referenceFilesV070.items
      .map((item) =>({
          params: {
            slug: ["v0.7.0", item.slug],
          },
        }))
      .flat(),
  ];
  const pathsV060 = [
    ...referenceFilesV060.items
      .map((item) =>({
          params: {
            slug: ["v0.6.0", item.slug],
          },
        }))
      .flat(),
  ];
  const pathsV050 = [
    ...referenceFilesV050.items
      .map((item) =>({
          params: {
            slug: ["v0.5.0", item.slug],
          },
        }))
      .flat(),
  ];
  const pathsV040 = [
    ...referenceFilesV040.items
      .map((item) =>({
          params: {
            slug: ["v0.4.0", item.slug],
          },
        }))
      .flat(),
  ];
  let paths = pathsLatest.concat(pathsV120)
                          .concat(pathsV110)
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
    let item = referenceFilesLatest.items.find(
      (item) => item.slug === docTitleSlug
    );
    if(!item) {
      item = referenceFilesV120.items.find(
        (item) => item.slug === docTitleSlug
      );
    }
    if(!item) {
      item = referenceFilesV110.items.find(
        (item) => item.slug === docTitleSlug
      );
    }
    if(!item) {
      item = referenceFilesV100.items.find(
        (item) => item.slug === docTitleSlug
      );
    }
    if(!item) {
      item = referenceFilesV0100.items.find(
        (item) => item.slug === docTitleSlug
      );
    }
    if(!item) {
      item = referenceFilesV090.items.find(
        (item) => item.slug === docTitleSlug
      );
    }
    if(!item) {
      item = referenceFilesV080.items.find(
        (item) => item.slug === docTitleSlug
      );
    }
    if(!item) {
      item = referenceFilesV070.items.find(
        (item) => item.slug === docTitleSlug
      );
    }
    if(!item) {
      item = referenceFilesV060.items.find(
        (item) => item.slug === docTitleSlug
      );
    }
    if(!item) {
      item = referenceFilesV050.items.find(
        (item) => item.slug === docTitleSlug
      );
    }
    if(!item) {
      item = referenceFilesV040.items.find(
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
      repoPath: referenceFilesLatest.repoPath,
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
      revalidate: 3600,
    };
  } catch (e) {
    console.log(e);
    return {
      notFound: true,
    };
  }
};
