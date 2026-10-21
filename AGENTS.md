# AGENTS.md — conventions for AI agents working in this repo

## Project

**VISINA — Aerial Films** — static portfolio website for a drone videography
business based in Banja Luka, BiH. Plain HTML/CSS/JS, no build step, no
dependencies. Videos are pre-cut web-optimized MP4s in `assets/videos/`.

## Commit convention (required)

**Commit after every chunk of work.** A "chunk" is any completed, coherent
unit — e.g. a new section, a styling pass, a video re-encode, a copy fix,
a bug fix. Never leave work uncommitted at the end of a task or session.

Rules:

1. **One chunk = one commit.** Keep commits small and atomic; do not mix
   unrelated changes.
2. **Commit as soon as the chunk is verified working** — for this site that
   means the page renders and the browser console is clean.
3. **Message style:** short imperative summary line, e.g.
   - `add BCS translations for gallery captions`
   - `re-encode hero clip at lower bitrate`
   - `fix lightbox keyboard navigation`
4. **Never commit broken states.** If a chunk is half-done, finish it or
   stash it — do not commit code that breaks the page.
5. Binary assets (`*.mp4`, `*.jpg`) are part of the site and are committed
   too — do not gitignore them.

## Site conventions

- The site is bilingual (EN/BCS) via the dictionary in `js/main.js`.
  Any new visible text must be added to **both** languages.
- The contact form relays through FormSubmit (see `js/main.js`) with a
  mailto fallback — keep the fallback intact when editing.
- Keep the repo self-contained: everything needed to serve the site is in
  this folder. Deploy target is static hosting (GitHub Pages).

> Machine-specific paths, credentials and operational notes live in the
> private `visina-planning` repo — never in this public one.
