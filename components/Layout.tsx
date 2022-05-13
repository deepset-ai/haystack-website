import { FC } from "react";
import styles from "./markdown.module.css";
import Head from "next/head";
import { useRouter } from "next/router";
import Header from "components/Header";
import DesktopNav from "components/DesktopNav";
import MobileNav from "components/MobileNav";
import Footer from "components/Footer";
import Toc from "components/Toc";
import { StaticPageProps } from "lib/utils";

type LayoutProps = Pick<
  StaticPageProps,
  "htmlTitle" | "meta" | "menu" | "toc" | "editOnGitHubLink" | "stars"
>;

const Layout: FC<LayoutProps> = ({
  htmlTitle,
  meta,
  menu,
  toc,
  editOnGitHubLink,
  stars,
  children,
}) => {
  const router = useRouter();
  
  const metadata = {
    title: meta?.title ? meta.title : (htmlTitle ? `Haystack - ${htmlTitle}` : "Haystack Docs"),
    description: meta?.description || "Haystack enables Question Answering at Scale",
    image: meta?.image || "/img/haystack-logo-colored.png",
    type: meta?.type || "website",
  }

  return (
    <div className="dark:bg-gray-800">
      <Head>
        <title>{ metadata.title }</title>
        <meta name="robots" content="follow, index" />
        <meta content={metadata.description} name="description" />
        <meta
          property="og:url"
          content={`https://haystack.deepset.ai${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://haystack.deepset.ai${router.asPath}`}
        />
        <link rel="icon" href="/img/HaystackIcon.png" />
        <meta property="og:type" content={metadata.type} />
        <meta property="og:site_name" content="Haystack Docs" />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:image" content={metadata.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@deepset_ai" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={metadata.image} />
      </Head>
      <Header docsType={"haystack"} />
      <DesktopNav menu={menu} />
      <MobileNav menu={menu} />
      <main className="grid grid-cols-12 sm:ml-60 px-3 sm:px-8 py-6 lg:py-8 min-h-screen dark:text-white break-words">
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
