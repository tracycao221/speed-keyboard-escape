import type { Metadata } from "next";
import { CalculatorTool } from "@/components/tools/CalculatorTool";
import { faqs, siteConfig } from "@/data/site";
import { BreadcrumbJsonLd, FaqJsonLd, SoftwareApplicationJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro } from "@/components/ui/content";

export const metadata: Metadata = {
  title: { absolute: `${siteConfig.gameName} Wins Planner` },
  description: `Use the ${siteConfig.gameName} planner to decide whether to use, save, or upgrade speed boosts after codes, with live game-safe guidance instead of fake odds.`,
  alternates: { canonical: `${siteConfig.domain}/calculator` },
  openGraph: {
    title: `${siteConfig.gameName} Wins Planner`,
    description: `Use the ${siteConfig.gameName} planner to decide whether to use, save, or upgrade speed boosts after codes, with live game-safe guidance instead of fake odds.`,
    url: `${siteConfig.domain}/calculator`,
    images: ["/opengraph-image"]
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.gameName} Wins Planner`,
    description: `Use the ${siteConfig.gameName} planner to decide whether to use, save, or upgrade speed boosts after codes, with live game-safe guidance instead of fake odds.`,
    images: ["/opengraph-image"]
  }
};

export default function CalculatorPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Calculator", href: "/calculator" }]} />
      <SoftwareApplicationJsonLd />
      <FaqJsonLd items={faqs.calculator} />
      <Breadcrumbs items={[{ label: "Calculator", href: "/calculator" }]} />
      <PageIntro
        eyebrow="Primary tool"
        title={`${siteConfig.gameName} Wins Planner`}
        description="Use this live game-safe planner to decide whether to use, save, or upgrade speed boosts after claiming codes. It gives guidance, not fake drop rates."
      />
      <section className="mt-10">
        <CalculatorTool />
      </section>
    </main>
  );
}
