import Head from "next/head";
import Header from "components/Header";
import DesktopNav from "components/DesktopNav";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { getMenu } from "lib/markdown";

export default function Custom404({
  menu,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className="xl:max-w-8xl mx-auto">
      <Head>
        <title>Haystack Docs</title>
        <meta name="description" content="Haystack Docs" />
        <link rel="icon" href="/images/HaystackIcon.png" />
      </Head>
      <Header />
      <DesktopNav menu={menu} />
      <main className="sm:pl-60 text-black">
        <div>404 - There&apos;s no doc for the page you requested.</div>
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

export const getStaticProps: GetStaticProps = () => {
  const menu = getMenu();
  return {
    props: {
      menu,
    },
  };
};
