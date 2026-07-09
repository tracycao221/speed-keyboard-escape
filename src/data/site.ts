import type { EditorialSignal, FaqItem, GameCode, HeroMetric, LinkCard, SiteConfig, TierPreviewItem } from "@/types/site";
import { gameConfig } from "@/data/game.config";

export const siteConfig: SiteConfig = {
  name: `${gameConfig.name} Wiki`,
  domain: gameConfig.domain,
  gameName: gameConfig.name,
  description: `${gameConfig.name} codes, stage guides, speed and wins tips, tier list notes, official Discord/Trello status, update tracker, and a conservative wins planner.`,
  valueProposition: `Check whether ${gameConfig.name} has active codes, learn how to get wins faster, clear Stage 12-style walls, and choose boosts without relying on fake rewards or unverified tier claims.`,
  shortDisclosure: `${gameConfig.name} Wiki is an unofficial, fan-made Roblox resource. Roblox, SecretVerse Studio, and the official game page remain the source of record for updates and support.`,
  lastUpdated: "2026-07-09",
  freshnessLabel: "codes, update, and source status checked July 9, 2026",
  keywords: [
    `${gameConfig.name}`,
    `${gameConfig.name} codes`,
    "speed keyboard escape codes",
    `${gameConfig.name} tier list`,
    `${gameConfig.name} stage 12`,
    `${gameConfig.name} wins`,
    `${gameConfig.name} discord`,
    `${gameConfig.name} trello`,
    `${gameConfig.name} wiki`,
    "speed keyboard escape update",
    "speed keyboard escape admin abuse",
    "Roblox speed obby codes"
  ],
  navGroups: [
    { label: "Home", href: "/", items: [] },
    {
      label: "Codes",
      href: "/codes",
      items: [
        { label: "Speed Keyboard Escape Codes", href: "/codes", description: "Active, expired, and social-code status with checked dates." },
        { label: "Source Checks", href: "/sources", description: "Where code, update, and official-link claims are verified." }
      ]
    },
    {
      label: "Tier List",
      href: "/tier-list",
      items: [
        { label: "Boost Tier List", href: "/tier-list", description: "Rank boosts, passes, and progression choices by use case." },
        { label: "Wins Planner", href: "/calculator", description: "Pick a next move for wins, speed, stages, or updates." }
      ]
    },
    {
      label: "Wiki",
      href: "/wiki",
      items: [
        { label: "Speed Keyboard Escape Wiki", href: "/wiki", description: "Stages, worlds, wins, speed, treadmills, trails, and sources." },
        { label: "Guides", href: "/guides", description: "Beginner, Stage 12, wins, updates, and tips." },
        { label: "Trello / Discord Status", href: "/trello", description: "Official link checks and safety notes." }
      ]
    },
    {
      label: "About",
      href: "/disclosure",
      items: [
        { label: "About", href: "/about", description: "Who maintains this unofficial player resource." },
        { label: "Disclosure", href: "/disclosure", description: "Fan-made status and ad/source boundaries." },
        { label: "Contact", href: "/contact", description: "Corrections and source submissions." },
        { label: "Privacy", href: "/privacy", description: "Privacy, ads, and analytics information." },
        { label: "Terms", href: "/terms", description: "Terms for using the unofficial guide." }
      ]
    }
  ]
};

export const heroActions = [
  { href: "/codes", label: "Codes status" },
  { href: "/guides/stage-12-guide", label: "Stage 12 guide" },
  { href: "/tier-list", label: "Boost tier list" },
  { href: "/calculator", label: "Wins planner" }
] as const;

export const heroMetrics: HeroMetric[] = [
  { label: "Code status", value: "No verified public code", note: "Official game page mentions a free group gift, but no creator-announced code string is verified" },
  { label: "Game type", value: "Speed obby", note: "Keyboard obstacle + speed simulator loop" },
  { label: "Core help", value: "Wins", note: "Routes, speed boosts, stages, and update timing" },
  { label: "Source model", value: "Labelled", note: "Official, competitor, and community claims separated" }
];

export const activeCodes: GameCode[] = [
  {
    code: "No verified public code",
    reward: "Competitor guides still describe social-code or Discord-code flows, and the official Roblox game page mentions a free group gift. No creator-announced public code string or reward amount is verified here yet.",
    status: "Needs check",
    addedDate: "Checked 2026-07-09"
  }
];

export const tierPreview: TierPreviewItem[] = [
  {
    name: "Speed Multiplier boosts",
    tier: "S",
    role: "Progression speed",
    reason: "Multipliers improve every run, so they are usually the first category to compare before cosmetics.",
    confidence: "Early signal",
    bestFor: ["wins", "stage pushing"],
    sourceNote: "Gamepass and boost names are visible through third-party mirrors; exact value needs live price checks."
  },
  {
    name: "Treadmill / training boosts",
    tier: "A",
    role: "Farming setup",
    reason: "Training boosts help players prepare before attempting harder keyboard lanes or world gates.",
    confidence: "Needs check",
    bestFor: ["farming", "new worlds"],
    sourceNote: "Mechanic observed in public guides and mirrors; exact returns are not published."
  },
  {
    name: "Trails and auras",
    tier: "B",
    role: "Cosmetic / secondary",
    reason: "Useful if they include bonuses, but should rank below direct speed or win multipliers until effects are verified.",
    confidence: "Needs check",
    bestFor: ["style", "late upgrades"],
    sourceNote: "Do not treat visual items as top-tier without confirmed gameplay bonuses."
  }
];

