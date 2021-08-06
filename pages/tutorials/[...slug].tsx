import {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from "next";
import styles from "components/tutorial.module.css";
import Layout from "components/Layout";
import { getDownloadUrl } from "lib/github";
import {
  markdownToHtml,
  getMenu,
  getVersionFromParams,
  getDocsVersions,
} from "lib/utils";
import { tutorialFiles } from "lib/constants";

export default function ReferenceDoc({
  markup,
  menu,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout menu={menu}>
      <div
        dangerouslySetInnerHTML={{ __html: markup }}
        className={styles["tutorial"]}
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

// TODO: This function can be shorter and cleaner, similar to how it's written for overview and usage pages
export const getStaticProps: GetStaticProps = async ({
  params,
}: GetStaticPropsContext) => {
  const versions = getDocsVersions();

  if (!params?.slug || !Array.isArray(params.slug)) {
    return {
      notFound: true,
    };
  }

  if (params.slug.length < 2) {
    const slug = params.slug[0];
    const item = tutorialFiles.items.find((item) => item.slug === slug);

    if (!item) {
      return {
        notFound: true,
      };
    }

    const downloadUrl = await getDownloadUrl({
      repoPath: tutorialFiles.repoPath,
      filename: item.filename,
    });

    if (!downloadUrl) {
      return {
        notFound: true,
      };
    }

    const sidebarMenu = getMenu(getVersionFromParams(params.slug));
    const { markup } = await markdownToHtml(downloadUrl);

    return {
      props: {
        markup,
        menu: sidebarMenu,
      },
      revalidate: 1,
    };
  } else {
    const version = params.slug[0];
    const slug = params.slug[1];

    const item = tutorialFiles.items.find((item) => item.slug === slug);

    if (!item) {
      return {
        notFound: true,
      };
    }

    const downloadUrl = await getDownloadUrl({
      repoPath: tutorialFiles.repoPath,
      filename: item.filename,
      version: versions.includes(version) ? version : undefined,
    });

    if (!downloadUrl) {
      return {
        notFound: true,
      };
    }

    const sidebarMenu = getMenu(getVersionFromParams(params.slug));
    const { markup } = await markdownToHtml(downloadUrl);

    return {
      props: {
        markup,
        menu: sidebarMenu,
      },
      revalidate: 1,
    };
  }
};
