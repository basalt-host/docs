import Link from "next/link"
import type { ReactNode } from "react"
import {
  ArchiveRestore,
  ArrowRight,
  Blocks,
  Check,
  ChevronDown,
  Container,
  FileCode2,
  FolderTree,
  GitBranch,
  Globe,
  KeyRound,
  LayoutTemplate,
  Lock,
  Mail,
  Radio,
  Server,
  ShieldCheck,
  SquareTerminal,
  Terminal,
  Users,
} from "lucide-react"
import type { Metadata } from "next"
import { PaygCalculator } from "@/components/payg-calculator"
import { Footer } from "@/components/footer"
import { JsonLd } from "@/components/json-ld"
import { MediaFrame, MediaPlaceholder } from "@/components/media-placeholder"
import { cn } from "@/lib/cn"
import {
  appDescription,
  appName,
  gitConfig,
  siteUrl,
  templatesRepoUrl,
} from "@/lib/shared"

const githubUrl = `https://github.com/${gitConfig.user}/${gitConfig.repo}`
// Baked at build time; override for preview deployments of the license server.
const licenseServerUrl =
  process.env.NEXT_PUBLIC_LICENSE_SERVER_URL ?? "https://license.basalt.host"

export const metadata: Metadata = {
  alternates: { canonical: "/" },
}

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col overflow-x-clip">
      <HomeJsonLd />
      <Hero />
      <TrustStrip />
      <Features />
      <SecondaryFeatures />
      <Pricing />
      <Faq />
      <FinalCta />
      <Footer />
    </main>
  )
}

/* ─── Shared building blocks ────────────────────────────────────────────── */

/**
 * Product media presented like a sticker: a solid lime backdrop peeking out
 * at an angle behind a slightly tilted browser frame. Straightens on hover.
 */
function StickerFrame({
  children,
  tilt = "right",
  className,
}: {
  children: ReactNode
  tilt?: "left" | "right"
  className?: string
}) {
  return (
    <div className={cn("group relative", className)}>
      <div
        aria-hidden
        className={cn(
          "absolute inset-0 rounded-2xl bg-lime-300 transition-transform duration-300 ease-out dark:bg-lime-400/70",
          tilt === "right"
            ? "translate-x-2.5 translate-y-3 rotate-2 group-hover:translate-x-1.5 group-hover:translate-y-2 group-hover:rotate-1"
            : "-translate-x-2.5 translate-y-3 -rotate-2 group-hover:-translate-x-1.5 group-hover:translate-y-2 group-hover:-rotate-1"
        )}
      />
      <MediaFrame
        className={cn(
          "relative transition-transform duration-300 ease-out group-hover:rotate-0",
          tilt === "right" ? "-rotate-1" : "rotate-1"
        )}
      >
        {children}
      </MediaFrame>
    </div>
  )
}

/** Sentence-length eyebrow with a marker-highlight background. */
function Highlight({ children }: { children: ReactNode }) {
  return (
    <p className="inline-block rounded-md bg-lime-200/80 px-2.5 py-1 text-sm font-semibold text-lime-950 dark:bg-lime-400/15 dark:text-lime-300">
      {children}
    </p>
  )
}

function CheckItem({ children }: { children: ReactNode }) {
  return (
    <li className="flex items-start gap-3 text-sm">
      <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-lime-200/80 dark:bg-lime-400/15">
        <Check className="size-3 text-lime-800 dark:text-lime-300" />
      </span>
      {children}
    </li>
  )
}

const primaryCta =
  "inline-flex items-center gap-2 rounded-full bg-lime-300 px-6 py-3 font-medium text-lime-950 shadow-sm transition-all hover:-translate-y-0.5 hover:bg-lime-400 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-500"
const secondaryCta =
  "inline-flex items-center gap-2 rounded-full border border-fd-border bg-fd-card px-6 py-3 font-medium transition-all hover:-translate-y-0.5 hover:bg-fd-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-500"

/* ─── Hero ──────────────────────────────────────────────────────────────── */