export const toolCards: LinkCard[] = [
  { title: "Wins Planner", href: "/calculator", eyebrow: "Primary tool", description: "Choose whether your next session should focus on codes, wins, speed, Stage 12, or update/event timing." },
  { title: `${gameConfig.name} Codes`, href: "/codes", eyebrow: "Codes", description: "Tracks active, expired, and unverified social-code claims without inventing rewards." },
  { title: `${gameConfig.name} Tier List`, href: "/tier-list", eyebrow: "Rankings", description: "Compares boosts, training, trails, and progression categories by player goal." },
  { title: "Trello, Discord & Wiki status", href: "/trello", eyebrow: "Official links", description: "Checks whether public Trello, Discord, wiki, and Roblox links are official or only community-reported." }
];

export const guideClusters: LinkCard[] = [
  { title: "Beginner guide", href: "/guides/beginner-guide", eyebrow: "Guide", description: "Start safely, build speed, farm wins, and avoid wasting time on unverified code claims." },
  { title: "Stage 12 guide", href: "/guides/stage-12-guide", eyebrow: "Guide", description: "A conservative route checklist for hard stages and maze-style sections." },
  { title: "How to get wins fast", href: "/guides/how-to-get-wins-fast", eyebrow: "Guide", description: "Prioritize speed, multipliers, and repeatable runs before chasing cosmetics." }
];

export const wikiCards: LinkCard[] = [
  { title: "Stages and worlds", href: "/wiki", eyebrow: "Wiki", description: "Candy & Chocolate, world gates, difficult stages, and route notes with confidence labels." },
  { title: "Speed and wins", href: "/wiki", eyebrow: "Wiki", description: "How speed accumulation, wins, multipliers, and training choices fit together." },
  { title: "Boosts, trails, and auras", href: "/wiki", eyebrow: "Wiki", description: "A structured list of upgrade categories, held until effects and prices are confirmed." }
];

export const officialLinks: LinkCard[] = [
  { title: "Official Roblox game page", href: gameConfig.dataSources.officialGameUrl, eyebrow: "Official", description: "Source of record for the current title, creator, game access, and Roblox-side updates." },
  { title: "SecretVerse Studio group", href: "https://www.roblox.com/communities/1074557114/SecretVerse-Studio", eyebrow: "Creator-owned", description: "Use the real creator group to verify the official free-group-gift claim and future Roblox announcements." },
  { title: "SecretVerse Discord invite", href: gameConfig.dataSources.discord ?? "https://discord.gg/secretverse", eyebrow: "Creator-linked", description: "A live SecretVerse invite is still worth checking for announcements, but this run did not directly prove ownership from an official Roblox surface, so treat it as a linked community channel until reconfirmed." },
  { title: "Source checklist", href: "/sources", eyebrow: "Editorial", description: "Explains which claims are official, reported by competitors, or still unverified." }
];

export const editorialSignals: EditorialSignal[] = [
  { title: "No fake codes", body: "If a public code cannot be verified from an official or reliable live source, it stays marked as needs check instead of being published as active." },
  { title: "Speed-first help", body: "The launch site focuses on what players search for first: codes, wins, Stage 12, boost choices, and official links." },
  { title: "Update aware", body: "Update and event pages keep time-sensitive claims separate from stable beginner guidance." }
];

export const videoGuides: LinkCard[] = [
  { title: "Current gameplay and update videos", href: "https://www.youtube.com/results?search_query=%2B1+Speed+Keyboard+Escape+update", eyebrow: "YouTube", description: "Use recent videos to spot update vocabulary, but verify factual claims before publishing." },
  { title: "Stage and wins walkthroughs", href: "https://www.youtube.com/results?search_query=%2B1+Speed+Keyboard+Escape+stage+12+wins", eyebrow: "YouTube", description: "Useful for route language, Stage 12 demand, and wins-guide sections." },
  { title: "Tier list and best boosts", href: "https://www.youtube.com/results?search_query=%2B1+Speed+Keyboard+Escape+tier+list", eyebrow: "YouTube", description: "Holds ranking claims until boost effects and gameplay evidence are confirmed." }
];

export const faqs: Record<string, FaqItem[]> = {
  home: [
    { q: `What is ${gameConfig.name}?`, a: `${gameConfig.name} is a Roblox speed obby and simulator-style game where players build speed, run keyboard lanes, clear stages, and farm wins.` },
    { q: `Are there active ${gameConfig.name} codes?`, a: "As of the July 9, 2026 site check, this site does not publish any verified active public code string. Competitors still report social-code or Discord-code flows, and the official game page still signals a free group gift, so check the codes page for the current status." },
    { q: `Does ${gameConfig.name} have a Trello?`, a: "No official public Trello was verified as of July 9, 2026. The Trello page tracks Discord, wiki, Roblox group, and board status separately." },
    { q: "What should I do first?", a: "Check codes, build speed safely, farm early wins, then use the Stage 12 and wins guides before spending Robux or chasing a tier list." }
  ],
  codes: [
    { q: `Are there working ${gameConfig.name} codes?`, a: "No verified public active code string is published here yet. Unverified social-code claims are tracked separately so players do not waste time." },
    { q: "Where should codes be checked?", a: "Check the official Roblox page, creator/group surfaces, in-game code UI, and reliable competitor updates before listing a code as active." }
  ],
  calculator: [
    { q: "What does the wins planner calculate?", a: "It gives conservative next-step guidance for codes, wins, speed, hard stages, and update windows. It does not pretend to know hidden formulas." },
    { q: "Can it tell exact win rates?", a: "Not until verified speed, multiplier, and reward formulas are available." }
  ],
  tierList: [
    { q: "What does the tier list rank?", a: "The launch tier list ranks boost and progression categories by use case: speed, wins, training, and cosmetics." },
    { q: "Is the tier list final?", a: "No. Exact boosts and values are marked needs check until official data or live tests confirm them." }
  ]
};
