# VÅR — Vokalensemble Aarhus — Style Guide

> VÅR is the Danish word for "spring." The brand draws from the Nordic forest at the turn of winter into spring — deep greens, earthy browns and blacks grounded by bright, airy whites that evoke new growth and light filtering through a canopy.

---

## 1. Brand Identity

### 1.1 Name & Meaning

- **Full name:** VÅR — Vokalensemble Aarhus
- **Short name:** VÅR (always uppercase with the å character)
- **Meaning:** "Spring" — renewal, growth, vitality
- **Tagline ideas:** _Stemmer i bevægelse_ (Voices in motion) / _Fra skov til sang_ (From forest to song)

### 1.2 Personality

| Trait       | Description                                                                                                                         |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| Young       | Members aged 25–40. The brand should feel contemporary, not traditional.                                                            |
| Ambitious   | High artistic standard. Clean, confident design — never cluttered.                                                                  |
| Natural     | Rooted in the forest palette. Organic textures and imagery.                                                                         |
| Inviting    | The website must welcome two audiences: people who want to **hire** the choir and people who want to **join** it.                   |
| Spring-like | Even though the palette is dark and earthy, always layer a sense of light — white tints, bright overlays, high-contrast typography. |

### 1.3 Target Audiences

| Audience                | Who they are                          | What they need                                                        |
| ----------------------- | ------------------------------------- | --------------------------------------------------------------------- |
| **Hirers**              | Companies, churches, event organisers | Quick proof of quality (video/audio), clear contact path, pricing.    |
| **Prospective members** | Singers aged 25–40 in the Aarhus area | Information about auditions, repertoire, rehearsal schedule, culture. |

---

## 2. Color Palette

### 2.1 Primary — Forest Green

The anchor color. Used for primary buttons, links, accents, and branding elements.

| Token              | Hex       | Usage                                 |
| ------------------ | --------- | ------------------------------------- |
| `forest-green-50`  | `#f3f8f6` | Light backgrounds, hover states       |
| `forest-green-100` | `#e1ede7` | Card backgrounds, subtle fills        |
| `forest-green-200` | `#c3dbd0` | Borders, dividers                     |
| `forest-green-300` | `#9ac2b0` | Decorative accents                    |
| `forest-green-400` | `#6ea48c` | Secondary buttons, icons              |
| `forest-green-500` | `#4f8770` | Mid-tone accent                       |
| `forest-green-600` | `#3d6c5a` | **Primary buttons**, links            |
| `forest-green-700` | `#32574a` | Button hover states, headings         |
| `forest-green-800` | `#2a463c` | Dark headings, hero text on light bg  |
| `forest-green-900` | `#243a33` | Footer background, dark sections      |
| `forest-green-950` | `#12211c` | Deepest tone, near-black for contrast |

### 2.2 Neutrals — Earth & Light

| Token          | Hex       | Usage                                                    |
| -------------- | --------- | -------------------------------------------------------- |
| **White**      | `#ffffff` | Page background, text on dark surfaces, "spring" overlay |
| **Off-white**  | `#f7f7f5` | Alternate section backgrounds                            |
| **Warm gray**  | `#e8e5e0` | Borders, subtle dividers                                 |
| **Bark brown** | `#5c4a3a` | Secondary text, earthy accents                           |
| **Dark brown** | `#3b2f25` | Strong secondary headings                                |
| **Charcoal**   | `#1a1a1a` | Body text (prefer over pure black)                       |
| **Black**      | `#000000` | Sparingly — hero overlays, deep contrast                 |

### 2.3 Accent — Spring Highlights (used sparingly)

| Token             | Hex       | Usage                                       |
| ----------------- | --------- | ------------------------------------------- |
| **Leaf green**    | `#a8d5ba` | Highlight badges, tag pills, success states |
| **Blossom cream** | `#fdf8f0` | Light card backgrounds for spring feel      |
| **Moss gold**     | `#b5a642` | Occasional warm accent (sparingly)          |

### 2.4 Usage Rules

