import type { GameConfig } from "@/types/site";

export const gameConfig: GameConfig = {
  name: "+1 Speed Keyboard Escape",
  slug: "1-speed-keyboard-escape",
  domain: "https://speed-keyboard-escape.com",
  theme: {
    primaryColor: "#22C55E",
    accentColor: "#F97316",
    surfaceColor: "#101317",
    style: "roblox-speed-obby-hub"
  },
  currency: {
    name: "Wins",
    abbr: "Wins"
  },
  features: {
    hasCalculator: true,
    hasTierList: true,
    hasCodesPage: true,
    hasBrainrotIndex: false,
    hasHandbook: true
  },
  updateCadence: "Checked around major updates and code-source changes",
  dataSources: {
    officialGameUrl: "https://www.roblox.com/games/95082159892680/1-Speed-Keyboard-Escape-Candy-Chocolate",
    discord: "#",
    trello: "#"
  },
  ads: {
    publisher: "Adsterra + Google AdSense ready",
    usesRuntimeConfig: true
  }
};
