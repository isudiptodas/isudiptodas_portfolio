export type ArticleType = {
    slug: string;
    title: string;
    author: string;
    date: string;
    featured: boolean;
    content?: string;
    tags: string[];
    category?: string;
    linksAttached?: boolean;
}
