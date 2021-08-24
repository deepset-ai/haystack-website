import { FC } from "react";
import styles from "./markdown.module.css";
import Head from "next/head";
import Header from "components/Header";
import DesktopNav from "components/DesktopNav";
import MobileNav from "components/MobileNav";
import Footer from "components/Footer";
import Toc from "components/Toc";
import { StaticPageProps } from "lib/utils";

type LayoutProps = Pick<
  StaticPageProps,
  "menu" | "toc" | "editOnGitHubLink" | "stars"
>;

const Layout: FC<LayoutProps> = ({
  menu,
  toc,
  editOnGitHubLink,
  stars,
  children,
}) => {
  return (
    <div className="dark:bg-gray-800">
      <Head>
        <title>Haystack Docs</title>
        <meta name="description" content="Haystack Docs" />
        <link rel="icon" href="/images/HaystackIcon.png" />
      </Head>
      <Header docsType={"haystack"} />
      <DesktopNav menu={menu} />
      <MobileNav menu={menu} />
      <main className="grid grid-cols-12 sm:ml-60 px-3 sm:px-8 py-6 lg:py-8 min-h-screen dark:text-white">
        <div className={styles["markdown"]}>{children}</div>
        <div>
          <Toc toc={toc} editOnGitHubLink={editOnGitHubLink} stars={stars} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
