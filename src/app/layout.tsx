import { RootProvider } from "fumadocs-ui/provider/next"
import "./global.css"
import { Inter } from "next/font/google"
import type { Metadata } from "next"
import { appDescription, appName, siteUrl } from "@/lib/shared"
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({
  subsets: ["latin"],
})

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    template: `%s | ${appName}`,
    default: `${appName}: self-hosted game server hosting`,
  },
  description: appDescription,
  applicationName: appName,
  openGraph: {
    siteName: appName,
    type: "website",
    locale: "en_US",
    images: "/og/site",
  },
  twitter: {
    card: "summary_large_image",
  },
}

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex min-h-screen flex-col">
        <RootProvider>{children}</RootProvider>
        <SpeedInsights />
      </body>
    </html>
  )
}
