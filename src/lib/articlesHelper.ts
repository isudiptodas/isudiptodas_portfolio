import fs from "fs";
import path from "path";
import matter from "gray-matter";

const ARTICLES_PATH = path.join(process.cwd(), "/src/articles");

export function readAllArticles() {
  const files = fs.readdirSync(ARTICLES_PATH);

  return files.map((file) => {
    const slug = file.replace(".mdx", "");
    const fileContent = fs.readFileSync(
      path.join(ARTICLES_PATH, file),
      "utf8"
    );

    const { data } = matter(fileContent);

    return {
      slug,
      title: data.title,
      author: data.author,
      date: data.date,
      tags: data.tags,
      featured: data.featured
    };
  });
}

export function readArticle(slug: string) {
  const filePath = path.join(ARTICLES_PATH, `${slug}.mdx`);
  const fileContent = fs.readFileSync(filePath, "utf8");

  const { content, data } = matter(fileContent);

  return {
    title: data.title,
    author: data.author,
    date: data.date,
    tags: data.tags,
    content,
  };
}