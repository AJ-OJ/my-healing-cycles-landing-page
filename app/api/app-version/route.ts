import { NextResponse } from "next/server";
import appVersion from "@/data/app-version.json";

// The app polls this endpoint (see the mobile app's
// src/features/settings/appUpdateCheck.ts) to learn whether a newer beta
// APK has been published, since direct-APK installs have no automatic
// update channel. To ship a new beta build: build the APK, drop it in
// public/downloads/ (see that folder's README), bump "latestVersion" in
// data/app-version.json to match app.json's "version" for that build, then
// commit and push (Vercel auto-deploys on push to main).
//
// no-store: this must never be cached (by the browser, a CDN edge, or
// Vercel's data cache) or users could be told they're up to date when
// they're not.
export async function GET() {
  return NextResponse.json(appVersion, {
    headers: { "Cache-Control": "no-store" },
  });
}
