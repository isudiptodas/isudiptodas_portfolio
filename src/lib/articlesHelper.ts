import fs from "fs";
import path from "path";
import matter from "gray-matter";

const ARTICLES_PATH = path.join(process.cwd(), "src/articles");

export function readAllArticles() {
  const entries = fs.readdirSync(ARTICLES_PATH, { withFileTypes: true });

  const mdxFiles = entries.filter(
    (entry) => entry.isFile() && entry.name.endsWith(".mdx")
  );

  return mdxFiles.map((entry) => {
    const slug = entry.name.replace(/\.mdx$/, "");
    const filePath = path.join(ARTICLES_PATH, entry.name);

    const fileContent = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContent);

    return {
      slug,
      title: data.title,
      author: data.author,
      date: data.date,
      tags: data.tags,
      category: data.category,
      featured: data.featured,
    };
  });
}

export function readArticle(slug: string) {
  const filePath = path.join(ARTICLES_PATH, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    throw new Error(`Article not found: ${slug}`);
  }

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

