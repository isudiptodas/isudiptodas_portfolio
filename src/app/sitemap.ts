import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.isudiptodas.online",
      lastModified: new Date(),
    },
    {
      url: "https://www.isudiptodas.online/design",
      lastModified: new Date(),
    },
    {
      url: "https://www.isudiptodas.online/photography",
      lastModified: new Date(),
    },
    {
      url: "https://www.isudiptodas.online/web-dev",
      lastModified: new Date(),
    },
    {
      url: "https://www.isudiptodas.online/articles",
      lastModified: new Date(),
    },
  ];
}
