import Image from "next/image"
import Link from "next/link"
import { gitConfig, templatesRepoUrl } from "@/lib/shared"

const githubUrl = `https://github.com/${gitConfig.user}/${gitConfig.repo}`

export function Footer() {
  const columns: { title: string; links: { text: string; href: string }[] }[] =
    [
      {
        title: "Product",
        links: [
          { text: "Features", href: "/#features" },
          { text: "Pricing", href: "/#pricing" },
          { text: "FAQ", href: "/#faq" },
          { text: "Blog", href: "/blog" },
        ],
      },
      {
        title: "Documentation",
        links: [
          {
            text: "Getting started",
            href: "/docs/getting-started/installation",
          },
          { text: "Concepts", href: "/docs/concepts/architecture" },
          { text: "Guides", href: "/docs/guides/console" },
          { text: "Templates", href: "/docs/templates" },
        ],
      },
      {
        title: "Resources",
        links: [
          { text: "GitHub", href: githubUrl },
          { text: "Template repository", href: templatesRepoUrl },
          {
            text: "Template schema",
            href: "https://basalt.host/schemas/template.schema.json",
          },
        ],
      },
    ]

  return (
    <footer className="border-fd-border bg-fd-card/50 border-t">
      <div className="mx-auto grid w-full max-w-5xl gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="flex items-center gap-2 font-semibold">
            <Image
              src="/logo.png"
              alt=""
              width={20}
              height={20}
              className="size-5 rounded-[5px]"
            />
            Basalt
          </p>
          <p className="text-fd-muted-foreground mt-3 text-sm">
            The self-hosted game server platform.
          </p>
        </div>
        {columns.map((column) => (
          <div key={column.title}>
            <p className="text-sm font-semibold">{column.title}</p>
            <ul className="mt-3 flex flex-col gap-2">
              {column.links.map((link) => (
                <li key={link.text}>
                  <Link
                    href={link.href}
                    className="text-fd-muted-foreground hover:text-fd-foreground text-sm transition-colors"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-fd-border border-t">
        <p className="text-fd-muted-foreground mx-auto w-full max-w-5xl px-6 py-6 text-xs">
          © {new Date().getFullYear()} Basalt. Basalt is not affiliated with
          Mojang, Microsoft, Hypixel Studios or playit.gg. Minecraft and Hytale
          are trademarks of their respective owners.
        </p>
      </div>
    </footer>
  )
}
