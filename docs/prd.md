## TODO

- [x] chore: organize project structure
  - added CLAUDE.md, AGENTS.md, .gitignore (following yt-dlp-ext pattern)
- [x] chore: deploy app https://developers.cloudflare.com/workers/static-assets/
- [x] chore: link to github https://github.com/hi-ogawa/zipview
- [x] chore: add example zip from vitest html artifact
- [x] `?url=` param for public URLs (GitHub artifact download requires auth, but pre-signed Azure blob URLs and S3 buckets work)
- [x] File picker button (not just drag-and-drop) — mobile/accessibility
- [ ] refactor: rework code
  - deduplicate fflate import (script tag on line 6 is dead weight, only the ES module import is needed)
  - share constants (CACHE_NAME, PREFIX) between index.html and sw.js instead of duplicating
  - move MIME map to sw.js (it's serving the files, not the main thread)
  - add try/catch around unzipSync for corrupt/non-zip files
  - consider async unzip for large zips (fflate has async `unzip`)
  - SW scope may break under subpath hosting
  - fix XSS: fetch error display uses innerHTML with unsanitized err.message and ?url= param
  - parallelize cache.put() with Promise.all (currently sequential per-file)
  - status bar never hides — should reset to hidden when idle
  - SW ready blocks event listener registration — make non-blocking, show "registering…" status instead

## Backlog

- [ ] Persist last zip in IndexedDB so refresh doesn't lose state
- [ ] Provide CLI / API to package SPA into "index.html + sw.js" bundle
- [ ] Integrate as Vitest html reporter two files mode
