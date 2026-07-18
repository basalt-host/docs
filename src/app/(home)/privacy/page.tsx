import Link from "next/link"
import type { Metadata } from "next"
import { Footer } from "@/components/footer"
import { appName } from "@/lib/shared"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `What ${appName} collects on basalt.host, the license server, and how self-hosted Basalt installations handle your data.`,
  alternates: { canonical: "/privacy" },
}

const effectiveDate = "July 22, 2026"

export default function PrivacyPage() {
  return (
    <main className="flex flex-1 flex-col">
      <article className="mx-auto w-full max-w-3xl px-6 pt-16 pb-20 sm:pt-24">
        <h1 className="text-4xl font-bold tracking-tight">Privacy Policy</h1>
        <p className="text-fd-muted-foreground mt-4 text-lg">
          Effective {effectiveDate}
        </p>

        <div className="prose mt-10">
          <p>
            This Privacy Policy explains what{" "}
            <strong>[Legal Entity Name]</strong> (&quot;Basalt&quot;,
            &quot;we&quot;, &quot;us&quot;) collects when you use the{" "}
            {appName} website at <Link href="/">basalt.host</Link>, purchase
            or activate a Basalt license, or run a self-hosted Basalt
            installation that talks to our license server. It does not
            cover data inside your own Basalt installation, which we never
            receive.
          </p>

          <h2>1. The short version</h2>
          <ul>
            <li>
              <strong>Your game servers are yours.</strong> Worlds, server
              files, backups, console logs, user accounts, and everything
              else inside a self-hosted Basalt panel stay on your own
              hardware. We do not have access to them and do not collect
              them.
            </li>
            <li>
              <strong>Payments go through Polar.</strong> We use{" "}
              <a href="https://polar.sh" target="_blank" rel="noopener noreferrer">
                Polar
              </a>{" "}
              as merchant of record for paid plans. Polar collects your
              billing details directly; we only receive limited order and
              subscription metadata.
            </li>
            <li>
              <strong>License checks are minimal.</strong> A Basalt
              installation periodically contacts our license server with
              your license key, an activation ID, an instance ID/name you
              choose, and (on the Pay as you go plan) aggregate counts of
              users, instances, and nodes, for entitlement and billing
              purposes only.
            </li>
            <li>
              <strong>Site analytics are cookieless.</strong> basalt.host
              uses privacy-preserving analytics with no tracking cookies.
            </li>
          </ul>

          <h2>2. Information we collect</h2>

          <h3>2.1 Website (basalt.host)</h3>
          <p>
            When you browse the Site, we use{" "}
            <a
              href="https://vercel.com/docs/analytics"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vercel Analytics
            </a>{" "}
            to understand aggregate traffic (pages visited, referrers,
            approximate location from IP, device type). This is
            cookieless and does not build an individual profile of you
            across sites. Our hosting provider may also log standard web
            server data (IP address, user agent, request timestamps) for
            security and abuse prevention.
          </p>

          <h3>2.2 Purchases and billing</h3>
          <p>
            Checkout is hosted by Polar. Polar collects the information
            needed to process your payment: name, email, billing address,
            and payment method. We do not see or store your full card
            details. Through Polar&apos;s webhooks, we receive order and
            subscription events (for example, that an order was paid, or a
            customer&apos;s subscription state changed) so we can keep
            license entitlements in sync; this may include your email and a
            Polar-assigned customer ID.
          </p>

          <h3>2.3 License activation and validation</h3>
          <p>
            When you activate a license key from a Basalt installation, the
            installation sends the license server:
          </p>
          <ul>
            <li>The license key and a generated activation ID;</li>
            <li>
              An instance ID and optional instance name you choose (e.g. a
              hostname or label), used only to identify the activation in
              your Polar customer portal;
            </li>
            <li>
              On the Pay as you go plan, periodic aggregate counts of
              active users, instances, and nodes, used to meter usage-based
              billing and reported to Polar.
            </li>
          </ul>
          <p>
            These requests do not include game server contents, player
            data, file contents, IP addresses of your game servers, or the
            identities of the individual users on your Basalt installation.
          </p>

          <h3>2.4 Self-hosted panel data</h3>
          <p>
            Everything you configure inside your own Basalt installation
            (owner and invited-user accounts, permissions, instance
            configuration, console output, files, and backups) is stored on
            infrastructure you control and is never transmitted to us. If
            your installation sends outbound email (for invites or password
            resets), that traffic goes through the email provider you
            configure, not through Basalt&apos;s infrastructure.
          </p>

          <h2>3. How we use information</h2>
          <p>We use the information described above to:</p>
          <ul>
            <li>Operate and secure the Site and license server;</li>
            <li>Issue, validate, and meter license keys and subscriptions;</li>
            <li>
              Respond to support requests and communicate about your
              account or purchase;
            </li>
            <li>
              Understand aggregate Site usage to improve documentation,
              pricing, and features;
            </li>
            <li>Detect, investigate, and prevent abuse or fraud.</li>
          </ul>
          <p>
            We do not sell your personal information, and we do not use it
            for third-party advertising.
          </p>

          <h2>4. How we share information</h2>
          <p>We share information only with:</p>
          <ul>
            <li>
              <strong>Polar</strong>, to process payments and manage
              subscriptions and license keys, as your merchant of record;
            </li>
            <li>
              <strong>Infrastructure providers</strong> (such as our
              hosting and analytics providers) who process data on our
              behalf under their own confidentiality and data protection
              terms;
            </li>
            <li>
              Others, if required by law, to protect our rights, or with
              your consent.
            </li>
          </ul>

          <h2>5. Data retention</h2>
          <p>
            We retain license activation and usage metadata for as long as
            your license key is active and for a limited period afterward
            to handle support requests, disputes, and legal obligations.
            Billing records are retained by Polar under their own retention
            policy, including as required for tax and accounting purposes.
            Aggregate, de-identified analytics data may be retained
            indefinitely.
          </p>

          <h2>6. Your rights</h2>
          <p>
            Depending on where you live, you may have rights to access,
            correct, export, or delete personal information we hold about
            you, or to object to or restrict certain processing. Because
            most billing data is held by Polar as merchant of record,
            requests about payment information are often best directed to
            Polar directly; for anything held by us, contact us at{" "}
            <a href="mailto:privacy@basalt.host">[privacy@basalt.host]</a>{" "}
            and we will respond within a reasonable time.
          </p>

          <h2>7. International transfers</h2>
          <p>
            Our infrastructure and service providers may process data in
            countries other than your own. Where required, we rely on
            appropriate safeguards (such as standard contractual clauses or
            equivalent mechanisms) for these transfers.
          </p>

          <h2>8. Children&apos;s privacy</h2>
          <p>
            The Service is not directed to children under 16, and we do not
            knowingly collect personal information from them. If you
            believe a child has provided us personal information, contact
            us and we will delete it.
          </p>

          <h2>9. Changes to this policy</h2>
          <p>
            We may update this Privacy Policy from time to time. If we make
            material changes, we will update the effective date above and,
            where appropriate, post a notice on the Site.
          </p>

          <h2>10. Contact</h2>
          <p>
            Questions about this Privacy Policy can be sent to{" "}
            <a href="mailto:privacy@basalt.host">[privacy@basalt.host]</a> or
            via{" "}
            <a
              href="https://github.com/basalt-host/basalt"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            . See also our <Link href="/terms">Terms of Service</Link>.
          </p>
        </div>
      </article>
      <Footer />
    </main>
  )
}
