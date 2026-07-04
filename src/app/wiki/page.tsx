import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig, wikiCards } from "@/data/site";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";

export const metadata: Metadata = {
  title: { absolute: `${siteConfig.gameName} Wiki: boosts, wins & Map` },
  description: `${siteConfig.gameName} wiki hub for boosts, speed boosts, map notes, controls, items, code sources, and live game systems without invented drop rates.`,
  alternates: { canonical: `${siteConfig.domain}/wiki` },
  openGraph: {
    title: `${siteConfig.gameName} Wiki: boosts, wins & Map`,
    description: `${siteConfig.gameName} wiki hub for boosts, speed boosts, map notes, controls, items, code sources, and live game systems without invented drop rates.`,
    url: `${siteConfig.domain}/wiki`,
    images: ["/opengraph-image"]
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.gameName} Wiki: boosts, wins & Map`,
    description: `${siteConfig.gameName} wiki hub for boosts, speed boosts, map notes, controls, items, code sources, and live game systems without invented drop rates.`,
    images: ["/opengraph-image"]
  }
};

export default function WikiPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Wiki", href: "/wiki" }]} />
      <Breadcrumbs items={[{ label: "Wiki", href: "/wiki" }]} />
      <PageIntro
        eyebrow="Wiki hub"
        title={`${siteConfig.gameName} Wiki: boosts, wins, Map, and Controls`}
        description="Use this hub for boosts, speed boosts, map notes, rewards, controls, and other live game details that help players decide what to do next."
      />

      <section className="mt-10">
        <SectionHeader
          eyebrow="Game topics"
          title="Choose the Speed Keyboard Escape wiki topic you need"
          copy="Start with the topics that affect your next code, speed boost, upgrade, reward, build, or route decision."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {wikiCards.map((card) => (
            <Link key={card.title} href={card.href} className="content-card">
              <span className="mini-label">{card.eyebrow}</span>
              <h2 className="mt-3 text-xl font-bold text-white">{card.title}</h2>
              <p className="mt-2 text-sm leading-6 text-white/65">{card.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
