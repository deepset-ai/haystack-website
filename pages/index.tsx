import Head from "next/head";
import { GetStaticProps } from "next";
import Header from "components/Header";
import Sidebar from "components/Sidebar";
import { getStargazersCount } from "lib/github";

export const getStaticProps: GetStaticProps = async () => {
  const stars = await getStargazersCount();
  return {
    props: {
      stars,
    },
    revalidate: 1,
  };
};

export default function Index({ stars }: { stars: number }) {
  return (
    <div className="xl:max-w-8xl mx-auto">
      <Head>
        <title>Haystack Docs</title>
        <meta name="description" content="Haystack Docs" />
        <link rel="icon" href="/images/HaystackIcon.png" />
      </Head>
      <Header stars={stars} />
      <Sidebar />
      <main className="font-custom">aaah nice okay</main>
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