function Hero() {
  return (
    <section className="relative">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[40rem] bg-[radial-gradient(ellipse_60%_50%_at_50%_-20%,--alpha(var(--color-lime-400)/18%),transparent)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[28rem] bg-[radial-gradient(circle,--alpha(var(--color-fd-foreground)/7%)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_75%_80%_at_50%_0%,black,transparent)] [background-size:22px_22px]"
      />
      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 px-6 pt-20 pb-24 sm:pt-28 lg:grid-cols-[1.1fr_1fr] lg:gap-12 lg:pt-32 lg:pb-32">
        <div>
          <p className="border-fd-border bg-fd-card text-fd-muted-foreground mb-6 inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-sm">
            <span className="size-1.5 rounded-full bg-lime-500" />
            Self-hosted. Docker-native. Yours.
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Host game servers on your own hardware,{" "}
            <span className="bg-gradient-to-br from-lime-500 to-green-600 bg-clip-text text-transparent dark:from-lime-300 dark:to-lime-500">
              without the hassle
            </span>
          </h1>
          <p className="text-fd-muted-foreground mt-6 max-w-xl text-lg">
            Basalt is a modern control panel for self-hosted game servers.
            Deploy Minecraft, Hytale and more as Docker containers, manage them
            from a fast web UI, and share access with anyone: your friends, your
            team, or a whole community.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Link
              href="/docs/getting-started/installation"
              className={primaryCta}
            >
              Get started
              <ArrowRight className="size-4" />
            </Link>
            <Link href="/docs" className={secondaryCta}>
              Read the docs
            </Link>
          </div>
        </div>

        <StickerFrame tilt="right" className="lg:mt-4">
          <MediaPlaceholder
            label="Panel overview: instances dashboard"
            hint="Hero screenshot or short screen recording (16:9)"
            className="rounded-none border-0"
          />
        </StickerFrame>
      </div>
    </section>
  )
}

/* ─── Trust strip ───────────────────────────────────────────────────────── */

function TrustStrip() {
  const items = [
    { icon: Container, text: "Runs anywhere Docker runs" },
    { icon: Blocks, text: "Minecraft & Hytale templates out of the box" },
    { icon: Lock, text: "Your data never leaves your machines" },
    { icon: Globe, text: "Playit.gg tunnels, no port forwarding" },
  ]

  return (
    <section className="border-fd-border bg-fd-card/50 border-y">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-x-8 gap-y-5 px-6 py-10 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <div
            key={item.text}
            className="text-fd-muted-foreground flex items-center justify-center gap-2.5 text-sm"
          >
            <item.icon className="size-4 shrink-0 text-lime-700 dark:text-lime-400" />
            {item.text}
          </div>
        ))}
      </div>
    </section>
  )
}

/* ─── Feature rows ──────────────────────────────────────────────────────── */

interface Feature {
  icon: typeof Server
  eyebrow: string
  highlight: string
  title: string
  description: string
  bullets: string[]
  media: { label: string; hint: string }
  href: string
  linkText: string
}

