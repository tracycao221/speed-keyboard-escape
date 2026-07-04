import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";
import { getGuidePage, guideHref, guidePages } from "@/data/guides";
import { siteConfig } from "@/data/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return guidePages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getGuidePage(slug);
  if (!page) return {};

  const canonical = `${siteConfig.domain}${guideHref(page.slug)}`;
  return {
    title: { absolute: page.metaTitle },
    description: page.description,
    alternates: { canonical },
    openGraph: {
      title: page.metaTitle,
      description: page.description,
      url: canonical,
      images: ["/opengraph-image"]
    },
    twitter: {
      card: "summary_large_image",
      title: page.metaTitle,
      description: page.description,
      images: ["/opengraph-image"]
    }
  };
}

export default async function GuideDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getGuidePage(slug);
  if (!page) notFound();

  const relatedPages = page.related
    .map((relatedSlug) => getGuidePage(relatedSlug))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Guides", href: "/guides" },
          { name: page.title, href: guideHref(page.slug) }
        ]}
      />
      <FaqJsonLd items={page.faq} />
      <Breadcrumbs
        items={[
          { label: "Guides", href: "/guides" },
          { label: page.title, href: guideHref(page.slug) }
        ]}
      />

      <PageIntro eyebrow={page.eyebrow} title={page.title} description={page.intro}>
        <div className="flex flex-wrap gap-3">
          <Link className="button-primary" href="/">
            Speed Keyboard Escape wiki
          </Link>
          <Link className="button-secondary" href="/guides">
            All guides
          </Link>
          <Link className="button-secondary" href="/codes">
            Active code
          </Link>
        </div>
      </PageIntro>

      <section className="mt-10 grid gap-5 lg:grid-cols-2">
        {page.sections.map((section) => (
          <article key={section.title} className="content-card">
            <SectionHeader eyebrow={section.eyebrow} title={section.title} copy={section.body} />
            <ul className="mt-5 grid gap-3 text-sm leading-6 text-white/70">
              {section.bullets.map((bullet) => (
                <li key={bullet} className="rounded-md border border-white/10 bg-white/[0.03] px-3 py-2">
                  {bullet}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="mt-10">
        <SectionHeader
          eyebrow="Related guides"
          title="Keep checking the next Speed Keyboard Escape decision"
          copy="These pages link together so players can move from first steps to codes, speed boost strategy, updates, and source checks without leaving the site."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {relatedPages.map((related) => (
            <Link key={related.slug} href={guideHref(related.slug)} className="content-card">
              <span className="mini-label">{related.eyebrow}</span>
              <h2 className="mt-3 text-xl font-bold text-white">{related.title}</h2>
              <p className="mt-2 text-sm leading-6 text-white/65">{related.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <SectionHeader eyebrow="FAQ" title={`${page.title} FAQ`} />
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {page.faq.map((item) => (
            <article key={item.q} className="content-card">
              <h2 className="text-lg font-bold text-white">{item.q}</h2>
              <p className="mt-2 text-sm leading-6 text-white/70">{item.a}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-10 rounded-lg border border-white/10 bg-white/[0.03] p-5">
        <h2 className="text-xl font-bold text-white">Source note</h2>
        <p className="mt-2 text-sm leading-6 text-white/68">
          This page is part of an unofficial fan site. For official support and purchases, use Roblox and the creator-owned
          channels. For checked claims on this site, start from the{" "}
          <Link className="text-[color:var(--accent)] underline" href="/sources">
            sources page
          </Link>
          .
        </p>
      </section>
    </main>
  );
}
