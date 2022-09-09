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
  "htmlTitle" | "menu" | "toc" | "editOnGitHubLink" | "stars"
>;

const Layout: FC<LayoutProps> = ({
  htmlTitle,
  menu,
  toc,
  editOnGitHubLink,
  stars,
  children,
}) => {
  const router = useRouter();

  const meta = {
    title: "Haystack Docs",
    description: "Haystack enables Question Answering at Scale",
    image: "/img/haystack-logo-colored.png",
    twitter_image: "https://raw.githubusercontent.com/deepset-ai/haystack-website/source/public/img/haystack-logo-colored.png",
    type: "website",
  };

  var canonical_map: { [key: string]: string; } = {};
  canonical_map["/overview/nlp-resources"] = "/nlp-resources";

  const get_canonical = function (current_path: string) {
    var canonical = ''
    if(canonical_map[current_path]){
      canonical = canonical_map[current_path]
    }
    else canonical = current_path;
    return `https://haystack.deepset.ai${canonical}`;
  };

  var canonical = get_canonical(router.asPath)

  return (
    <div className="dark:bg-gray-800">
      <Head>
        <title>{ htmlTitle ? `Haystack - ${htmlTitle}` : "Haystack Docs" }</title>
        <meta name="robots" content="follow, index" />
        <meta
          content="Haystack enables Question Answering at Scale"
          name="description"
        />
        <meta
          property="og:url"
          content={`https://haystack.deepset.ai${router.asPath}`}
        />
        <link rel="canonical" href={`${canonical}`}/>
        <link rel="icon" href="/img/HaystackIcon.png" />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Haystack Docs" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@deepset_ai" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.twitter_image} />
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