const features: Feature[] = [
  {
    icon: LayoutTemplate,
    eyebrow: "Templates",
    highlight: "Pick a template, fill in a form, hit deploy.",
    title: "Deploy a server in minutes, not evenings",
    description:
      "Templates describe everything about a game server (Docker image, versions, environment variables and a full settings UI), so you never have to hand-edit a config file to get running.",
    bullets: [
      "Official Minecraft and Hytale templates, maintained by the Basalt team",
      "Rich setting forms with selects, sliders, memory pickers and conditional fields",
      "Register your own templates from JSON or straight from a Git repository",
    ],
    media: {
      label: "Deploy flow: template picker and settings form",
      hint: "GIF: choosing the Minecraft template and deploying",
    },
    href: "/docs/getting-started/first-instance",
    linkText: "Deploy your first instance",
  },
  {
    icon: SquareTerminal,
    eyebrow: "Console",
    highlight: "Logs and commands, live in the browser.",
    title: "A live console that keeps up with your server",
    description:
      "Stream server output in real time and send commands without leaving the browser. No SSH session, no docker exec: the console lives right next to the rest of your instance.",
    bullets: [
      "Real-time log streaming over the daemon connection",
      "Send commands directly to the server process",
      "Live CPU and memory metrics alongside the output",
    ],
    media: {
      label: "Live console screencast",
      hint: "GIF: logs streaming + sending a command",
    },
    href: "/docs/guides/console",
    linkText: "How the console works",
  },
  {
    icon: FolderTree,
    eyebrow: "Files",
    highlight: "Everything that matters, nothing that breaks.",
    title: "Browse and edit server files with guardrails",
    description:
      "A built-in file browser and editor scoped to what actually matters. Templates define the root folder, hide internals and mark critical paths read-only, so nobody nukes the world folder by accident.",
    bullets: [
      "Full file browser with uploads and in-browser editing",
      "Per-template read-only and hidden paths",
      "Syntax-highlighted editor for configs and scripts",
    ],
    media: {
      label: "File browser and editor",
      hint: "Screenshot: editing server.properties",
    },
    href: "/docs/guides/files",
    linkText: "Explore the file browser",
  },
  {
    icon: ArchiveRestore,
    eyebrow: "Backups",
    highlight: "Set the policy once, stop worrying.",
    title: "Backups that happen without you thinking about them",
    description:
      "Define what to back up once (worlds, configs, whole data dirs), then let policies take care of the schedule. Restore from the panel when something goes wrong.",
    bullets: [
      "Backup targets defined per template, scheduled per instance",
      "Encrypted at rest with your own key",
      "Browse, download and restore backups from the panel",
    ],
    media: {
      label: "Backups tab with policy editor",
      hint: "Screenshot: backup list + schedule dialog",
    },
    href: "/docs/guides/backups",
    linkText: "Read the backup guide",
  },
  {
    icon: Globe,
    eyebrow: "Playit tunnels",
    highlight: "A public address with one toggle.",
    title: "Share your server without touching your router",
    description:
      "Basalt integrates playit.gg tunnels so players can join servers running behind NAT. No port forwarding, no static IP, no dynamic DNS dance: toggle it on and share the address.",
    bullets: [
      "One-click tunnel per instance",
      "TCP and UDP support, configured by the template",
      "Works from home networks, behind CGNAT, anywhere",
    ],
    media: {
      label: "Playit tunnel setup",
      hint: "GIF: enabling the tunnel and copying the address",
    },
    href: "/docs/guides/playit",
    linkText: "How tunnels work",
  },
  {
    icon: Server,
    eyebrow: "Nodes",
    highlight: "Every machine you own, one panel.",
    title: "One panel, all of your machines",
    description:
      "Install the Basalt daemon on any machine with Docker (a spare PC, a homelab box, a VPS, a rack in the office) and it becomes a node. The panel schedules instances onto nodes and streams their health back to you.",
    bullets: [
      "Lightweight daemon, authenticated with a per-node API key",
      "Live host and Docker metrics for every node",
      "Instances stay isolated in their own containers",
    ],
    media: {
      label: "Nodes overview with live metrics",
      hint: "Screenshot: node list + metrics detail",
    },
    href: "/docs/concepts/nodes",
    linkText: "Learn about nodes",
  },
  {
    icon: Users,
    eyebrow: "Access control",
    highlight: "Exactly the access each person needs.",
    title: "Give everyone exactly the access they need",
    description:
      "Invite people by email, group permissions into roles, and scope what each person can see and do, per instance and per node. Works the same for a friends server or a company fleet: moderators get the console, players get the join address, auditors get read-only.",
    bullets: [
      "Fine-grained permissions on instances and nodes",
      "Reusable roles for common setups",
      "Email invites and password resets built in",
    ],
    media: {
      label: "Permissions editor",
      hint: "Screenshot: role editor with permission matrix",
    },
    href: "/docs/guides/access-control",
    linkText: "Set up roles and invites",
  },
]

function Features() {
  return (
    <section
      id="features"
      className="mx-auto w-full max-w-6xl scroll-mt-20 px-6 py-28 lg:py-36"
    >
      <div className="mx-auto mb-24 max-w-2xl text-center lg:mb-32">
        <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-5xl">
          Everything a game server needs, in one panel
        </h2>
        <p className="text-fd-muted-foreground mt-5 text-lg">
          Stop juggling SSH sessions, cron jobs and port forwarding guides.
          Basalt covers the whole lifecycle of a self-hosted game server.
        </p>
      </div>
      <div className="flex flex-col gap-28 lg:gap-40">
        {features.map((feature, i) => (
          <FeatureRow
            key={feature.title}
            feature={feature}
            reversed={i % 2 === 1}
            panel={i % 2 === 0}
          />
        ))}
      </div>
    </section>
  )
}

