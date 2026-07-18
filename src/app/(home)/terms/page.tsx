import Link from "next/link"
import type { Metadata } from "next"
import { Footer } from "@/components/footer"
import { appName } from "@/lib/shared"

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `The terms that govern use of ${appName}, basalt.host, and Basalt license keys.`,
  alternates: { canonical: "/terms" },
}

const effectiveDate = "July 22, 2026"

export default function TermsPage() {
  return (
    <main className="flex flex-1 flex-col">
      <article className="mx-auto w-full max-w-3xl px-6 pt-16 pb-20 sm:pt-24">
        <h1 className="text-4xl font-bold tracking-tight">Terms of Service</h1>
        <p className="text-fd-muted-foreground mt-4 text-lg">
          Effective {effectiveDate}
        </p>

        <div className="prose mt-10">
          <p>
            These Terms of Service (&quot;Terms&quot;) govern your access to
            and use of the {appName} website at{" "}
            <Link href="/">basalt.host</Link> (the &quot;Site&quot;), the
            Basalt license server, and any license keys, accounts, or paid
            plans issued through them (together, the &quot;Service&quot;).
            The Service is operated by{" "}
            <strong>[Legal Entity Name], [Jurisdiction of Incorporation]</strong>{" "}
            (&quot;Basalt&quot;, &quot;we&quot;, &quot;us&quot;). By using the
            Site, purchasing a license, or activating a license key, you
            agree to these Terms. If you do not agree, do not use the
            Service.
          </p>

          <h2>1. What Basalt is</h2>
          <p>
            Basalt is self-hosted software for deploying and managing game
            servers. You install and run Basalt on your own hardware or
            infrastructure. These Terms cover the parts of Basalt that touch
            infrastructure we operate: this Site, the license server that
            issues and validates license keys, and checkout pages hosted by
            our payment processor. They do not give us any access to, or
            responsibility for, the game servers, files, accounts, or data
            you run inside your own Basalt installation. See our{" "}
            <Link href="/privacy">Privacy Policy</Link> for what the license
            server does and does not receive.
          </p>

          <h2>2. Accounts and license keys</h2>
          <ul>
            <li>
              A license key entitles a Basalt installation to a specific
              plan tier (Free, Hobby, or Pay as you go) with corresponding
              user, instance, and node limits, as described on our{" "}
              <Link href="/#pricing">pricing page</Link>.
            </li>
            <li>
              You are responsible for keeping your license key confidential.
              Activations are limited per key; if you exceed your plan&apos;s
              activation or seat limits, further activations may be refused
              until you deactivate an existing installation or upgrade.
            </li>
            <li>
              You must not share, resell, sublicense, or circumvent the
              activation or usage limits of a license key, or attempt to
              interfere with, reverse engineer, or bypass license validation
              in the Basalt software.
            </li>
            <li>
              Accounts inside a self-hosted Basalt panel (the owner account,
              invited users, and their permissions) are managed entirely by
              the operator of that installation. Basalt does not create,
              store, or have access to those accounts.
            </li>
          </ul>

          <h2>3. Payments and billing</h2>
          <p>
            Paid plans are billed and processed by{" "}
            <a href="https://polar.sh" target="_blank" rel="noopener noreferrer">
              Polar
            </a>
            , acting as merchant of record for the Service. Polar collects
            your payment details, issues invoices and receipts, handles
            taxes, and manages subscription billing under its own terms and
            privacy policy. We do not receive or store your full payment
            card details. Refunds, cancellations, and billing disputes are
            handled through Polar&apos;s customer portal, linked from your
            purchase confirmation.
          </p>
          <p>
            The Free tier is provided at no cost, subject to the usage
            limits described on the pricing page. We may change plan
            pricing or limits going forward; changes will not retroactively
            reduce the limits of a license key you have already purchased
            for its current billing period.
          </p>

          <h2>4. Software license</h2>
          <p>
            Basalt&apos;s source code is distributed under the license(s)
            included in its{" "}
            <a
              href={`https://github.com/basalt-host/basalt`}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub repository
            </a>
            , which govern your right to run, modify, and self-host the
            software. A paid license key does not grant additional
            intellectual property rights beyond what the repository license
            grants; it unlocks higher usage limits enforced by the license
            server. Basalt templates and documentation are separately
            licensed as noted in their respective repositories.
          </p>

          <h2>5. Acceptable use</h2>
          <p>You agree not to use the Service to:</p>
          <ul>
            <li>Violate any applicable law or third party&apos;s rights;</li>
            <li>
              Attempt to gain unauthorized access to the license server, the
              Site, or any account or system connected to them;
            </li>
            <li>
              Interfere with or disrupt the integrity or performance of the
              license server, including through abuse, rate-limit evasion,
              or automated scraping beyond what our public APIs document;
            </li>
            <li>
              Misrepresent your affiliation with Basalt, or use Basalt
              branding in a way that implies endorsement without our
              consent.
            </li>
          </ul>
          <p>
            You remain solely responsible for how you configure, secure, and
            operate your own Basalt installation, including compliance with
            the end user license agreements of any game (e.g. Minecraft,
            Hytale) you run through it. Basalt is not affiliated with
            Mojang, Microsoft, Hypixel Studios, or playit.gg, and hosting a
            game server through Basalt does not change your obligations
            under those publishers&apos; terms.
          </p>

          <h2>6. Third-party services</h2>
          <p>
            The Service integrates or links to third-party services,
            including Polar (payments), playit.gg (tunneling), Docker Hub
            and other container registries (game server images), and
            GitHub (source code and templates). Your use of those services
            is governed by their own terms and privacy policies, which we
            do not control.
          </p>

          <h2>7. Disclaimer of warranties</h2>
          <p>
            The Service, including the Site, the license server, and the
            Basalt software, is provided &quot;as is&quot; and &quot;as
            available&quot;, without warranties of any kind, whether
            express, implied, or statutory, including implied warranties of
            merchantability, fitness for a particular purpose, and
            non-infringement. We do not warrant that the Service will be
            uninterrupted, error-free, or that license validation will
            always be available; Basalt installations are designed to keep
            operating through short license server outages, but extended
            outages may affect activation or usage reporting.
          </p>

          <h2>8. Limitation of liability</h2>
          <p>
            To the maximum extent permitted by law, Basalt and its
            operators will not be liable for any indirect, incidental,
            special, consequential, or punitive damages, or any loss of
            data, revenue, or profits, arising from your use of the
            Service. Because your game servers, worlds, and data run on
            your own infrastructure, Basalt is not liable for their loss,
            corruption, or unavailability. Our total liability for any
            claim arising from the Service will not exceed the amount you
            paid us in the twelve months preceding the claim.
          </p>

          <h2>9. Termination</h2>
          <p>
            We may suspend or revoke a license key if you breach these
            Terms, including non-payment reported by Polar, license key
            abuse, or attempts to circumvent activation limits. You can stop
            using the Service at any time by uninstalling Basalt and
            cancelling your subscription through Polar&apos;s customer
            portal. Sections that by their nature should survive
            termination (including Sections 4, 7, 8, and 11) will survive.
          </p>

          <h2>10. Changes to these Terms</h2>
          <p>
            We may update these Terms from time to time. If we make
            material changes, we will update the effective date above and,
            where appropriate, post a notice on the Site. Continued use of
            the Service after a change takes effect constitutes acceptance
            of the revised Terms.
          </p>

          <h2>11. Governing law</h2>
          <p>
            These Terms are governed by the laws of{" "}
            <strong>[Governing Jurisdiction]</strong>, without regard to its
            conflict of laws principles. Any dispute arising from these
            Terms or the Service will be subject to the exclusive
            jurisdiction of the courts located in that jurisdiction, except
            where mandatory consumer protection law gives you the right to
            bring a claim in your local courts.
          </p>

          <h2>12. Contact</h2>
          <p>
            Questions about these Terms can be sent to{" "}
            <a href="mailto:legal@basalt.host">[legal@basalt.host]</a> or via{" "}
            <a
              href={`https://github.com/basalt-host/basalt`}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            .
          </p>
        </div>
      </article>
      <Footer />
    </main>
  )
}