- **Dark sections** (hero, parallax): Use `forest-green-900` / `forest-green-950` or a dark image with a **white or green-tinted semi-transparent overlay** (`bg-white/10` to `bg-white/20`) to evoke the spring light-through-canopy feel.
- **Light sections** (zig-zag, text): Use `#ffffff` or `off-white` backgrounds with `charcoal` text.
- **Never** use vivid saturated colors — the palette is muted and organic.
- **Image overlays:** Prefer a soft white tint (`bg-white/15` to `bg-white/25`) over images rather than heavy black overlays. This reinforces the "spring" quality. Use black overlays (`bg-black/30` to `bg-black/50`) only when text legibility absolutely demands it (e.g., hero video).

---

## 3. Typography

### 3.1 Font Stack

| Role              | Font                                                                                                  | Fallback                | Weight                  |
| ----------------- | ----------------------------------------------------------------------------------------------------- | ----------------------- | ----------------------- |
| **Headings**      | System sans-serif or a clean geometric sans (e.g., _Inter_, _Outfit_, _Plus Jakarta Sans_)            | `system-ui, sans-serif` | 600–700 (semibold/bold) |
| **Body**          | Same family as headings                                                                               | `system-ui, sans-serif` | 400 (regular)           |
| **Accent / Logo** | Consider a refined serif for the "VÅR" wordmark only (e.g., _Cormorant Garamond_, _Playfair Display_) | `Georgia, serif`        | 500–700                 |

> A single sans-serif family for both headings and body keeps the site feeling young and clean. The optional serif is reserved **only** for the VÅR logotype/wordmark to add a classical choir reference.

### 3.2 Scale

| Element         | Desktop        | Tablet (≤1024px) | Mobile (≤768px) |
| --------------- | -------------- | ---------------- | --------------- |
| Hero `h1`       | 64px / 70px lh | 42px / 42px lh   | 32–38px         |
| Section `h2`    | 40px / 48px lh | 32px / 38px lh   | 28px / 32px lh  |
| `h3`            | 28px / 36px lh | 24px / 30px lh   | 22px / 28px lh  |
| Body `p`        | 18px / 28px lh | 16px / 26px lh   | 15px / 24px lh  |
| Small / caption | 14px / 20px lh | 13px / 18px lh   | 13px / 18px lh  |

### 3.3 Rules

- Headings are **bold** or **semibold**, never thin/light.
- Body text uses `charcoal` (`#1a1a1a`) on light backgrounds and `white` on dark backgrounds.
- Line-height for body text should be at least 1.5× font size for readability.
- Use `-webkit-font-smoothing: antialiased` (already set in `styles.css`).

---

## 4. Imagery & Media

### 4.1 Photography Style

- **Subject:** The choir performing, rehearsing, laughing — candid and lively, not stiff.
- **Settings:** Concert venues, churches, forests/nature, rehearsal rooms.
- **Color grading:** Desaturated greens and warm earth tones. Avoid neon, high-saturation edits.
- **White tint overlay:** Apply a semi-transparent white layer (`rgba(255,255,255,0.10)` – `rgba(255,255,255,0.25)`) over dark images to soften them and create the spring/lightness motif. This is a **signature treatment**.
- **Aspect ratios:** Hero: 16:9 full-bleed. Zig-zag images: 4:3 or 3:2. Parallax: full-width, tall.

### 4.2 Video

- Background hero video: muted, looping, autoplay. Shows the choir performing.
- Inline videos (VideoText blocks): YouTube embeds with standard controls.
- Rounded corners (`rounded-lg`) on inline video containers.

### 4.3 Illustrations / Icons

- Minimal use. Prefer photography.
- If icons are needed, use a simple line-icon set (e.g., Lucide, Heroicons outline).
- Icon color: `forest-green-600` on light backgrounds, `white` on dark backgrounds.

---

## 5. Layout & Spacing

### 5.1 Grid

- Max content width: **1280px** (`max-w-7xl`) for zig-zag and text sections.
- Narrower content: **896px** (`max-w-4xl`) for parallax overlay cards and prose blocks.
- Full-bleed: Hero video and parallax background images span the entire viewport.
- Two-column grid for zig-zag and video-text blocks on desktop (`md:grid-cols-2`), stacked on mobile.

### 5.2 Spacing Scale (Tailwind)