function FeatureRow({
  feature,
  reversed,
  panel,
}: {
  feature: Feature
  reversed: boolean
  panel: boolean
}) {
  return (
    <div
      className={cn(
        "grid items-center gap-12 lg:grid-cols-2 lg:gap-20",
        panel &&
          "bg-fd-card/60 ring-fd-border rounded-3xl p-8 ring-1 sm:p-12 lg:p-16"
      )}
    >
      <div className={cn(reversed && "lg:order-2")}>
        <p className="mb-4 flex items-center gap-2 text-sm font-medium text-lime-700 dark:text-lime-400">
          <feature.icon className="size-4" />
          {feature.eyebrow}
        </p>
        <h3 className="text-2xl font-bold tracking-tight text-balance sm:text-3xl">
          {feature.title}
        </h3>
        <div className="mt-4">
          <Highlight>{feature.highlight}</Highlight>
        </div>
        <p className="text-fd-muted-foreground mt-4">{feature.description}</p>
        <Link
          href={feature.href}
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-lime-700 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-500 dark:text-lime-400"
        >
          {feature.linkText}
          <ArrowRight className="size-3.5" />
        </Link>
        <ul className="mt-8 flex flex-col gap-3.5">
          {feature.bullets.map((bullet) => (
            <CheckItem key={bullet}>{bullet}</CheckItem>
          ))}
        </ul>
      </div>
      <StickerFrame
        tilt={reversed ? "left" : "right"}
        className={cn(reversed && "lg:order-1")}
      >
        <MediaPlaceholder
          label={feature.media.label}
          hint={feature.media.hint}
          className="rounded-none border-0"
        />
      </StickerFrame>
    </div>
  )
}

/* ─── Secondary feature grid ────────────────────────────────────────────── */

function SecondaryFeatures() {
  const items = [
    {
      icon: FileCode2,
      title: "Schema-validated templates",
      description:
        "Templates are plain JSON validated against a published schema, so they are easy to write, review and share.",
    },
    {
      icon: GitBranch,
      title: "Templates from Git",
      description:
        "Point Basalt at a Git repository and keep your community templates versioned like code.",
    },
    {
      icon: Radio,
      title: "Live everything",
      description:
        "Instance status, console output and metrics stream to the panel in real time. No refresh button.",
    },
    {
      icon: KeyRound,
      title: "Secure by default",
      description:
        "Per-node API keys, signed sessions and encrypted backups. You control every secret.",
    },
    {
      icon: Mail,
      title: "Email built in",
      description:
        "Invites and password resets out of the box. Bring your own provider, or log to console in dev.",
    },
    {
      icon: ShieldCheck,
      title: "Isolated instances",
      description:
        "Every server runs in its own Docker container with its own resources, environment and lifecycle.",
    },
  ]

  return (
    <section className="border-fd-border bg-fd-card/50 border-t">
      <div className="mx-auto w-full max-w-6xl px-6 py-28">
        <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
          And the details are covered too
        </h2>
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.title}
              className="border-fd-border bg-fd-background rounded-2xl border p-7 transition-all hover:-translate-y-1 hover:border-lime-400/50 hover:shadow-lg hover:shadow-lime-400/5"
            >
              <span className="flex size-10 items-center justify-center rounded-xl bg-lime-200/80 dark:bg-lime-400/15">
                <item.icon className="size-5 text-lime-800 dark:text-lime-300" />
              </span>
              <h3 className="mt-4 font-semibold">{item.title}</h3>
              <p className="text-fd-muted-foreground mt-2 text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Pricing ───────────────────────────────────────────────────────────── */

interface Plan {
  name: string
  price: string
  period?: string
  description: string
  features: string[]
  cta: { text: string; href: string }
  highlighted?: boolean
}

const plans: Plan[] = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description:
      "Everything you need to run servers for yourself and a friend.",
    features: [
      "2 user seats",
      "2 instance seats",
      "1 node",
      "All templates, console, files & backups",
      "Playit.gg tunnels",
      "Community support",
    ],
    cta: {
      text: "Get free key",
      href: `${licenseServerUrl}/checkout?tier=free`,
    },
  },
  {
    name: "Hobby",
    price: "$9.99",
    period: "per month",
    description: "For teams and communities that outgrow the free tier.",
    features: [
      "6 user seats",
      "10 instance seats",
      "2 nodes",
      "Everything in Free",
      "Priority support",
    ],
    cta: { text: "Get Hobby", href: `${licenseServerUrl}/checkout?tier=hobby` },
    highlighted: true,
  },
  {
    name: "Pay as you go",
    price: "$4.99",
    period: "per month + usage",
    description:
      "No caps, pay for what you actually run, at any scale.",
    features: [
      "$1.49 per active user",
      "$9.99 per node",
      "$2.49 per instance",
      "Everything in Hobby",
      "Uncapped seats and nodes",
    ],
    cta: {
      text: "Get Pay as you go",
      href: `${licenseServerUrl}/checkout?tier=payg`,
    },
  },
]

