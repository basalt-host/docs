import { ImageResponse } from "next/og"
import { generate as DefaultImage } from "fumadocs-ui/og"
import { appDescription, appName, ogImageColors } from "@/lib/shared"

export const revalidate = false

export function GET() {
  return new ImageResponse(
    <DefaultImage
      title={`${appName}: self-hosted game servers`}
      description={appDescription}
      site={appName}
      {...ogImageColors}
    />,
    {
      width: 1200,
      height: 630,
    }
  )
}
