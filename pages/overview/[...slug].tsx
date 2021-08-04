import markdownStyles from "../../components/markdown-styles.module.css";
import Head from "next/head";
import {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from "next";
import Header from "components/Header";
import Sidebar from "components/Sidebar";
import { getDownloadUrl, getStargazersCount } from "lib/github";
import { markdownToHtml } from "lib/utils";
import { menu, versions } from "lib/constants";

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = [
    ...menu[0].items.map((item) => ({ params: { slug: [item.slug] } })),
    ...menu[0].items
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
  const stars = await getStargazersCount();

  if (!params?.slug || !Array.isArray(params.slug)) {
    return {
      props: { stars },
    };
  }

  if (params.slug.length < 2) {
    const slug = params.slug[0];
    const item = menu[0].items.find((item) => item.slug === slug);

    if (!item) {
      return {
        props: { stars },
      };
    }

    const downloadUrl = await getDownloadUrl({
      repoPath: menu[0].repoPath,
      filename: item.filename,
    });

    if (!downloadUrl) {
      return { props: { stars } };
    }

    const { markup } = await markdownToHtml(downloadUrl);

    return {
      props: {
        markup,
        stars,
      },
      revalidate: 1,
    };
  } else {
    const version = params.slug[0];
    const slug = params.slug[1];

    const item = menu[0].items.find((item) => item.slug === slug);

    if (!item) {
      return {
        props: { stars },
      };
    }

    const downloadUrl = await getDownloadUrl({
      repoPath: menu[0].repoPath,
      filename: item.filename,
      version: versions.includes(version) ? version : undefined,
    });

    if (!downloadUrl) {
      return { props: { stars } };
    }

    const { markup } = await markdownToHtml(downloadUrl);

    return {
      props: {
        markup,
        stars,
      },
      revalidate: 1,
    };
  }
};

export default function OverviewDoc({
  markup,
  stars,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className="xl:max-w-8xl mx-auto">
      <Head>
        <title>Haystack Docs</title>
        <meta name="description" content="Haystack Docs" />
        <link rel="icon" href="/images/HaystackIcon.png" />
      </Head>
      <Header stars={stars} />
      <Sidebar />
      <main className="sm:pl-60 text-black">
        <div
          className={markdownStyles["markdown"]}
          dangerouslySetInnerHTML={{ __html: markup }}
        />
      </main>
      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <span></span>
        </a>
      </footer>
    </div>
  );
}