function Pricing() {
  return (
    <section
      id="pricing"
      className="mx-auto w-full max-w-6xl scroll-mt-20 px-6 py-28 lg:py-36"
    >
      <div className="mx-auto mb-16 max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-5xl">
          Self-hosted first. Free to start.
        </h2>
        <p className="text-fd-muted-foreground mt-5 text-lg">
          Basalt runs on your hardware either way; plans only change how many
          seats and nodes you can attach.
        </p>
      </div>
      <div className="grid items-start gap-6 lg:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={cn(
              "flex flex-col rounded-3xl border p-8",
              plan.highlighted
                ? "bg-fd-card border-lime-400/70 shadow-xl shadow-lime-400/10 lg:-mt-4 lg:mb-[-1rem] lg:py-12"
                : "border-fd-border bg-fd-card/50"
            )}
          >
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">{plan.name}</h3>
              {plan.highlighted ? (
                <span className="rounded-full bg-lime-200/80 px-3 py-1 text-xs font-semibold text-lime-950 dark:bg-lime-400/15 dark:text-lime-300">
                  Most popular
                </span>
              ) : null}
            </div>
            <p className="mt-5 flex items-baseline gap-1.5">
              <span className="text-5xl font-bold tracking-tight">
                {plan.price}
              </span>
              {plan.period ? (
                <span className="text-fd-muted-foreground text-sm">
                  {plan.period}
                </span>
              ) : null}
            </p>
            <p className="text-fd-muted-foreground mt-3 text-sm">
              {plan.description}
            </p>
            <ul className="mt-7 flex flex-1 flex-col gap-3">
              {plan.features.map((feature) => (
                <CheckItem key={feature}>{feature}</CheckItem>
              ))}
            </ul>
            <Link
              href={plan.cta.href}
              className={cn(
                "mt-9 inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-500",
                plan.highlighted
                  ? "bg-lime-300 text-lime-950 hover:bg-lime-400"
                  : "border-fd-border bg-fd-background hover:bg-fd-accent border"
              )}
            >
              {plan.cta.text}
            </Link>
          </div>
        ))}
      </div>
      <PaygCalculator
        checkoutHref={`${licenseServerUrl}/checkout?tier=payg`}
      />
    </section>
  )
}

/* ─── FAQ ───────────────────────────────────────────────────────────────── */

