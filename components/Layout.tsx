import { FC } from "react";
import styles from "./markdown.module.css";
import Head from "next/head";
import Header from "components/Header";
import DesktopNav from "components/DesktopNav";
import MobileNav from "components/MobileNav";
import Footer from "components/Footer";

type Props = {
  menu: any;
};

const Layout: FC<Props> = ({ menu, children }) => {
  return (
    <div>
      <Head>
        <title>Haystack Docs</title>
        <meta name="description" content="Haystack Docs" />
        <link rel="icon" href="/images/HaystackIcon.png" />
      </Head>
      <Header />
      <DesktopNav menu={menu} />
      <MobileNav menu={menu} />
      <main className="max-w-3xl 2xl:max-w-4xl sm:ml-60 px-3 sm:px-8 py-6 lg:py-8 min-h-screen">
        {/* <div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-4">{heading}</h1>
          <div className="h-1 w-full bg-green-light-theme mb-8" />
        </div> */}
        <div className={styles["markdown"]}>{children}</div>
      </main>
      <Footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <span></span>
        </a>
      </Footer>
    </div>
  );
};

export default Layout;
