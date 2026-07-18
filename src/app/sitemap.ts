import type { MetadataRoute } from "next"
import { source } from "@/lib/source"
import { blog, getSortedPosts } from "@/lib/blog"
import { siteUrl } from "@/lib/shared"

export const revalidate = false

export default function sitemap(): MetadataRoute.Sitemap {
  const url = (path: string) => new URL(path, siteUrl).toString()
  const newestPost = getSortedPosts()[0]

  return [
    {
      url: url("/"),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: url("/blog"),
      lastModified: newestPost?.data.date,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    ...blog.getPages().map((post) => ({
      url: url(post.url),
      lastModified: post.data.date,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...source.getPages().map((page) => ({
      url: url(page.url),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
  ]
}
