import {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from "next";
import styles from "components/non-mdx.module.css";
import Layout from "components/Layout";
import { getRelativePath, getRawURL } from "lib/github";
import {
  markdownToHtml,
  getVersionFromParams,
  getDocsVersions,
  getStaticLayoutProps,
  StaticPageProps,
  getH1FromMarkdown,
} from "lib/utils";
import { tutorialFilesLatest } from "lib/constants";
import { tutorialFilesV160 } from "lib/constants";
import { tutorialFilesV150 } from "lib/constants";
import { tutorialFilesV140 } from "lib/constants";
import { tutorialFilesV130 } from "lib/constants";
import { tutorialFilesV120 } from "lib/constants";
import { tutorialFilesV110 } from "lib/constants";
import { tutorialFilesV100 } from "lib/constants";
import { tutorialFilesV0100 } from "lib/constants";
import { tutorialFilesV090 } from "lib/constants";
import { tutorialFilesV080 } from "lib/constants";
import { tutorialFilesV070 } from "lib/constants";
import { tutorialFilesV060 } from "lib/constants";
import { tutorialFilesV050 } from "lib/constants";
import { tutorialFilesV040 } from "lib/constants";
import matter from "gray-matter";
import fs from "fs";

export default function TutorialDoc({
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
      editOnGitHubLink="https://github.com/deepset-ai/haystack/tree/master/tutorials"
      stars={stars}
      toc={toc}
      htmlTitle={htmlTitle}
    >
      <div
        dangerouslySetInnerHTML={{ __html: source as string }}
        className={styles["nonMdx"]}
      />
    </Layout>
  );
}

// TODO: This function can be shorter and cleaner, similar to how it's written for overview and usage pages
export const getStaticPaths: GetStaticPaths = async () => {
  const versions = await getDocsVersions();

  const pathsLatest = [
    ...tutorialFilesLatest.items.map((item) => ({ params: { slug: [item.slug] } })),
  ];
  const pathsV160 = [
    ...tutorialFilesV160.items
      .map((item) =>({
          params: {
            slug: ["v1.6.0", item.slug],
          },
        }))
      .flat(),
  ];
  const pathsV150 = [
    ...tutorialFilesV150.items
      .map((item) =>({
          params: {
            slug: ["v1.5.0", item.slug],
          },
        }))
      .flat(),
  ];
  const pathsV140 = [
    ...tutorialFilesV140.items
      .map((item) =>({
          params: {
            slug: ["v1.4.0", item.slug],
          },
        }))
      .flat(),
  ];
  const pathsV130 = [
    ...tutorialFilesV130.items
      .map((item) =>({
          params: {
            slug: ["v1.3.0", item.slug],
          },
        }))
      .flat(),
  ];
  const pathsV120 = [
    ...tutorialFilesV120.items
      .map((item) =>({
          params: {
            slug: ["v1.2.0", item.slug],
          },
        }))
      .flat(),
  ];
  const pathsV110 = [
    ...tutorialFilesV110.items
      .map((item) =>({
          params: {
            slug: ["v1.1.0", item.slug],
          },
        }))
      .flat(),
  ];
  const pathsV100 = [
    ...tutorialFilesV100.items
      .map((item) =>({
          params: {
            slug: ["v1.0.0", item.slug],
          },
        }))
      .flat(),
  ];
  const pathsV0100 = [
    ...tutorialFilesV0100.items
      .map((item) =>({
          params: {
            slug: ["v0.10.0", item.slug],
          },
        }))
      .flat(),
  ];
  const pathsV090 = [
    ...tutorialFilesV090.items
      .map((item) =>({
          params: {
            slug: ["v0.9.0", item.slug],
          },
        }))
      .flat(),
  ];
  const pathsV080 = [
    ...tutorialFilesV080.items
    .map((item) =>({
        params: {
          slug: ["v0.8.0", item.slug],
        },
      }))
    .flat(),
  ];
  const pathsV070 = [
    ...tutorialFilesV070.items
      .map((item) =>({
          params: {
            slug: ["v0.7.0", item.slug],
          },
        }))
      .flat(),
  ];
  const pathsV060 = [
    ...tutorialFilesV060.items
      .map((item) =>({
          params: {
            slug: ["v0.6.0", item.slug],
          },
        }))
      .flat(),
  ];
  const pathsV050 = [
    ...tutorialFilesV050.items
      .map((item) =>({
          params: {
            slug: ["v0.5.0", item.slug],
          },
        }))
      .flat(),
  ];
  const pathsV040 = [
    ...tutorialFilesV040.items
      .map((item) =>({
          params: {
            slug: ["v0.4.0", item.slug],
          },
        }))
      .flat(),
  ];
  let paths = pathsLatest.concat(pathsV160)
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
    let item = tutorialFilesLatest.items.find(
      (item) => item.slug === docTitleSlug
    );
    if(!item) {
      item = tutorialFilesV160.items.find(
        (item) => item.slug === docTitleSlug
      );
    }
    if(!item) {
      item = tutorialFilesV150.items.find(
        (item) => item.slug === docTitleSlug
      );
    }
    if(!item) {
      item = tutorialFilesV140.items.find(
        (item) => item.slug === docTitleSlug
      );
    }
    if(!item) {
      item = tutorialFilesV130.items.find(
        (item) => item.slug === docTitleSlug
      );
    }
    if(!item) {
      item = tutorialFilesV120.items.find(
        (item) => item.slug === docTitleSlug
      );
    }
    if(!item) {
      item = tutorialFilesV110.items.find(
        (item) => item.slug === docTitleSlug
      );
    }
    if(!item) {
      item = tutorialFilesV100.items.find(
        (item) => item.slug === docTitleSlug
      );
    }
    if(!item) {
      item = tutorialFilesV0100.items.find(
        (item) => item.slug === docTitleSlug
      );
    }
    if(!item) {
      item = tutorialFilesV090.items.find(
        (item) => item.slug === docTitleSlug
      );
    }
    if(!item) {
      item = tutorialFilesV080.items.find(
        (item) => item.slug === docTitleSlug
      );
    }
    if(!item) {
      item = tutorialFilesV070.items.find(
        (item) => item.slug === docTitleSlug
      );
    }
    if(!item) {
      item = tutorialFilesV060.items.find(
        (item) => item.slug === docTitleSlug
      );
    }
    if(!item) {
      item = tutorialFilesV050.items.find(
        (item) => item.slug === docTitleSlug
      );
    }
    if(!item) {
      item = tutorialFilesV040.items.find(
        (item) => item.slug === docTitleSlug
      );
    }

    if (!item) {
      return {
        notFound: true,
      };
    }

    const version = await getVersionFromParams(params.slug);
    const filePath = getRelativePath(item.filename, tutorialFilesLatest.repoPath, version);
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
