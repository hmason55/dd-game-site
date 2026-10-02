# Journey scene placeholders

These backgrounds are plain SVG arrangements of rectangles, ellipses, circles, and polygons with uniform opaque fills. They are layout placeholders, not concept illustrations. Each scene uses a small number of large shapes to vaguely indicate location and figures. There are no outlines, textures, gradients, filters, lighting, or small details.

## Assets

- `journey-ruins.svg`: Used by event, map, and reward screens. A few wall blocks, terrain masses, a path wedge, and a circle.
- `journey-rest.svg`: Used by rest. A trunk rectangle and canopy ellipse, a tiny traveler shape, lantern rectangle, and stone block.
- `journey-shop.svg`: Used by shop. A canopy polygon, merchant ellipse and torso polygon, counter rectangle, and two lantern rectangles.

## Replacement

Each SVG uses a 1536 × 1024 view box. The renderer crops the background to desktop and mobile frames without stretching it. The shapes and colors are provisional; an artist can redesign the entire scene for production. Keep the principal subjects readable within the UI's artwork areas and omit embedded UI text.

Production replacements can use the same SVG paths. If replacing them with PNG or another image format, update the background URLs in `journey-layout.ts`, `pixi-rest.ts`, `pixi-shop.ts`, and `pixi-map.ts`. Cards and relics retain their separate artwork.

## Locale variants

The 24 `locale-{family}-{role}.svg` files extend the same opaque, flat-shape style. Families are crossroads, ruins, grove, shore, depths, vault, observatory, and threshold. Roles are travel, rest, and shop. Travel scenes leave the battle foreground open; rest scenes add a shelter and resting figure; shop scenes add an awning, merchant, and counter. They contain no embedded UI text.

The C# locale catalog chooses and persists compatible variants. See `docs/fold-locales.md` for names, progression weights, ambient recordings, save behavior, and extension points. Keep these asset filenames for replacements; adding new filenames also requires updating the C# background catalog and the client's bounded URL pattern.
