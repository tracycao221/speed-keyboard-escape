import type { Metadata } from "next";
import { activeCodes, faqs, siteConfig } from "@/data/site";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";

export const metadata: Metadata = {
  title: { absolute: `${siteConfig.gameName} Codes: No verified public code & Rewards` },
  description: `Checked ${siteConfig.gameName} codes page with No verified public code, reward notes, redeem area redeem steps, source confidence, and what to do after claiming wins.`,
  alternates: { canonical: `${siteConfig.domain}/codes` },
  openGraph: {
    title: `${siteConfig.gameName} Codes: No verified public code & Rewards`,
    description: `Checked ${siteConfig.gameName} codes page with No verified public code, reward notes, redeem area redeem steps, source confidence, and what to do after claiming wins.`,
    url: `${siteConfig.domain}/codes`,
    images: ["/codes/opengraph-image"]
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.gameName} Codes: No verified public code & Rewards`,
    description: `Checked ${siteConfig.gameName} codes page with No verified public code, reward notes, redeem area redeem steps, source confidence, and what to do after claiming wins.`,
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
        title={`${siteConfig.gameName} Codes: No verified public code and Rewards`}
        description="Speed Keyboard Escape is in live game. This page lists the checked No verified public code code, the reward note, how to redeem it, and where to go next before spending speed boosts."
      />

      <section className="mt-10">
        <SectionHeader
          eyebrow="Active list"
          title="Active codes (checked 2026-06-28)"
          copy="No verified public code is the only code confirmed in current site content. If a code is not listed here, we could not verify it for Speed Keyboard Escape."
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
            title="How to redeem Speed Keyboard Escape codes"
            copy="Codes are redeemed from the in-game redeem area. Steps are based on community reports during the live game and may change as the game updates."
          />
          <ol className="mt-5 grid gap-3 text-white/70">
            <li>1. Open Speed Keyboard Escape from the official Roblox page.</li>
            <li>2. Open the Menu, then go to your Bag.</li>
            <li>3. Type or paste the code (for example, No verified public code).</li>
            <li>4. Press Redeem to claim your speed boosts.</li>
          </ol>
        </article>
        <article className="content-card">
          <SectionHeader
            eyebrow="Verification"
            title="What to do after claiming speed boosts"
            copy="After checking the current code status, open the wins guide or planner before spending Robux or chasing unverified rewards. We avoid unverified code claims so players do not waste time on wrong Roblox experiences."
          />
        </article>
      </section>
    </main>
  );
}
