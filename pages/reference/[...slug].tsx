import styles from "components/tutorial.module.css";
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
  getMenu,
  getVersionFromParams,
  getDocsVersions,
} from "lib/markdown";
import { menu } from "lib/constants";

export const getStaticPaths: GetStaticPaths = async () => {
  const versions = getDocsVersions();

  const paths = [
    ...menu[3].items.map((item) => ({ params: { slug: [item.slug] } })),
    ...menu[3].items
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
    const item = menu[3].items.find((item) => item.slug === slug);

    if (!item) {
      return {
        notFound: true,
      };
    }

    const downloadUrl = await getDownloadUrl({
      repoPath: menu[3].repoPath,
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

    const item = menu[3].items.find((item) => item.slug === slug);

    if (!item) {
      return {
        notFound: true,
      };
    }

    const downloadUrl = await getDownloadUrl({
      repoPath: menu[3].repoPath,
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

export default function ReferenceDoc({
  markup,
  menu,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout menu={menu}>
      <div
        className={styles["tutorial"]}
        dangerouslySetInnerHTML={{ __html: markup }}
      />
    </Layout>
  );
}
