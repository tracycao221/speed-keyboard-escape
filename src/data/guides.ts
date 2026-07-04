import { siteConfig } from "@/data/site";

export type GuidePage = {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  eyebrow: string;
  intro: string;
  sections: Array<{ eyebrow: string; title: string; body: string; bullets: string[] }>;
  faq: Array<{ q: string; a: string }>;
  related: string[];
};

export const guidePages: GuidePage[] = [
  {
    slug: "beginner-guide",
    title: `${siteConfig.gameName} Beginner Guide`,
    metaTitle: `${siteConfig.gameName} Beginner Guide: Speed, Wins & Codes`,
    description: "A beginner guide for +1 Speed Keyboard Escape covering codes status, speed gains, wins, hard stages, and safe upgrade choices.",
    eyebrow: "Beginner guide",
    intro: "Start here if you joined +1 Speed Keyboard Escape and need a simple route from first run to useful wins without trusting fake codes or unverified boost math.",
    sections: [
      { eyebrow: "First session", title: "Check codes, then learn the speed loop", body: "The safest opening route is to check whether a verified code exists, then practice short runs before spending Robux or chasing hard-stage tricks.", bullets: ["Open the official Roblox game page so you do not join a clone.", "Check the codes page for verified, expired, and unverified social-code status.", "Run short keyboard lanes until you understand how speed affects control.", "Save Robux decisions until you know whether you need speed, wins, or cosmetics."] },
      { eyebrow: "Progression", title: "Build wins before chasing late stages", body: "Wins and speed usually compound across sessions. Focus on repeatable clears first, then use stage guides for walls like Stage 12.", bullets: ["Repeat reliable lanes instead of failing the hardest stage repeatedly.", "Use training or multiplier systems before pushing longer routes.", "Treat trails and auras as secondary until their bonuses are verified.", "Track updates because event boosts can change the best route."] }
    ],
    faq: [
      { q: "What should beginners do first?", a: "Check codes, practice easy keyboard lanes, farm early wins, and avoid spending on unverified boosts." },
      { q: "Should I rush Stage 12?", a: "No. Build speed and control first, then use the Stage 12 guide when you can repeat earlier stages reliably." }
    ],
    related: ["how-to-get-wins-fast", "stage-12-guide", "tips-and-tricks"]
  },
  {
    slug: "how-to-get-wins-fast",
    title: `${siteConfig.gameName}: How to Get Wins Fast`,
    metaTitle: `${siteConfig.gameName} Wins Guide: Get Wins Faster`,
    description: "How to get wins fast in +1 Speed Keyboard Escape with conservative speed, training, multiplier, and route priorities.",
    eyebrow: "Wins guide",
    intro: "Wins come from repeatable clears, not just one risky push. Use this guide to choose a route that matches your current speed and control.",
    sections: [
      { eyebrow: "Route choice", title: "Repeat your best reliable lane", body: "If you fail a lane most of the time, it is usually worse for wins than repeating a slightly easier route quickly.", bullets: ["Pick a stage you can clear most attempts.", "Increase speed before moving to longer or trickier lanes.", "Use event boosts only when you can stay focused for the whole window.", "Watch update pages for temporary win multipliers."] },
      { eyebrow: "Upgrade choice", title: "Prioritize direct speed and win gains", body: "Direct speed and win multipliers should be checked before cosmetic upgrades unless a cosmetic also grants a confirmed bonus.", bullets: ["Compare speed multipliers first.", "Use treadmills or training systems when they improve every run.", "Hold trail and aura rankings until bonuses are verified.", "Use the calculator when deciding your next session goal."] }
    ],
    faq: [
      { q: "What is the fastest way to get wins?", a: "Repeat the hardest lane you can clear consistently, then improve speed and multiplier systems before pushing harder stages." },
      { q: "Do cosmetics help wins?", a: "Only if they have a confirmed gameplay bonus. Otherwise, treat them as secondary." }
    ],
    related: ["beginner-guide", "stage-12-guide", "updates"]
  },
  {
    slug: "stage-12-guide",
    title: `${siteConfig.gameName} Stage 12 Guide`,
    metaTitle: `${siteConfig.gameName} Stage 12 Guide: Maze & Hard Stage Tips`,
    description: "A Stage 12 and hard-stage guide for +1 Speed Keyboard Escape with route discipline, speed control, and source-backed caution.",
    eyebrow: "Stage guide",
    intro: "Stage 12 appears in public guide demand, so this page gives a conservative hard-stage checklist while exact route screenshots are still being verified.",
    sections: [
      { eyebrow: "Preparation", title: "Do not enter underprepared", body: "Hard stages punish rushing. Before trying Stage 12-style routes, make sure your speed is high enough and your control is steady.", bullets: ["Clear earlier stages repeatedly before pushing forward.", "Lower mistakes by slowing down at tight turns.", "Use recent video guides for visual route language, but verify if the map changed.", "After updates, recheck whether obstacles or maze layouts moved."] },
      { eyebrow: "Execution", title: "Run the stage like a checklist", body: "Break hard stages into smaller sections instead of sprinting through the whole maze on instinct.", bullets: ["Pause mentally after each safe segment.", "Avoid overcorrecting when speed gets high.", "Record which turn or jump fails most often.", "Return to wins farming if repeated failures slow progression."] }
    ],
    faq: [
      { q: "Is this the exact Stage 12 route?", a: "This launch guide avoids unverified route claims. It will be updated when current visual evidence confirms the route." },
      { q: "Why is Stage 12 popular?", a: "Search and competitor guide signals show players get stuck there, so it deserves a dedicated route page." }
    ],
    related: ["how-to-get-wins-fast", "walkthrough", "faq"]
  },
  {
    slug: "updates",
    title: `${siteConfig.gameName} Updates`,
    metaTitle: `${siteConfig.gameName} Updates, Events & Admin Abuse Tracker`,
    description: "Track +1 Speed Keyboard Escape updates, event windows, admin-abuse countdown signals, title changes, and pages that need rechecking.",
    eyebrow: "Updates",
    intro: "Updates can change codes, stages, boosts, and event timing. This page keeps time-sensitive claims separate from stable beginner advice.",
    sections: [
      { eyebrow: "Watch list", title: "What to recheck after each update", body: "When the Roblox title changes or a countdown appears, recheck codes, stage routes, boost effects, and event rewards before editing guides.", bullets: ["Roblox title and description", "Code/social-code status", "Stage 12 or maze layout", "Win, speed, and boost behavior", "YouTube and competitor update vocabulary"] },
      { eyebrow: "Current signal", title: "Admin Abuse and Candy & Chocolate signals", body: "Launch research found update/countdown demand around Admin Abuse and the Candy & Chocolate title. Exact rewards and timing require live confirmation.", bullets: ["Keep event claims labelled until official or in-game proof exists.", "Use update pages for fresh keywords instead of changing stable guides too often.", "Record source URLs and checked dates.", "Retire outdated countdown text after the event passes."] }
    ],
    faq: [
      { q: "When is the next update?", a: "Use the updates page as a watch list; exact timing must be confirmed from the live game or official sources." },
      { q: "Do updates create new codes?", a: "Sometimes games do, but this site does not publish a new code unless it is verified." }
    ],
    related: ["beginner-guide", "how-to-get-wins-fast", "faq"]
  },
  {
    slug: "tips-and-tricks",
    title: `${siteConfig.gameName} Tips and Tricks`,
    metaTitle: `${siteConfig.gameName} Tips: Speed, Wins & Stages`,
    description: "Practical +1 Speed Keyboard Escape tips for speed control, wins farming, stage pushes, source checking, and update-aware play.",
    eyebrow: "Tips",
    intro: "Use these tips when you need a quick decision before a run, a boost window, or a difficult keyboard section.",
    sections: [
      { eyebrow: "Control", title: "High speed needs cleaner inputs", body: "More speed can make mistakes worse. Practice control as much as raw speed if you want consistent wins.", bullets: ["Take tight turns early.", "Avoid switching stages during a boost window unless you know the route.", "Use consistent camera and movement habits.", "Return to a reliable lane when frustrated."] },
      { eyebrow: "Sources", title: "Trust checked sources over viral claims", body: "Codes and tier rankings spread quickly. Check whether a guide names the exact game and shows a current date.", bullets: ["Avoid copy-pasted code lists with no Roblox proof.", "Check official links before joining random Discords.", "Treat exact boost values as unverified until tested.", "Use this site's source page for corrections."] }
    ],
    faq: [
      { q: "What is the best tip for faster progress?", a: "Farm the hardest lane you can clear reliably, then use speed and win boosts when they help every run." },
      { q: "Can I trust every tier list?", a: "No. A good tier list should explain its source and confidence, especially after updates." }
    ],
    related: ["beginner-guide", "how-to-get-wins-fast", "updates"]
  },
  {
    slug: "faq",
    title: `${siteConfig.gameName} FAQ`,
    metaTitle: `${siteConfig.gameName} FAQ: Codes, Stage 12, Wins & Trello`,
    description: "FAQ for +1 Speed Keyboard Escape codes, Stage 12, wins, tier list, official Discord/Trello/wiki status, and updates.",
    eyebrow: "FAQ",
    intro: "Quick answers for the recurring searches before players open a deeper guide.",
    sections: [
      { eyebrow: "Quick answers", title: "Most searched questions", body: "Most early searches are about codes, wins, Stage 12, boost rankings, and whether a Discord, Trello, or wiki is official.", bullets: ["Codes are only listed as active when verified.", "Stage 12 has enough demand for a dedicated guide.", "Boost rankings are goal-based until effects are confirmed.", "Official links are separated from community links."] }
    ],
    faq: [
      { q: "Is there an official wiki?", a: "No official wiki was verified during launch research." },
      { q: "What pages should I open first?", a: "Start with codes, beginner guide, wins guide, Stage 12 guide, and official-link status." }
    ],
    related: ["beginner-guide", "stage-12-guide", "updates"]
  }
];

export function getGuideBySlug(slug: string) {
  return guidePages.find((guide) => guide.slug === slug);
}

export function getGuidePage(slug: string) {
  return getGuideBySlug(slug);
}

export function guideHref(slug: string) {
  return `/guides/${slug}`;
}