/** `text` is the plain-text answer for structured data when `answer` contains JSX. */
const faqs: { question: string; answer: ReactNode; text?: string }[] = [
  {
    question: "What do I need to run Basalt?",
    answer:
      "Any machine that can run Docker: a homelab server, a spare PC, a NAS, a VPS or your own datacenter. The whole stack (panel, backend, database and node daemon) is deployed with Docker Compose.",
  },
  {
    question: "Which games are supported?",
    answer: (
      <>
        Minecraft and Hytale have official templates today, and any game that
        can run in a Docker container can be added with a template: a single
        JSON file that describes the image, settings and backups. See the{" "}
        <Link
          href="/docs/templates"
          className="text-lime-700 hover:underline dark:text-lime-400"
        >
          template docs
        </Link>{" "}
        to write your own.
      </>
    ),
    text: "Minecraft and Hytale have official templates today, and any game that can run in a Docker container can be added with a template: a single JSON file that describes the image, settings and backups.",
  },
  {
    question: "Do my friends need port forwarding to join?",
    answer:
      "No. Basalt integrates playit.gg tunnels, so servers running behind NAT or CGNAT get a public address with one toggle. If you prefer classic port forwarding, that works too.",
  },
  {
    question: "What are the free tier limits?",
    answer:
      "The free tier includes 2 user seats, 2 instance seats and 1 node, enough to run a couple of servers on a single machine with a friend. Hobby raises those limits, and Pay as you go removes them entirely with usage-based pricing.",
  },
  {
    question: "Where does my data live?",
    answer:
      "On your machines, full stop. Worlds, configs, backups and the database all stay on hardware you control. Backups are encrypted with a key that you set.",
  },
  {
    question: "Is Basalt only for hobbyists?",
    answer:
      "No. The same platform scales from a weekend Minecraft server with friends to a studio running fleets of game servers across many nodes. Role-based access control, per-node isolation and encrypted backups are built in, and the Pay as you go plan removes the seat, instance and node caps entirely.",
  },
  {
    question: "Can multiple people manage the same panel?",
    answer:
      "Yes. Invite users by email and control what each of them can do with roles and per-resource permissions, down to who can open the console on a specific instance.",
  },
]

function Faq() {
  return (
    <section id="faq" className="border-fd-border bg-fd-card/50 border-t">
      <div className="mx-auto w-full max-w-3xl scroll-mt-20 px-6 py-28">
        <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
          Frequently asked questions
        </h2>
        <div className="mt-14 flex flex-col gap-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group border-fd-border bg-fd-background rounded-2xl border px-6 py-5 transition-colors open:border-lime-400/40 open:pb-6"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium [&::-webkit-details-marker]:hidden">
                {faq.question}
                <ChevronDown className="text-fd-muted-foreground size-4 shrink-0 transition-transform group-open:rotate-180" />
              </summary>
              <div className="text-fd-muted-foreground mt-3 text-sm">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Structured data ───────────────────────────────────────────────────── */

function HomeJsonLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Organization",
            "@id": `${siteUrl}/#organization`,
            name: appName,
            url: siteUrl,
            logo: `${siteUrl}/logo.png`,
            sameAs: [githubUrl, templatesRepoUrl],
          },
          {
            "@type": "WebSite",
            "@id": `${siteUrl}/#website`,
            name: appName,
            url: siteUrl,
            publisher: { "@id": `${siteUrl}/#organization` },
          },
          {
            "@type": "SoftwareApplication",
            name: appName,
            description: appDescription,
            url: siteUrl,
            applicationCategory: "DeveloperApplication",
            operatingSystem: "Linux, macOS, Windows (Docker)",
            softwareHelp: `${siteUrl}/docs`,
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
              description:
                "Free tier: 2 user seats, 2 instance seats and 1 node.",
            },
          },
          {
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text:
                  typeof faq.answer === "string"
                    ? faq.answer
                    : (faq.text ?? ""),
              },
            })),
          },
        ],
      }}
    />
  )
}

/* ─── Final CTA + footer ────────────────────────────────────────────────── */

function FinalCta() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-28">
      <div className="relative overflow-hidden rounded-3xl bg-lime-300 px-8 py-20 text-center text-lime-950 sm:px-16">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,--alpha(var(--color-lime-950)/8%)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_80%_90%_at_50%_100%,black,transparent)] [background-size:22px_22px]"
        />
        <h2 className="relative text-3xl font-bold tracking-tight text-balance sm:text-5xl">
          Your hardware is ready. Are you?
        </h2>
        <p className="relative mx-auto mt-5 max-w-xl text-lg text-lime-950/80">
          One Docker Compose file between you and your own game server platform.
        </p>
        <div className="relative mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/docs/getting-started/installation"
            className="inline-flex items-center gap-2 rounded-full bg-lime-950 px-6 py-3 font-medium text-lime-100 transition-all hover:-translate-y-0.5 hover:bg-lime-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-800"
          >
            Install Basalt
            <ArrowRight className="size-4" />
          </Link>
          <a
            href={githubUrl}
            className="inline-flex items-center gap-2 rounded-full border border-lime-950/30 px-6 py-3 font-medium transition-all hover:-translate-y-0.5 hover:bg-lime-200/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-800"
          >
            Star on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
