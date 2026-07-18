export const appName = "Basalt"
export const siteUrl = process.env.BASALT_DOCS_URL ?? "https://basalt.host"
export const appDescription =
  "The self-hosted game server platform. Deploy, manage and share game servers on your own hardware, all from one panel."
export const docsRoute = "/docs"
export const docsImageRoute = "/og/docs"
export const docsContentRoute = "/llms.mdx/docs"

export const gitConfig = {
  user: "basalt-host",
  repo: "basalt",
  branch: "main",
}

export const templatesRepoUrl = "https://github.com/basalt-host/templates"

/** Brand colors for generated Open Graph images (lime accent on dark). */
export const ogImageColors = {
  primaryColor: "rgba(163, 230, 53, 0.4)",
  primaryTextColor: "rgb(190, 242, 100)",
}
