import Link from "next/link"
import type { Metadata } from "next"
import { ArrowRight } from "lucide-react"
import { Footer } from "@/components/footer"
import { formatPostDate, getSortedPosts } from "@/lib/blog"

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Guides and updates on self-hosting game servers: hardware, networking, backups and running servers for friends, teams and communities.",
  alternates: { canonical: "/blog" },
}

export default function BlogIndexPage() {
  const posts = getSortedPosts()

  return (
    <main className="flex flex-1 flex-col">
      <section className="mx-auto w-full max-w-3xl px-6 pt-16 pb-20 sm:pt-24">
        <h1 className="text-4xl font-bold tracking-tight">Blog</h1>
        <p className="text-fd-muted-foreground mt-4 text-lg">
          Guides and updates on self-hosting game servers: hardware, networking,
          backups and sharing access with the people you play with.
        </p>

        <div className="divide-fd-border mt-12 flex flex-col divide-y">
          {posts.map((post) => (
            <article key={post.url} className="group relative py-8 first:pt-0">
              <div className="text-fd-muted-foreground flex items-center gap-3 text-sm">
                <time dateTime={post.data.date.toISOString()}>
                  {formatPostDate(post.data.date)}
                </time>
                {post.data.tags.length > 0 ? (
                  <span className="flex gap-2">
                    {post.data.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-fd-muted rounded-full px-2.5 py-0.5 text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </span>
                ) : null}
              </div>
              <h2 className="mt-3 text-xl font-semibold tracking-tight">
                <Link href={post.url} className="after:absolute after:inset-0">
                  {post.data.title}
                </Link>
              </h2>
              <p className="text-fd-muted-foreground mt-2">
                {post.data.description}
              </p>
              <p className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-lime-700 transition-colors group-hover:text-lime-800 dark:text-lime-400 dark:group-hover:text-lime-300">
                Read post
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </p>
            </article>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  )
}
