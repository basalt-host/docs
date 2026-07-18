import { notFound } from "next/navigation"
import { ImageResponse } from "next/og"
import { generate as DefaultImage } from "fumadocs-ui/og"
import { blog } from "@/lib/blog"
import { appName, ogImageColors } from "@/lib/shared"

export const revalidate = false

export async function GET(
  _req: Request,
  { params }: RouteContext<"/og/blog/[slug]">
) {
  const { slug } = await params
  const post = blog.getPage([slug])
  if (!post) notFound()

  return new ImageResponse(
    <DefaultImage
      title={post.data.title}
      description={post.data.description}
      site={`${appName} Blog`}
      {...ogImageColors}
    />,
    {
      width: 1200,
      height: 630,
    }
  )
}

export function generateStaticParams() {
  return blog.getPages().map((post) => ({ slug: post.slugs[0] }))
}