| Concept                    | Value                      |
| -------------------------- | -------------------------- |
| Section vertical padding   | `py-16 md:py-24`           |
| Between items in a section | `space-y-16 md:space-y-24` |
| Grid gap                   | `gap-8 md:gap-12`          |
| Card padding               | `p-8 md:p-12`              |
| Horizontal page padding    | `px-4`                     |

### 5.3 Responsive Breakpoints

| Breakpoint | Width    | Behaviour                     |
| ---------- | -------- | ----------------------------- |
| Default    | < 768px  | Single column, stacked layout |
| `md`       | ≥ 768px  | Two-column grids activate     |
| `lg`       | ≥ 1024px | Full desktop spacing          |

---

## 6. Component Patterns

### 6.1 HeroVideo

- Full-viewport height (`h-screen`), full-width.
- Background: muted looping video of the choir (uploaded or YouTube embed).
- Overlay: `bg-black/30` — dark enough for white text legibility.
- Content centered vertically and horizontally.
- Title: large white `h1` with `drop-shadow-lg`.
- Two CTA buttons side by side:
  - **Primary ("Want to hire us?"):** `bg-forest-green-700` → `hover:bg-forest-green-800`, white text, `rounded-lg`, `shadow-xl`.
  - **Secondary ("Want to join us?"):** `bg-white` with `text-forest-green-900`, `rounded-lg`, `shadow-xl`.
- Buttons stack vertically on mobile (`flex-col`), horizontal on `sm:` and up.

### 6.2 Parallax

- Full-width section with a fixed background image (`bg-fixed bg-cover bg-center`).
- Dark overlay (`bg-black/50`) for text contrast.
- Centered content card with `bg-white/90` (light mode) or `bg-forest-green-900/90` (dark mode).
- `backdrop-blur-sm` for a frosted-glass effect.
- Rich text content inside `prose prose-lg`.
- Configurable height: small (400px), medium (600px), large (800px).

### 6.3 ZigZag

- Alternating image-left / image-right rows.
- Image: `rounded-lg`, `object-cover`, `shadow-lg`, fixed height container 400px.
- Text: `prose prose-lg` for rich text.
- Optional contact CTA button at the bottom: `bg-forest-green-600` → `hover:bg-forest-green-700`.

### 6.4 VideoText

- Same alternating layout as ZigZag but with a YouTube embed instead of an image.
- Video container: `aspect-video`, `rounded-lg`, `shadow-lg`.
- Text: `prose prose-lg`.

---

## 7. Buttons & Interactive Elements

### 7.1 Primary Button

```
bg-forest-green-600  text-white  rounded-lg  px-8 py-4
font-semibold  shadow-lg  transition-all
hover:bg-forest-green-700  hover:scale-105
```

### 7.2 Secondary Button

```
bg-white  text-forest-green-900  rounded-lg  px-8 py-4
font-semibold  shadow-xl  transition-all
hover:bg-gray-100  hover:scale-105
```

### 7.3 Ghost / Text Link

```
text-forest-green-600  underline-offset-4  hover:underline
transition-colors  hover:text-forest-green-700
```

### 7.4 Rules

- All buttons have `rounded-lg` (8px radius).
- Interactive elements scale slightly on hover (`hover:scale-105`) for a lively feel.
- Focus states: visible outline in `forest-green-400` with `ring-2 ring-offset-2`.
- Touch targets: minimum 44×44px.

---

## 8. Effects & Motion

| Effect            | Implementation                                      | When to use                              |
| ----------------- | --------------------------------------------------- | ---------------------------------------- |
| Parallax scroll   | CSS `background-attachment: fixed`                  | Parallax block backgrounds               |
| Hover scale       | `transition-all hover:scale-105`                    | Buttons, cards                           |
| Drop shadow       | `shadow-lg` / `shadow-xl` / `shadow-2xl`            | Cards, buttons, images                   |
| Backdrop blur     | `backdrop-blur-sm`                                  | Overlaid content cards on images         |
| White tint        | `bg-white/15` overlay div                           | Over dark images to create "spring" feel |
| Fade-in on scroll | Optional: CSS `@keyframes` or Intersection Observer | Section entrances (future enhancement)   |

