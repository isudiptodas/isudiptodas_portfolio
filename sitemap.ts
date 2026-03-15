import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://isudiptodas-portfolio.vercel.app",
      lastModified: new Date(),
    },
    {
      url: "https://isudiptodas-portfolio.vercel.app/design",
      lastModified: new Date(),
    },
    {
      url: "https://isudiptodas-portfolio.vercel.app/photography",
      lastModified: new Date(),
    },
    {
      url: "https://isudiptodas-portfolio.vercel.app/web-dev",
      lastModified: new Date(),
    },
    {
      url: "https://isudiptodas-portfolio.vercel.app/articles",
      lastModified: new Date(),
    },
  ];
}