export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Football Fusion 3 Wiki",
  shortName: "Football Fusion 3",
  logoText: "FF3",
  tagline: "Codes, Controls, Positions & Guides",
  description: "Explore Football Fusion 3 Wiki for Roblox football guides, controls, positions, strategies, updates, gameplay tips, and everything players need to master competitive matches.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://footballfusion3.top",
  gameUrl: "https://www.roblox.com/games/82866880824588/Football-Fusion-3",
  heroVideoId: "OhYyi6rn458", // Roblox Football Fusion 3 showcase & gameplay video
  social: {
    discord: "https://discord.com/invite/footballfusion",
    youtube: "https://www.youtube.com/watch?v=OhYyi6rn458",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
