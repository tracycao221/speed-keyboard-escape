function readEnv(value: string | undefined): string | undefined {
  return value && value.trim().length > 0 ? value : undefined;
}

const defaultAdsterraPopunderScriptUrl =
  "https://pl30112033.effectivecpmnetwork.com/1e/f3/eb/1ef3eba5c9263584734bbf6bb986653e.js";

export const runtimeConfig = {
  adsenseClientId: readEnv(process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID),
  adsterraBannerId: readEnv(process.env.NEXT_PUBLIC_ADSTERRA_BANNER_ID),
  adsterraBanner300x250Key:
    readEnv(process.env.NEXT_PUBLIC_ADSTERRA_BANNER_300X250_KEY) ||
    readEnv(process.env.NEXT_PUBLIC_ADSTERRA_BANNER_ID),
  adsterraBanner300x250ScriptUrl: readEnv(process.env.NEXT_PUBLIC_ADSTERRA_BANNER_300X250_SCRIPT_URL),
  adsterraBanner320x50Key: readEnv(process.env.NEXT_PUBLIC_ADSTERRA_BANNER_320X50_KEY),
  adsterraBanner320x50ScriptUrl: readEnv(process.env.NEXT_PUBLIC_ADSTERRA_BANNER_320X50_SCRIPT_URL),
  adsterraBanner728x90Key:
    readEnv(process.env.NEXT_PUBLIC_ADSTERRA_BANNER_728X90_KEY) ||
    readEnv(process.env.NEXT_PUBLIC_ADSTERRA_LEADERBOARD_ID),
  adsterraBanner728x90ScriptUrl: readEnv(process.env.NEXT_PUBLIC_ADSTERRA_BANNER_728X90_SCRIPT_URL),
  adsterraNative1Id: readEnv(process.env.NEXT_PUBLIC_ADSTERRA_NATIVE_1_ID),
  adsterraNative1ScriptUrl: readEnv(process.env.NEXT_PUBLIC_ADSTERRA_NATIVE_1_SCRIPT_URL),
  adsterraNative2Id: readEnv(process.env.NEXT_PUBLIC_ADSTERRA_NATIVE_2_ID),
  adsterraNative2ScriptUrl: readEnv(process.env.NEXT_PUBLIC_ADSTERRA_NATIVE_2_SCRIPT_URL),
  adsterraLeaderboardId: readEnv(process.env.NEXT_PUBLIC_ADSTERRA_LEADERBOARD_ID),
  adsterraSmartLinkUrl: readEnv(process.env.NEXT_PUBLIC_ADSTERRA_SMARTLINK_URL),
  adsterraEnablePopunder: readEnv(process.env.NEXT_PUBLIC_ADSTERRA_ENABLE_POPUNDER) === "true",
  adsterraPopunderScriptUrl:
    readEnv(process.env.NEXT_PUBLIC_ADSTERRA_POPUNDER_SCRIPT_URL) || defaultAdsterraPopunderScriptUrl,
  adsterraBanner468x60Key: readEnv(process.env.NEXT_PUBLIC_ADSTERRA_BANNER_468X60_KEY),
  adsterraBanner468x60ScriptUrl: readEnv(process.env.NEXT_PUBLIC_ADSTERRA_BANNER_468X60_SCRIPT_URL),
  adsterraBanner160x600Key: readEnv(process.env.NEXT_PUBLIC_ADSTERRA_BANNER_160X600_KEY),
  adsterraBanner160x600ScriptUrl: readEnv(process.env.NEXT_PUBLIC_ADSTERRA_BANNER_160X600_SCRIPT_URL),
  adsterraBanner160x300Key: readEnv(process.env.NEXT_PUBLIC_ADSTERRA_BANNER_160X300_KEY),
  adsterraBanner160x300ScriptUrl: readEnv(process.env.NEXT_PUBLIC_ADSTERRA_BANNER_160X300_SCRIPT_URL),
  adsterraEnableStickyRail: readEnv(process.env.NEXT_PUBLIC_ADSTERRA_ENABLE_STICKY_RAIL) === "true",
  adsterraEnableSocialBar: readEnv(process.env.NEXT_PUBLIC_ADSTERRA_ENABLE_SOCIAL_BAR) === "true",
  adsterraSocialBarScriptUrl: readEnv(process.env.NEXT_PUBLIC_ADSTERRA_SOCIAL_BAR_SCRIPT_URL),
  analyticsId: readEnv(process.env.NEXT_PUBLIC_ANALYTICS_ID)
};
