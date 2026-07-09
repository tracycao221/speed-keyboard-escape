import type { Metadata } from "next";
import Link from "next/link";
import { activeCodes, faqs, siteConfig } from "@/data/site";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";

export const metadata: Metadata = {
  title: { absolute: `${siteConfig.gameName} Codes: No Working Codes Yet` },
  description: `No verified working ${siteConfig.gameName} code is public as of July 9, 2026. Check code status, the free group gift, sources, and safe redeem guidance.`,
  alternates: { canonical: `${siteConfig.domain}/codes` },
  openGraph: {
    title: `${siteConfig.gameName} Codes: No Working Codes Yet`,
    description: `No verified working ${siteConfig.gameName} code is public as of July 9, 2026. Check code status, the free group gift, sources, and safe redeem guidance.`,
    url: `${siteConfig.domain}/codes`,
    images: ["/codes/opengraph-image"]
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.gameName} Codes: No Working Codes Yet`,
    description: `No verified working ${siteConfig.gameName} code is public as of July 9, 2026. Check code status, the free group gift, sources, and safe redeem guidance.`,
    images: ["/codes/opengraph-image"]
  }
};

export default function CodesPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Codes", href: "/codes" }]} />
      <FaqJsonLd items={faqs.codes} />
      <Breadcrumbs items={[{ label: "Codes", href: "/codes" }]} />

      <PageIntro
        eyebrow="Freshness-sensitive"
        title={`${siteConfig.gameName} Codes: No Working Codes Yet`}
        description="No creator-announced public code string is verified today. This page separates code claims from the official free group gift and shows where a future code must be confirmed."
      />
      <section className="mt-8 grid gap-4 md:grid-cols-3">
        <article className="content-card">
          <span className="mini-label">Verified working codes</span>
          <h2 className="mt-3 text-2xl font-bold text-white">0</h2>
          <p className="mt-2 text-sm leading-6 text-white/66">No public creator-announced code string passed the July 9 check.</p>
        </article>
        <article className="content-card">
          <span className="mini-label">Official reward signal</span>
          <h2 className="mt-3 text-2xl font-bold text-white">Free group gift</h2>
          <p className="mt-2 text-sm leading-6 text-white/66">This is a group reward, not a verified redeem code.</p>
        </article>
        <article className="content-card">
          <span className="mini-label">Official title</span>
          <h2 className="mt-3 text-2xl font-bold text-white">[X4] Candy & Chocolate</h2>
          <p className="mt-2 text-sm leading-6 text-white/66">Current Roblox title signal checked July 9, 2026.</p>
        </article>
      </section>

      <section className="mt-10">
        <SectionHeader
          eyebrow="Active list"
          title="Active codes (checked 2026-07-09)"
          copy="No creator-announced public code string is verified here today. If a code is not listed here as active, it has not passed the current Roblox and creator-surface checks for Speed Keyboard Escape."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {activeCodes.map((code) => (
            <article key={code.code} className="content-card">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h2 className="font-mono text-2xl font-extrabold text-[color:var(--accent)]">{code.code}</h2>
                <span className="status-pill">{code.status}</span>
              </div>
              <p className="mt-3 text-white/70">{code.reward}</p>
              <p className="mt-2 text-sm text-white/45">Added or checked: {code.addedDate}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-10 grid gap-4 lg:grid-cols-2">
        <article className="content-card">
          <SectionHeader
            eyebrow="Redeem flow"
            title="How to verify a redeem flow safely"
            copy="The exact in-game code UI should be confirmed from the live game before publishing button names or step-by-step screenshots. Use this checklist instead of trusting copied code guides."
          />
          <ol className="mt-5 grid gap-3 text-white/70">
            <li>1. Open Speed Keyboard Escape from the official Roblox page.</li>
            <li>2. Check the official game description, creator group, and any creator-linked Discord for a currently announced code string.</li>
            <li>3. Confirm that the live game still exposes a redeem UI before publishing any step names.</li>
            <li>4. Leave reward amounts unverified unless the creator or live game confirms them directly.</li>
          </ol>
        </article>
        <article className="content-card">
          <SectionHeader
            eyebrow="Verification"
            title="What to do after checking code status"
            copy="After checking the current code status, open the wins guide or planner before spending Robux or chasing unverified reward claims. The official game page currently signals a free group gift, but this site does not attach an unverified item value or code reward amount to that claim."
          />
        </article>
      </section>
      <section className="mt-10">
        <SectionHeader
          eyebrow="Related answers"
          title="Continue with the page that matches your query"
          copy="Code status stays here; wins and Stage 12 searches belong in guides, mechanic lookups belong in the wiki, and official-link questions belong on the source-status route."
        />
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/" className="button-secondary">Speed Keyboard Escape hub</Link>
          <Link href="/guides/how-to-get-wins-fast" className="button-secondary">How to get wins fast</Link>
          <Link href="/wiki" className="button-secondary">Boosts, wins, and map wiki</Link>
          <Link href="/trello" className="button-secondary">Discord and Trello status</Link>
        </div>
      </section>
    </main>
  );
}
