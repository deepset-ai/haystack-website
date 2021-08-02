import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import {
  GetStaticProps,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from "next";
import { getDownloadUrls } from "lib/github";
import { markdownToHtml } from "lib/utils";

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const downloadUrls = await getDownloadUrls({ type: "usage" });

  if (!downloadUrls || !Array.isArray(downloadUrls)) {
    return { props: {} };
  }

  const pages = await Promise.all(
    downloadUrls.map(async (url) => {
      if (url) return await markdownToHtml(url);
    })
  );

  return {
    props: {
      pageTitles: pages.map((page) => page?.frontMatter.title).filter(Boolean),
    },
    revalidate: 1,
  };
};

export default function Index({
  pageTitles,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className="container mx-auto max-w-8xl">
      <Head>
        <title>Haystack Docs</title>
        <meta name="description" content="Haystack Docs" />
        <link rel="icon" href="/images/HaystackIcon.png" />
      </Head>
      <header className="sticky top-0 p-2 z-40 lg:z-50 w-full max-w-8xl mx-auto bg-white flex">
        <div className="pl-4 sm:pl-6 xl:pl-8 flex items-center lg:w-60 xl:w-72">
          <Link href="/">
            <a href="/">
              <Image
                src="/images/HaystackLogo.png"
                alt="Haystack Logo"
                width={200}
                height={50}
              />
              <span className="sr-only">Haystack docs home page</span>
            </a>
          </Link>
        </div>
      </header>
      <div className="grid grid-cols-12 grid-rows-1">
        <div
          id="sidebar"
          className="bg-dark-blue col-span-2 lg:block hidden overflow-y-scroll"
        >
          <ul>
            {pageTitles.map((title: string) => (
              <li key={title} className="text-white">
                <Link href="">
                  <a href="">{title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <main>aaah nice okay</main>
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
      </div>
    </div>
  );
}
