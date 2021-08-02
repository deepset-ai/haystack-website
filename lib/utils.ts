import remark from "remark";
import html from "remark-html";
import matter from "gray-matter";

export const markdownToHtml = async (downloadUrl: string) => {
  const res = await fetch(downloadUrl);
  const fileContent = await res.text();

  // remove once all markdown files have correctly formatted front matter:
  const fileContentWithFrontMatter = fileContent
    .replace("<!---", "---")
    .replace("--->", "---");

  const { content, data } = matter(fileContentWithFrontMatter);

  const result = await remark().use(html).process(content);

  return {
    frontMatter: data,
    markup: result.toString(),
  };
};
