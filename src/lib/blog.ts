import { blog as blogPosts } from "collections/server"
import { loader } from "fumadocs-core/source"
import { toFumadocsSource } from "fumadocs-mdx/runtime/server"

export const blog = loader({
  baseUrl: "/blog",
  source: toFumadocsSource(blogPosts, []),
})

export type BlogPost = (typeof blog)["$inferPage"]

/** All posts, newest first. */
export function getSortedPosts(): BlogPost[] {
  return [...blog.getPages()].sort(
    (a, b) => b.data.date.getTime() - a.data.date.getTime()
  )
}

export function formatPostDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  })
}