- Keep animations subtle. Duration: 200–300ms. Easing: `ease-out`.
- No animation on reduced-motion preference: respect `prefers-reduced-motion`.

---

## 9. Page Structure

### 9.1 Home Page

```
┌─────────────────────────────────────────────┐
│  HeroVideo (full screen)                    │
│  ┌───────────────────────────────────────┐  │
│  │  "VÅR — Vokalensemble Aarhus"        │  │
│  │  [Want to hire us?] [Want to join us?]│  │
│  └───────────────────────────────────────┘  │
└─────────────────────────────────────────────┘
```

### 9.2 "Want to hire us?" (Scroll Page)

```
┌─ Parallax: Hero image with introductory text ──────────┐
├─ ZigZag: What we offer (concerts, events, weddings…)  ─┤
├─ VideoText: Performance highlight video + description  ─┤
├─ Parallax: Testimonial / quote from a client           ─┤
├─ ZigZag: Past performances with images                 ─┤
├─ CTA Section: Contact button / booking form link       ─┤
└─────────────────────────────────────────────────────────┘
```

### 9.3 "Want to join us?" (Scroll Page)

```
┌─ Parallax: Hero image with welcoming text ─────────────┐
├─ ZigZag: About the choir, rehearsal info, culture      ─┤
├─ VideoText: Rehearsal/social video + description       ─┤
├─ Parallax: Member quote or testimonial                 ─┤
├─ ZigZag: Audition process, voice parts needed          ─┤
├─ CTA Section: "Contact us for audition" email button   ─┤
└─────────────────────────────────────────────────────────┘
```

---

## 10. Tone of Voice

| Principle | Do                                 | Don't                                  |
| --------- | ---------------------------------- | -------------------------------------- |
| Warm      | "We'd love to hear from you"       | "Submit your inquiry"                  |
| Confident | "We deliver powerful performances" | "We try our best to be good"           |
| Direct    | "Book us for your next event"      | "If you might be interested, perhaps…" |
| Inclusive | "All voice types welcome"          | "Only exceptional singers need apply"  |
| Young     | Use modern, approachable language  | Overly formal or academic choir-speak  |

- Write in **Danish** for the primary audience, with English as a secondary option.
- Keep paragraphs short — 2–3 sentences max.
- Use active voice.

---

## 11. Accessibility

- Color contrast: all text/background combinations must meet **WCAG AA** (4.5:1 for body text, 3:1 for large text).
- `forest-green-600` (#3d6c5a) on white passes AA for large text. Use `forest-green-700` or darker for body text.
- White text on `bg-black/30` + dark video: ensure the overlay is strong enough. Test with paused video frames.
- All images require `alt` text.
- Videos require a text alternative or descriptive surrounding content.
- Interactive elements are keyboard-focusable with visible focus rings.
- Respect `prefers-reduced-motion` for all animations.

---

## 12. File & Token Reference

| File                                    | Purpose                                                   |
| --------------------------------------- | --------------------------------------------------------- |
| `src/app/(frontend)/styles.css`         | Tailwind theme tokens (forest-green scale), global resets |
| `src/blocks/HeroVideo/index.tsx`        | Full-screen hero with video background                    |
| `src/blocks/Parallax/index.tsx`         | Parallax image section with text overlay                  |
| `src/blocks/ZigZag/index.tsx`           | Alternating image + text rows                             |
| `src/blocks/VideoText/index.tsx`        | YouTube embed + text row                                  |
| `src/components/RenderBlocks/index.tsx` | Block renderer / dispatcher                               |

---

## 13. Quick-Reference: Do's and Don'ts

| Do ✓                                                   | Don't ✗                                       |
| ------------------------------------------------------ | --------------------------------------------- |
| Use the forest-green scale as the primary palette      | Introduce new hue families without discussion |
| Apply white tint overlays on dark images               | Use heavy black overlays everywhere           |
| Keep sections full-bleed with generous whitespace      | Cram content into narrow, busy layouts        |
| Use `rounded-lg` on all interactive and media elements | Mix border-radius values inconsistently       |
| Stick to one sans-serif font family                    | Use more than two font families               |
| Test on mobile-first                                   | Design only for desktop                       |
| Write warm, direct Danish copy                         | Use stiff, corporate language                 |
