import type { Metadata } from "next";
import Link from "next/link";
import { guideClusters, siteConfig } from "@/data/site";
import { guideHref, guidePages } from "@/data/guides";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";

export const metadata: Metadata = {
  title: { absolute: `${siteConfig.gameName} Guides: Beginner, boosts & Tips` },
  description: `Beginner ${siteConfig.gameName} guides for how to play, clear Stage 12, use speed boosts, check updates, and avoid wasting upgrades during the live game.`,
  alternates: { canonical: `${siteConfig.domain}/guides` },
  openGraph: {
    title: `${siteConfig.gameName} Guides: Beginner, boosts & Tips`,
    description: `Beginner ${siteConfig.gameName} guides for how to play, clear Stage 12, use speed boosts, check updates, and avoid wasting upgrades during the live game.`,
    url: `${siteConfig.domain}/guides`,
    images: ["/opengraph-image"]
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.gameName} Guides: Beginner, boosts & Tips`,
    description: `Beginner ${siteConfig.gameName} guides for how to play, clear Stage 12, use speed boosts, check updates, and avoid wasting upgrades during the live game.`,
    images: ["/opengraph-image"]
  }
};

export default function GuidesPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Guides", href: "/guides" }]} />
      <Breadcrumbs items={[{ label: "Guides", href: "/guides" }]} />
      <PageIntro
        eyebrow="Guide hub"
        title={`${siteConfig.gameName} Guides for Beginners, boosts, and Updates`}
        description="Use this hub for how to play, how to clear Stage 12, speed boost choices, live game updates, safe upgrade decisions, and source-backed beginner help."
      />

      <section className="mt-10">
        <SectionHeader
          eyebrow="Recommended guides"
          title="Start with the question you searched"
          copy="Pick the guide that matches your current problem, then check codes, boost rankings, calculator notes, or wiki details before spending rare resources."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {guideClusters.map((guide) => (
            <Link key={guide.title} href={guide.href} className="content-card">
              <span className="mini-label">{guide.eyebrow}</span>
              <h2 className="mt-3 text-xl font-bold text-white">{guide.title}</h2>
              <p className="mt-2 text-sm leading-6 text-white/65">{guide.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <SectionHeader
          eyebrow="Expanded guide library"
          title="More Speed Keyboard Escape walkthroughs, tips, and strategy pages"
          copy="These indexable guides cover beginner intent, how-to-play searches, walkthrough searches, FAQ queries, and update checks."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {guidePages.map((guide) => (
            <Link key={guide.slug} href={guideHref(guide.slug)} className="content-card">
              <span className="mini-label">{guide.eyebrow}</span>
              <h2 className="mt-3 text-xl font-bold text-white">{guide.title}</h2>
              <p className="mt-2 text-sm leading-6 text-white/65">{guide.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
