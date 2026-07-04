import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: { absolute: `About ${siteConfig.gameName} Wiki` },
  description: `About this unofficial ${siteConfig.gameName} Roblox guide site, its source policy, and correction process.`
};

export default function AboutPage() {
  return (
    <main className="mx-auto grid max-w-5xl gap-8 px-5 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "About", href: "/about" }]} />
      <Breadcrumbs items={[{ label: "About", href: "/about" }]} />
      <PageIntro
        eyebrow="About"
        title={`About ${siteConfig.gameName} Wiki`}
        description="This is an unofficial player-help site for codes status, wins, stages, updates, source checks, and safer upgrade decisions."
      />
      <section className="content-card">
        <SectionHeader eyebrow="Editorial model" title="Built for checked Roblox help" />
        <p className="mt-4 text-white/70">
          We separate official Roblox and creator sources from competitor articles, YouTube vocabulary, and community reports. Codes, rewards,
          boost values, and update claims stay labelled until a source can support them.
        </p>
      </section>
      <section className="content-card">
        <SectionHeader eyebrow="Corrections" title="Send source-backed fixes" />
        <p className="mt-4 text-white/70">
          Use the contact page to send corrections, screenshots, official links, or current in-game evidence. We prioritize fixes that affect
          active codes, hard-stage routes, official-link safety, and player spending decisions.
        </p>
      </section>
    </main>
  );
}
