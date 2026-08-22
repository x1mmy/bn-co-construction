# Project photos

Replace placeholder images with final photography. Keep filenames unchanged so the site updates automatically.

## Priority order (construction vibe)

When adding Blake's new photos, lead with **on-site and structural** shots before styled interiors:

1. **Hero** (`/public/bnc1.webp`) — exterior, framing, or active build site (avoid interior-only hero)
2. **Homepage grid** (`src/lib/projects.ts`) — mix of build types; prefer recognizable construction work
3. **Featured galleries** — put exterior / structural images first in each folder

Convert large assets to **WebP** where possible; Next.js will also serve AVIF/WebP via `next/image`.

## The Roseville Residence

Currently 4 images in `roseville/` (`02.png`–`05.png`) — real photography still pending. When new photos land, add them here and extend the `gallery` array in `src/lib/portfolio.ts` to match.

## The Kincumber Residence

Drop 4 images into `kincumber/`:

- `01.png` — exterior (required first)
- `02.png` — kitchen
- `03.png` — living / main area
- `04.png` — bathroom

## 22 James St, Baulkham Hills

6 images in `baulkham-hills/`:

- `01.png` through `06.png`
- **Order:** widest/most complete pergola + deck shots first, then interior-under-pergola angles, then the rooftop skylight structural detail shot last

## Additional projects

Images in the parent `projects/` folder power the Additional Projects grid. Add or replace files and update `src/lib/portfolio.ts` if you add new entries.

Naming examples: `lindfield-house-renovation.png`, `bondi-stairs.png`, `sydney-bathroom-remodelling.png`.
