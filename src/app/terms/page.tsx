import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: { absolute: `${siteConfig.gameName} Wiki Terms of Service` },
  description: `Terms of service for the unofficial ${siteConfig.gameName} Roblox guide site.`,
  alternates: { canonical: `${siteConfig.domain}/terms` }
};

export default function TermsPage() {
  return (
    <main className="mx-auto grid max-w-5xl gap-8 px-5 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Terms", href: "/terms" }]} />
      <Breadcrumbs items={[{ label: "Terms", href: "/terms" }]} />
      <PageIntro
        eyebrow="Terms"
        title="Terms of Service"
        description="Use this site as unofficial player guidance. Roblox, SecretVerse Studio, and the official game page remain the source of record."
      />
      <section className="content-card">
        <SectionHeader eyebrow="Use" title="Informational content only" />
        <p className="mt-4 text-white/70">
          The guides, tier notes, planner output, and source labels are informational. They are not official support, guaranteed rewards, or
          instructions from Roblox or the game creator.
        </p>
      </section>
      <section className="content-card">
        <SectionHeader eyebrow="Accuracy" title="Time-sensitive claims can change" />
        <p className="mt-4 text-white/70">
          Codes, update timing, boost values, stage layouts, and official links may change. Check the visible updated date and official Roblox
          sources before making spending or account-safety decisions.
        </p>
      </section>
    </main>
  );
}
