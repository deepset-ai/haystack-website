import styles from "components/non-mdx.module.css";
import {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from "next";
import Layout from "components/Layout";
import Banner from "components/Banner"
import { getRelativePath, getRawURL } from "lib/github";
import {
  markdownToHtml,
  getVersionFromParams,
  getDocsVersions,
  getStaticLayoutProps,
  StaticPageProps,
  getH1FromMarkdown,
} from "lib/utils";
import { referenceFilesLatest } from "lib/constants";
import { referenceFilesV180 } from "lib/constants";
import { referenceFilesV170 } from "lib/constants";
import { referenceFilesV160 } from "lib/constants";
import { referenceFilesV150 } from "lib/constants";
import { referenceFilesV140 } from "lib/constants";
import { referenceFilesV130 } from "lib/constants";
import { referenceFilesV120 } from "lib/constants";
import { referenceFilesV110 } from "lib/constants";
import { referenceFilesV100 } from "lib/constants";
import { referenceFilesV0100 } from "lib/constants";
import { referenceFilesV090 } from "lib/constants";
import { referenceFilesV080 } from "lib/constants";
import { referenceFilesV070 } from "lib/constants";
import { referenceFilesV060 } from "lib/constants";
import { referenceFilesV050 } from "lib/constants";
import { referenceFilesV040 } from "lib/constants";
import matter from "gray-matter";
import { join } from "path";
import fs from "fs";

export default function ReferenceDoc({
  menu,
  toc,
  editOnGitHubLink,
  stars,
  source,
  htmlTitle,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout
      menu={menu}
      editOnGitHubLink="https://github.com/deepset-ai/haystack/tree/master/haystack"
      stars={stars}
      toc={toc}
      htmlTitle={htmlTitle}
    >
      <Banner name="API References"/>
      <div
        className={styles["nonMdx"]}
        dangerouslySetInnerHTML={{ __html: source as string }}
      />
    </Layout>
  );
}

// TODO: This function can be shorter and cleaner, similar to how it's written for overview and usage pages
export const getStaticPaths: GetStaticPaths = async () => {
  const versions = await getDocsVersions();

  const pathsLatest = [
    ...referenceFilesLatest.items.map((item) => ({ params: { slug: [item.slug] } })),
  ];
  const pathsV180 = [
    ...referenceFilesV180.items
      .map((item) =>({
          params: {
            slug: ["v1.8.0", item.slug],
          },
        }))
      .flat(),
  ];
  const pathsV170 = [
    ...referenceFilesV170.items
      .map((item) =>({
          params: {
            slug: ["v1.7.0", item.slug],
          },
        }))
      .flat(),
  ];
  const pathsV160 = [
    ...referenceFilesV160.items
      .map((item) =>({
          params: {
            slug: ["v1.6.0", item.slug],
          },
        }))
      .flat(),
  ];
  const pathsV150 = [
    ...referenceFilesV150.items
      .map((item) =>({
          params: {
            slug: ["v1.5.0", item.slug],
          },
        }))
      .flat(),
  ];
  const pathsV140 = [
    ...referenceFilesV140.items
      .map((item) =>({
          params: {
            slug: ["v1.4.0", item.slug],
          },
        }))
      .flat(),
  ];
  const pathsV130 = [
    ...referenceFilesV130.items
      .map((item) =>({
          params: {
            slug: ["v1.3.0", item.slug],
          },
        }))
      .flat(),
  ];
  const pathsV120 = [
    ...referenceFilesV120.items
      .map((item) =>({
          params: {
            slug: ["v1.2.0", item.slug],
          },
        }))
      .flat(),
  ];
  const pathsV110 = [
    ...referenceFilesV110.items
      .map((item) =>({
          params: {
            slug: ["v1.1.0", item.slug],
          },
        }))
      .flat(),
  ];
  const pathsV100 = [
    ...referenceFilesV100.items
      .map((item) =>({
          params: {
            slug: ["v1.0.0", item.slug],
          },
        }))
      .flat(),
  ];
  const pathsV0100 = [
    ...referenceFilesV0100.items
      .map((item) =>({
          params: {
            slug: ["v0.10.0", item.slug],
          },
        }))
      .flat(),
  ];
  const pathsV090 = [
    ...referenceFilesV090.items
      .map((item) =>({
          params: {
            slug: ["v0.9.0", item.slug],
          },
        }))
      .flat(),
  ];
  const pathsV080 = [
    ...referenceFilesV080.items
      .map((item) =>({
          params: {
            slug: ["v0.8.0", item.slug],
          },
        }))
      .flat(),
  ];
  const pathsV070 = [
    ...referenceFilesV070.items
      .map((item) =>({
          params: {
            slug: ["v0.7.0", item.slug],
          },
        }))
      .flat(),
  ];
  const pathsV060 = [
    ...referenceFilesV060.items
      .map((item) =>({
          params: {
            slug: ["v0.6.0", item.slug],
          },
        }))
      .flat(),
  ];
  const pathsV050 = [
    ...referenceFilesV050.items
      .map((item) =>({
          params: {
            slug: ["v0.5.0", item.slug],
          },
        }))
      .flat(),
  ];
  const pathsV040 = [
    ...referenceFilesV040.items
      .map((item) =>({
          params: {
            slug: ["v0.4.0", item.slug],
          },
        }))
      .flat(),
  ];
  let paths = pathsLatest.concat(pathsV180)
                          .concat(pathsV170)
                          .concat(pathsV160)
                          .concat(pathsV150)
                          .concat(pathsV140)
                          .concat(pathsV130)
                          .concat(pathsV120)
                          .concat(pathsV110)
                          .concat(pathsV100)
                          .concat(pathsV0100)
                          .concat(pathsV090)
                          .concat(pathsV080)
                          .concat(pathsV070)
                          .concat(pathsV060)
                          .concat(pathsV050)
                          .concat(pathsV040);

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<StaticPageProps> = async ({
  params,
}: GetStaticPropsContext) => {
  if (!params?.slug || !Array.isArray(params.slug)) {
    return {
      notFound: true,
    };
  }

  try {
    const docTitleSlug = params.slug?.[params.slug?.length - 1];
    let item = referenceFilesLatest.items.find(
      (item) => item.slug === docTitleSlug
    );
    if(!item) {
      item = referenceFilesV170.items.find(
        (item) => item.slug === docTitleSlug
      );
    }
    if(!item) {
      item = referenceFilesV160.items.find(
        (item) => item.slug === docTitleSlug
      );
    }
    if(!item) {
      item = referenceFilesV150.items.find(
        (item) => item.slug === docTitleSlug
      );
    }
    if(!item) {
      item = referenceFilesV140.items.find(
        (item) => item.slug === docTitleSlug
      );
    }
    if(!item) {
      item = referenceFilesV130.items.find(
        (item) => item.slug === docTitleSlug
      );
    }
    if(!item) {
      item = referenceFilesV120.items.find(
        (item) => item.slug === docTitleSlug
      );
    }
    if(!item) {
      item = referenceFilesV110.items.find(
        (item) => item.slug === docTitleSlug
      );
    }
    if(!item) {
      item = referenceFilesV100.items.find(
        (item) => item.slug === docTitleSlug
      );
    }
    if(!item) {
      item = referenceFilesV0100.items.find(
        (item) => item.slug === docTitleSlug
      );
    }
    if(!item) {
      item = referenceFilesV090.items.find(
        (item) => item.slug === docTitleSlug
      );
    }
    if(!item) {
      item = referenceFilesV080.items.find(
        (item) => item.slug === docTitleSlug
      );
    }
    if(!item) {
      item = referenceFilesV070.items.find(
        (item) => item.slug === docTitleSlug
      );
    }
    if(!item) {
      item = referenceFilesV060.items.find(
        (item) => item.slug === docTitleSlug
      );
    }
    if(!item) {
      item = referenceFilesV050.items.find(
        (item) => item.slug === docTitleSlug
      );
    }
    if(!item) {
      item = referenceFilesV040.items.find(
        (item) => item.slug === docTitleSlug
      );
    }

    if (!item) {
      return {
        notFound: true,
      };
    }

    const version = await getVersionFromParams(params.slug);
    const filePath = getRelativePath(item.filename, referenceFilesLatest.repoPath, version);
    if (!filePath) {
      return {
        notFound: true,
      };
    }
    const rawURL = getRawURL(filePath)
    const fileContent = fs.readFileSync(filePath).toString();

    // remove once all markdown files have correctly formatted front matter:
    const fileContentWithFrontMatter = fileContent
      .replace("<!---", "---")
      .replace("--->", "---");

    const { content } = matter(fileContentWithFrontMatter);
    const { markup } = await markdownToHtml({ content, rawURL });

    const type = "";

    const htmlTitle = getH1FromMarkdown(content);
    const layoutProps = await getStaticLayoutProps({
      content,
      version,
      docTitleSlug,
      type,
      htmlTitle,
    });

    return {
      props: {
        ...layoutProps,
        source: markup,
      }
    };
  } catch (e) {
    console.log(e);
    return {
      notFound: true,
    };
  }
};
