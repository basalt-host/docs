import Link from "next/link"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { Footer } from "@/components/footer"
import { JsonLd } from "@/components/json-ld"
import { getMDXComponents } from "@/components/mdx"
import { blog, formatPostDate } from "@/lib/blog"
import { appName, siteUrl } from "@/lib/shared"

export default async function BlogPostPage(props: PageProps<"/blog/[slug]">) {
  const params = await props.params
  const post = blog.getPage([params.slug])
  if (!post) notFound()

  const MDX = post.data.body

  return (
    <main className="flex flex-1 flex-col">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.data.title,
          description: post.data.description,
          datePublished: post.data.date.toISOString(),
          image: `${siteUrl}/og/blog/${params.slug}`,
          author: { "@type": "Organization", name: appName, url: siteUrl },
          publisher: { "@type": "Organization", name: appName, url: siteUrl },
          mainEntityOfPage: `${siteUrl}${post.url}`,
        }}
      />
      <article className="mx-auto w-full max-w-3xl px-6 pt-12 pb-20 sm:pt-16">
        <Link
          href="/blog"
          className="text-fd-muted-foreground hover:text-fd-foreground inline-flex items-center gap-1 text-sm font-medium transition-colors"
        >
          <ArrowLeft className="size-4" />
          All posts
        </Link>
        <header className="mt-8">
          <div className="text-fd-muted-foreground flex items-center gap-3 text-sm">
            <time dateTime={post.data.date.toISOString()}>
              {formatPostDate(post.data.date)}
            </time>
            <span aria-hidden>·</span>
            <span>{post.data.author}</span>
          </div>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            {post.data.title}
          </h1>
          <p className="text-fd-muted-foreground mt-4 text-lg">
            {post.data.description}
          </p>
        </header>
        <div className="prose mt-10">
          <MDX components={getMDXComponents()} />
        </div>
      </article>
      <Footer />
    </main>
  )
}

export function generateStaticParams() {
  return blog.getPages().map((post) => ({ slug: post.slugs[0] }))
}

export async function generateMetadata(
  props: PageProps<"/blog/[slug]">
): Promise<Metadata> {
  const params = await props.params
  const post = blog.getPage([params.slug])
  if (!post) notFound()

  return {
    title: post.data.title,
    description: post.data.description,
    alternates: { canonical: post.url },
    openGraph: {
      type: "article",
      siteName: appName,
      title: post.data.title,
      description: post.data.description,
      publishedTime: post.data.date.toISOString(),
      authors: [post.data.author],
      images: `/og/blog/${params.slug}`,
    },
  }
}
