import Image from "next/image"
import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared"
import { appName, gitConfig } from "./shared"

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <>
          <Image
            src="/logo.png"
            alt=""
            width={20}
            height={20}
            className="size-5 rounded-[5px]"
          />
          <span className="font-semibold">{appName}</span>
        </>
      ),
    },
    links: [
      {
        text: "Docs",
        url: "/docs",
      },
      {
        text: "Templates",
        url: "/docs/templates",
      },
      {
        text: "Blog",
        url: "/blog",
      },
      {
        text: "Pricing",
        url: "/#pricing",
      },
      {
        text: "FAQ",
        url: "/#faq",
      },
    ],
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
  }
}
