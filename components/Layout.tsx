import { FC } from "react";
import styles from "./markdown.module.css";
import Head from "next/head";
import { PencilAltIcon } from "@heroicons/react/solid";
import Header from "components/Header";
import DesktopNav from "components/DesktopNav";
import MobileNav from "components/MobileNav";
import Footer from "components/Footer";

type Props = {
  menu: any;
  editOnGitHubLink?: string;
};

const Layout: FC<Props> = ({ menu, editOnGitHubLink, children }) => {
  return (
    <div>
      <Head>
        <title>Haystack Docs</title>
        <meta name="description" content="Haystack Docs" />
        <link rel="icon" href="/images/HaystackIcon.png" />
      </Head>
      <Header docsType={"haystack"}/>
      <DesktopNav menu={menu} />
      <MobileNav menu={menu} />
      <main className="relative max-w-3xl 2xl:max-w-4xl sm:ml-60 px-3 sm:px-8 py-6 lg:py-8 min-h-screen">
        {editOnGitHubLink && (
          <div className="absolute top-7 sm:top-8 right-5">
            <a
              href={editOnGitHubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm flex items-center hover:underline hover:cursor-pointer"
            >
              <PencilAltIcon className="hidden h-5 w-5 mr-1 sm:block" />
              <span className="hidden sm:block">Edit on GitHub</span>
            </a>
          </div>
        )}
        <div className={styles["markdown"]}>{children}</div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
