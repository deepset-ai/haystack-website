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
import { getStargazersCount } from "lib/github";
import {
  getSlugsFromLocalMarkdownFiles,
  localMarkdownToHtml,
  getVersionFromParams,
  getDirectory,
  getDocBySlug,
  getDocsVersions,
  getLatestVersion,
} from "lib/markdown";
import { useRouter } from "next/router";

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
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({
  params,
}: GetStaticPropsContext) => {
  if (!params?.slug || !Array.isArray(params.slug)) {
    return {
      notFound: true,
    };
  }

  try {
    const stars = await getStargazersCount();
    const titleSlug = params.slug?.[params.slug?.length - 1];
    const directory = getDirectory(
      "overview",
      getVersionFromParams(params.slug)
    );
    const { markup } = await getDocBySlug(titleSlug, directory);

    return {
      props: {
        stars,
        markup,
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

export default function UsageDoc({
  markup,
  stars,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();

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
        {router.isFallback ? (
          <div>Loading...</div>
        ) : (
          <div
            className={markdownStyles["markdown"]}
            dangerouslySetInnerHTML={{ __html: markup }}
          />
        )}
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
