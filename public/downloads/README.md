# APK downloads

This folder is served as static files by Next.js/Vercel — anything placed
here is publicly reachable at `https://myhealingcycles.vercel.app/downloads/<filename>`.

Vercel deploys from git, not from files sitting locally, so the APK itself
has to be committed and pushed like any other file for the download link to
actually work in production. A binary in git isn't ideal long-term, but for
an occasional beta-APK update at this size it's the simplest thing that
works — no extra storage service to set up. If the repo ever grows
unwieldy from repeated large binary commits, moving to Vercel Blob storage
(or similar) is the natural next step; not needed to ship this beta.

## Publishing a new beta build

1. Run `eas build --platform android --profile preview` in the mobile app
   repo and wait for it to finish.
2. Download the resulting `.apk` from the EAS build page.
3. Rename it `my-healing-cycles-beta.apk` and place it in this folder,
   replacing the previous one.
4. Open `data/app-version.json` (repo root) and update `"latestVersion"` to
   match the `"version"` in the mobile app's `app.json` for this build.
   Update `"releaseNotes"` with a short line about what changed.
5. `git add`, commit, and push. Vercel auto-deploys on push, and the app's
   in-app "Check for updates" (Settings screen) will pick up the new
   version automatically once it's live.
