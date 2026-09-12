# Aarkin brand assets

All four files below are derived directly from `aarkin-master.svg` — the
original, untouched master artwork as supplied. Every shape is the real
vector path from that file (icon, "AARKIN" wordmark, and "POWERING YOUR
GROWTH" tagline were all originally exported as outlined paths, not live
text — see "What font is the wordmark?" below), so every variant here is
pixel-accurate to the master regardless of what typeface it was originally
set in. Nothing was redrawn or approximated.

| File | Contents | Use via `<SealMark variant="…">` |
| --- | --- | --- |
| `aarkin-master.svg` | The original file exactly as supplied (icon + wordmark + tagline, on a baked-in white background, 1500×1500 canvas). Kept as the untouched source for any future re-export — don't reference this one directly on the site. | — |
| `aarkin-icon.svg` | Icon only (the mountain/rocket "A" mark), transparent background, tightly cropped. | `variant="icon"` |
| `aarkin-lockup.svg` | Icon + "AARKIN" wordmark, transparent background, tightly cropped. **Default.** | `variant="lockup"` (default) |
| `aarkin-lockup-full.svg` | Icon + "AARKIN" + "POWERING YOUR GROWTH" tagline, transparent background, tightly cropped. | `variant="lockup-full"` |

All four are dark ink green, `#163f34`.

`SealMark` (in `src/components/site-chrome.tsx`) is the single component
that renders any of these — pass `variant` and size it with a `className`
(e.g. `className="h-10 w-auto"`); each file's own viewBox aspect ratio is
preserved automatically. The header and footer both use the default
`lockup` variant. Don't set a manual "AARKIN" text label next to it — the
wordmark is already baked into the `lockup`/`lockup-full` artwork.

## What font is the wordmark?

The master file has no live text — "AARKIN" and the tagline were already
converted to outline paths before export (`grep -c "<text"` on it returns
`0`), so there's no embedded font name to read off it programmatically.

Visually comparing the letterforms (particularly the **R**'s bowl/leg, the
**K**'s arm junction height, and the **A**'s apex) against several
geometric sans-serif candidates at matching weight, **Montserrat at
Black/900 weight** is the closest match — plausible anyway, since it's the
free Google Font sibling of "Montserrat Alternates", which this site's
`--font-display` token already uses for headings. The wordmark's letters
sit tighter than Montserrat's default tracking, so if it *is* Montserrat,
it was set with a manually tightened (negative) letter-spacing.

This is a best-effort visual match, not a certainty — treat it as a
starting point if the wordmark ever needs to be reset as live text (e.g.
for a new size or colour that isn't worth re-exporting from the master),
not as confirmed fact.
