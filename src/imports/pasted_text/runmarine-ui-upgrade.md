IMPORTANT INSTRUCTION FOR FIGMA MAKE:
Execute this prompt in PHASES. After each phase, pause and show 
a preview before continuing. Do not proceed to the next phase 
without confirmation. This allows corrections mid-way.

This is a redesign/enhancement pass on an existing ship management 
website (RunMarine). The design system is already established:
- Colors: deep-navy #0a1e3c, gold #e6c364, gold-dark #755b00
- Fonts: Playfair Display (headlines), Montserrat (subheadings), 
  Inter (body), Bebas Neue (cinematic labels)
- The site is light-themed, white dominant, maritime luxury feel

Do NOT rebuild from scratch. Enhance and upgrade only what is 
specified below.

════════════════════════════════════════
PHASE 1 — NAVBAR REDESIGN
(Do this first. Preview before proceeding.)
════════════════════════════════════════

The navbar needs two distinct states:

STATE 1 — SOLID (at page top, before any scroll):
- Fully opaque white background: rgba(255,255,255,1)
- Logo: Playfair Display, deep-navy #0a1e3c
- Nav links: Inter or Montserrat, deep-navy, 14px, spaced
- "Get in Touch" button: solid gold-dark #755b00, white text, 
  rounded corners (8px radius), no glow yet
- Bottom border: 1px solid rgba(230,195,100,0.2)
- Height: 72px

STATE 2 — GLASSMORPHISM (triggered after 60px scroll):
- Background: rgba(255,255,255,0.55)
- Backdrop filter: blur(20px) saturate(160%)
- Border bottom: 1px solid rgba(255,255,255,0.4)
- Box shadow: 0 4px 24px rgba(0,0,0,0.06)
- Logo and links: remain deep-navy, slightly more contrast
- Transition: all properties ease 400ms — must feel smooth, 
  not a snap
- "Get in Touch" button in this state: 
  glassmorphism style — rgba(117,91,0,0.85) background, 
  white text, 8px radius, 
  border: 1px solid rgba(230,195,100,0.5),
  backdrop-filter: blur(8px)

ACTIVE PAGE INDICATOR on nav links:
- The currently active page link gets a subtle gold underline — 
  a thin 2px line in #e6c364, width animates from 0 to 100% 
  on page load (300ms ease-out)
- Non-active links: on hover, same underline slides in from left
- No bold weight change — just the underline, keep it subtle
- The active link text color: #755b00 (gold-dark), not deep-navy

DROPDOWN PANELS (Services, Training, Fleet):
- On hover, a glassmorphism panel slides down smoothly (250ms):
  background: rgba(255,255,255,0.85)
  backdrop-filter: blur(16px)
  border: 1px solid rgba(230,195,100,0.25)
  box-shadow: 0 16px 40px rgba(0,0,0,0.08)
- Each dropdown item: service name in Playfair Display 15px 
  deep-navy, micro-description in Inter 12px gray-400, 
  left gold border appears on hover (2px solid #e6c364)
- Panel entrance: translateY(-8px) → translateY(0), opacity 0→1, 
  250ms ease-out

════════════════════════════════════════
PHASE 2 — HOME PAGE HERO
(Preview before proceeding.)
════════════════════════════════════════

Replace the static image hero with a VIDEO MONTAGE hero:

VIDEO BACKGROUND:
- Use a looping, muted, autoplay HTML5 video
- Source: mixkit.co or similar royalty-free — 
  use multiple short clips edited together or use:
  https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-a-cargo-ship-in-the-sea-23588-large.mp4
- Video fills 100vh, object-fit: cover
- Video should have a Ken Burns–style slow zoom applied via CSS: 
  scale(1.05) → scale(1.0) over 12s, subtle, barely noticeable

OVERLAY:
- Gradient: linear-gradient(
    135deg,
    rgba(10,30,60,0.70) 0%,
    rgba(10,30,60,0.35) 50%,
    rgba(10,30,60,0.15) 100%
  )
- The video must remain clearly visible — do not bury it

HERO CONTENT (left-aligned):
- Eyebrow: "INDIA'S PREMIER SHIP MANAGEMENT FIRM" — 
  Bebas Neue, gold #e6c364, 12px, letter-spacing 0.2em
- Headline line 1: "Masters of the" — 
  Playfair Display, white, 80px, weight 700
- Headline line 2: "Global Seas." — 
  Playfair Display, italic, #e6c364, 84px
  Animate: these two lines enter with opacity 0→1, 
  translateY(20px→0), staggered 150ms apart, on page load
- Subheadline: Inter, white/80, 18px, max-width 560px
- CTA buttons (side by side):
  Button 1 "Explore Our Services": 
    Solid gold-dark #755b00, white text, 
    border-radius 8px, padding 14px 32px
    Hover: scale(1.02), glow shadow rgba(230,195,100,0.35)
  Button 2 "Download Brochure": 
    GLASSMORPHISM STYLE —
    background: rgba(255,255,255,0.12)
    border: 1px solid rgba(255,255,255,0.35)
    backdrop-filter: blur(12px)
    text: white
    border-radius: 8px, padding 14px 32px
    Hover: background rgba(255,255,255,0.22), 
    border rgba(255,255,255,0.5)

SCROLL INDICATOR (bottom center):
- "SCROLL TO EXPLORE" in Bebas Neue, white/50, 11px, 
  letter-spacing 0.2em
- Animated chevron below it: bounces gently, infinite
- Fades out after user scrolls 100px

════════════════════════════════════════
PHASE 3 — GLOBAL UI UPGRADE: BUTTONS & GLASSMORPHISM
(Apply across all pages.)
════════════════════════════════════════

BUTTON SYSTEM UPGRADE — apply globally:

PRIMARY BUTTON (solid):
- background: #755b00
- text: white, Montserrat, 13px, tracking 0.08em
- border-radius: 8px
- padding: 12px 28px
- transition: 250ms
- hover: scale(1.02), box-shadow 0 0 20px rgba(230,195,100,0.35)
- active: scale(0.98)

SECONDARY / GHOST BUTTON:
- GLASSMORPHISM STYLE:
  background: rgba(255,255,255,0.12)
  border: 1px solid rgba(255,255,255,0.30)
  backdrop-filter: blur(10px)
  text: white (on dark bg) or deep-navy (on light bg)
  border-radius: 8px
  padding: 12px 28px
- hover: background rgba(255,255,255,0.22), 
  border rgba(230,195,100,0.5)

DOWNLOAD BROCHURE BUTTON SPECIFICALLY:
- Must always use the glassmorphism ghost style above
- When on a dark/video background: white text, white border
- When on a light background: 
  background: rgba(117,91,0,0.08)
  border: 1px solid rgba(117,91,0,0.3)
  text: #755b00
  backdrop-filter: blur(8px)
  border-radius: 8px

ALL CARD HOVER STATES:
- translateY(-4px), box-shadow 0 12px 32px rgba(0,0,0,0.08)
- border-color shifts to rgba(230,195,100,0.5)
- Transition: 300ms cubic-bezier(0.25,0.46,0.45,0.94)

════════════════════════════════════════
PHASE 4 — "OUR EXPERTISE AT SEA" SERVICES SECTION REDESIGN
(Home page. Reference: the subtle professional card grid 
in the attached screenshot — Image 1 in this prompt.)
════════════════════════════════════════

The current services grid looks childish. Redesign it:

LAYOUT:
- 4-column grid on desktop, 2-col tablet, 1-col mobile
- Two rows: 4 cards top row, 3 cards bottom row (centered)
- White background, generous padding between cards

CARD DESIGN (matches Image 1 reference):
- White background
- Very thin border: 1px solid rgba(0,0,0,0.06)
- NO colored backgrounds on cards
- NO thick gold card borders
- Padding: 40px
- Border-radius: 4px (barely rounded — architectural, not bubbly)
- Box-shadow on hover only: 0 8px 32px rgba(0,0,0,0.07)
- NO filled icons — use thin line-art icons only

CARD CONTENT:
- Icon: thin line-art SVG or Material Symbol, weight 100, 
  color #755b00, size 32px, displayed at top-left
- Service name: Playfair Display, 18px, #0a1e3c, 
  margin-top 24px
- Description: Inter, 14px, #6b7280, line-height 1.7, 
  margin-top 8px
- "Learn more →" text link in #755b00, appears on hover, 
  slides up from bottom (opacity 0→1, translateY 6px→0, 200ms)

SECTION HEADER:
- Eyebrow: "OUR CAPABILITIES" — Bebas Neue, #e6c364, 12px, 
  letter-spacing 0.18em, centered
- Headline: "Comprehensive Solutions." — 
  Playfair Display, 48px, #0a1e3c, centered
  The period after "Solutions" should be in #e6c364
- Sub-text: Inter, 16px, #6b7280, centered, max-width 560px

════════════════════════════════════════
PHASE 5 — "FROM HUMBLE BEGINNINGS" SECTION REDESIGN
(Our Heritage page and any similar text-heavy sections.)
════════════════════════════════════════

Problem: Long body text on plain white feels like a Wikipedia page.
Make it feel like a premium company story — editorial, visual, 
retention-driving.

REDESIGN APPROACH:

Layout: Full-width editorial split, NOT a centered text block

LEFT SIDE (50%):
- Large serif pull quote from the story — 
  pick one impactful sentence, display it in 
  Playfair Display italic, 32px, #0a1e3c, 
  with a 3px left border in #e6c364
- Below the pull quote: 2 short paragraphs, Inter 16px, 
  line-height 1.8, color #374151

RIGHT SIDE (50%):
- Stack 2 editorial images — one large (60% width, full height), 
  one smaller overlapping at bottom-right with a gold border 
  (2px solid #e6c364) and a subtle drop shadow
- Images should be grayscale by default, 
  color reveal on hover (transition 600ms)

BACKGROUND: off-white #F8F7F4, NOT pure white

ADD to this section:
- A floating certification badge (like a stamp) positioned 
  at the image intersection:
  Circular shape, white background, gold border,
  Text: "EST. 2010" above a thin divider, "RPSL LICENSED" below
  Subtle pulse animation on the gold border (2s loop)

TIMELINE WITHIN THIS SECTION:
- Replace bullet points with a horizontal scrolling timeline 
  for desktop, vertical for mobile
- Each milestone: year in Bebas Neue #e6c364 36px, 
  event title Playfair Display 18px, 
  1-line description Inter 13px gray
- Connecting line between milestones: 
  thin 1px gold dashed line
- On scroll into view: each milestone fades in left-to-right 
  with 100ms stagger

════════════════════════════════════════
PHASE 6 — REVIEWS / TESTIMONIALS CAROUSEL
(Add right below "Why Choose Us" section on home page. 
15 reviews. Reference: Image 9 in this prompt.)
════════════════════════════════════════

SECTION LAYOUT:
- Background: #F8F7F4 (warm off-white)
- Section label: "CLIENT TESTIMONIALS" — Bebas Neue, #e6c364
- Headline: "Trusted by Fleet Owners Worldwide" — 
  Playfair Display, 40px, #0a1e3c

CAROUSEL MECHANICS:
- Auto-scrolling, smooth, infinite loop (CSS animation)
- Speed: 50s for a full cycle (slow and elegant, not rushed)
- Pauses on hover over any card
- Two rows of cards scrolling simultaneously:
  Row 1: scrolls left →
  Row 2: scrolls right ← (opposite direction)
  This creates a dynamic, premium visual effect
- Cards have a 24px gap between them

CARD DESIGN:
- White background
- border: 1px solid rgba(230,195,100,0.20)
- border-radius: 8px
- padding: 32px
- width: 340px, fixed (flex-shrink: 0)
- box-shadow: 0 4px 16px rgba(0,0,0,0.04)
- No hover card lift — keep static (the scroll IS the interaction)

CARD CONTENT:
- Large opening quotation mark: 
  Playfair Display, 48px, #e6c364, line-height 0, 
  positioned at top-left of card
- Review text: Inter, 14px, #4b5563, line-height 1.75, 
  margin-top 16px, max 3 lines
- Divider: thin 1px line rgba(230,195,100,0.3), margin 20px 0
- Reviewer name: Montserrat SemiBold, 14px, #0a1e3c
- Company/title: Inter, 12px, #9ca3af

15 REVIEWS TO USE:

Row 1 (8 cards):
1. "Their technical management has reduced our operational 
   downtime by 31%. The team responds to any issue within hours, 
   not days." — Petros Stavrakis, Owner, Aegean Bulk Logistics SA

2. "Zero port state control deficiencies across our Kamsarmax 
   fleet in 18 months. That record speaks for itself." — 
   Henrik Sorensen, Technical Director, Nordic Tanker Management

3. "The chartering desk secured rates 18% above market average 
   for our Panamax fleet. Commercial intelligence unmatched in 
   the Indian market." — Rajesh Menon, CEO, Indo-Pacific Shipping

4. "They sourced a critical main engine spare part and delivered 
   it to Singapore within 36 hours. Kept our vessel earning." — 
   Capt. Erik Lindqvist, Baltic Dry Carriers

5. "Crew quality and welfare improved dramatically. Our seafarers 
   consistently rate them as the best employer they've worked 
   under." — Priya Nair, Fleet HR Director, Mumbai Shipping Corp.

6. "The green recycling of our two Capesize vessels was handled 
   with complete transparency and better scrap realization than 
   we budgeted." — Lars Hansen, Continental Shipping Partners

7. "Payroll accuracy went from a constant headache to a 
   non-issue. Crew paid on time, every month, right currency." — 
   Sunita Krishnamurthy, South Asia Maritime Holdings

8. "In 15 years of owning vessels, I have never found a 
   management company this responsive. They treat it like their 
   own ship." — Mohammed Al-Rashidi, Gulf Maritime Investments

Row 2 (7 cards, scrolls opposite direction):
9. "Their pre-purchase survey uncovered hull defects that saved 
   us over $2 million. Indispensable for any serious vessel 
   owner." — James Worthington, Nordic Maritime Capital

10. "The ISM audit preparation was so thorough the flag state 
    inspector commented it was one of the best-organized vessels 
    he had inspected." — Capt. Vincent Dupont, Marseille Shipping

11. "RPSL compliance documentation is flawless every single time. 
    Complete confidence placing Indian seafarers through them." — 
    Arvind Kulkarni, Mumbai Crew Placement Agency

12. "CII rating improved by two grades in one year. Real 
    environmental progress with real commercial savings." — 
    Dimitri Papadopoulos, Hellas Bulk Fleet

13. "Three vessels, three different routes. They manage all three 
    flawlessly with a single point of contact who knows every 
    detail." — Marco Santini, Adriatic Cargo Partners

14. "The onboarding process took 19 days from inquiry to full 
    handover. Impressively organized at every touchpoint." — 
    Sven Olofsson, Scandinavian Dry Bulk AS

15. "Quality and responsiveness matching the best management 
    companies in Singapore and Greece, at a fraction of the 
    cost." — William Tan, Pacific Crest Shipping

════════════════════════════════════════
PHASE 7 — CONTACT PAGE: MAP + GOOGLE MAPS BUTTON
════════════════════════════════════════

On the contact page, in the right column (below contact details), 
replace the plain grey map placeholder with:

EMBEDDED MAP SECTION:
- A static map image styled to match the site aesthetic 
  (dark-themed or minimalist style)
- OR use an iframe Google Maps embed styled with reduced UI
- Dimensions: full column width, height 280px, border-radius 4px
- Thin gold border: 1px solid rgba(230,195,100,0.3)

Below the map, add two buttons side by side:

Button 1 — "Open in Google Maps":
- Glassmorphism style on light background:
  background: rgba(117,91,0,0.08)
  border: 1px solid rgba(117,91,0,0.35)
  backdrop-filter: blur(8px)
  text: #755b00, Montserrat 13px
  border-radius: 8px, padding 10px 20px
- href: "https://www.google.com/maps?ll=19.044314,73.073224" 
  target="_blank"
- Left icon: Material Symbol "open_in_new", 16px

Button 2 — "Get Directions":
- Solid gold-dark #755b00, white text
- border-radius: 8px, padding 10px 20px
- href: same Google Maps URL with &dirflg=d appended
- Left icon: Material Symbol "directions", 16px

ADDRESS DISPLAY:
- Each piece of contact info (address, email, phone, hours) 
  should have a thin gold left border on hover (200ms transition)
- Email and phone: cursor pointer, click copies to clipboard, 
  show a small gold toast "Copied!" that fades after 2s

════════════════════════════════════════
PHASE 8 — CREATIVE CONCEPT SECTIONS 
(Inspired by screenshots provided. Apply at specified locations.)
════════════════════════════════════════

CONCEPT A — TABBED CLIENT STORIES SECTION
(Inspired by Image 3 — "Our customer stories" tabbed interface)
Add this to the Our Heritage page, after the timeline section.

Design:
- Dark background section (#0a1e3c)
- Section label: "CASE STUDIES" — Bebas Neue, #e6c364
- Headline: "Client Success Stories" — Playfair Display, white, 40px

Tab navigation (horizontal row of tabs):
- 5 tabs representing 5 client types/regions:
  "India Owner" | "European Fleet" | "Middle East" | 
  "Southeast Asia" | "Dry Bulk Specialist"
- Active tab: white background, deep-navy text, 
  border-bottom 2px #e6c364
- Inactive tabs: dark background, white/60 text
- Clicking tab changes the content panel below with 
  a 200ms fade transition

Each tab content panel (2-column layout):
- Left (55%): 
  Category chip (e.g., "TECHNICAL MANAGEMENT"), 
  story headline (Playfair Display 28px white),
  3-line summary (Inter 14px white/70),
  result metric in large gold type 
  (e.g., "31% reduction in downtime"),
  "Read Case Study" link → contact page
- Right (45%): 
  A relevant maritime image (cinematic, grayscale to color on tab 
  activation, 300ms transition)

CONCEPT B — WHY CHOOSE US STATS GRID
(Inspired by Image 5 — "Accelerate with confidence" stat blocks)
Replace or enhance the existing Why Choose Us section on Home page.

Design:
- Dark navy background #0a1e3c
- Left column (40%): 
  Eyebrow: "WHY CHOOSE US" — Bebas Neue, #e6c364
  Headline: "Commanding the Seas with Confidence" — 
  Playfair Display 38px white
  Sub-paragraph: Inter 15px white/70, 3 lines
  CTA: glassmorphism button "Get in Touch"
- Right column (60%): 
  2×2 grid of stat blocks, each with a thin white/10 border:
  Block 1: Icon (Material Symbol "schedule") + 
    "<48 Hours" (Playfair Display 32px white) + 
    "Average emergency crew replacement time" (Inter 12px white/50)
  Block 2: Icon "verified" + 
    "99.8%" + "Fleet uptime reliability certified"
  Block 3: Icon "public" + 
    "12+ Nations" + "Countries served across global trade routes"
  Block 4: Icon "groups" + 
    "10,000+" + "Verified seafarers in our active database"

Icons: Material Symbols Outlined, weight 100, color #e6c364, 
size 28px

CONCEPT C — SERVICES BENTO GRID
(Inspired by Image 6 — the bento-style service menu layout)
Add as an ALTERNATIVE view on the Services pillar page, 
below the standard service card grid.

A creative asymmetric bento grid layout:
- Top row: 4 columns of equal width, each a service card 
  (Technical Management, Crew Management, Technical Services, 
  Chartering)
- Middle row: a wide image spanning 2 columns left, 
  then 2 service cards right (Green Recycling, Marine Spares)
- Bottom row: 1 wide card left (Payroll & Tax — featured, 
  larger, with more detail), then "OUR SERVICES" 
  displayed as a styled label in the remaining space

Each bento card:
- White background
- Service name: Playfair Display Bold, all-caps
- Thin gold border on all sides
- Hover: card gets a very subtle gold glow background tint
- The image in the middle row: cinematic ship photo, 
  full bleed, grayscale

════════════════════════════════════════
PHASE 9 — VIDEO ADDITIONS THROUGHOUT SITE
(Add contextually, not randomly.)
════════════════════════════════════════

Add click-to-play video sections at these specific locations, 
all using the same design pattern:
- Rounded corners 12px
- Cinematic thumbnail image covering the video
- Centered play button: circular, #755b00 background, 
  white play arrow icon, 72px diameter
- Hover: button scales to 1.1x, 
  gold glow box-shadow 0 0 30px rgba(230,195,100,0.45)
- Caption below: Bebas Neue, #e6c364, 12px, tracking 0.15em

VIDEO PLACEMENTS:

1. Home page — "How We Work" section:
   Thumbnail: https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=1200
   YouTube ID: Ux9I7tiMJCg (maritime operations footage)
   Caption: "CLICK TO PLAY · OPERATIONS OVERVIEW"

2. Training pillar page — after the curricula section:
   Thumbnail: https://images.unsplash.com/photo-1580894742597-87bc8789db3d?auto=format&fit=crop&q=80&w=1200
   YouTube ID: rJ-vZDoSBrI
   Caption: "CLICK TO PLAY · CREW TRAINING MONTAGE"

3. Our Heritage page — within the How We Work section:
   Thumbnail: https://images.unsplash.com/photo-1524508762098-fd966ffb6ef9?auto=format&fit=crop&q=80&w=1200
   YouTube ID: Y02tZSJjBOU
   Caption: "CLICK TO PLAY · OUR STORY"

All YouTube embeds use youtube-nocookie.com for privacy.
Video only loads on click (onclick innerHTML replacement pattern).
Do not autoplay videos.

════════════════════════════════════════
GLOBAL UI POLISH — APPLY ACROSS ALL PAGES
════════════════════════════════════════

1. ALL section transitions when scrolled into view:
   opacity 0→1, translateY 24px→0, 500ms ease-out
   Children within sections: 80ms stagger delay each

2. ALL images on the site:
   Default: grayscale(0.3) — slightly desaturated but not full grey
   Hover: grayscale(0) — full color reveals over 500ms
   This creates a cohesive premium editorial feel throughout

3. SECTION SPACING:
   Increase all major section padding to 120px top/bottom minimum
   Breathing room signals premium brand

4. TYPOGRAPHY UPGRADE:
   Any headline using Playfair Display should have 
   line-height: 1.08 and letter-spacing: -0.02em
   This tightens editorial headlines to feel like a 
   luxury print publication

5. GOLD ACCENT CONSISTENCY:
   Every page must have at least one gold (#e6c364) decorative 
   element visible without scrolling — either an eyebrow label, 
   a stat, or a section divider line

6. FOOTER:
   Add a subtle texture or very light pattern to the footer 
   dark background to give it depth — 
   use a CSS diagonal line pattern in rgba(255,255,255,0.02)

════════════════════════════════════════
EXECUTION ORDER FOR FIGMA MAKE:
════════════════════════════════════════

1. Phase 1 (Navbar) → Preview → Approve
2. Phase 2 (Hero Video) → Preview → Approve  
3. Phase 3 (Buttons/Glassmorphism) → Preview → Approve
4. Phase 4 (Services Grid) → Preview → Approve
5. Phase 5 (Heritage Section) → Preview → Approve
6. Phase 6 (Reviews) → Preview → Approve
7. Phase 7 (Contact Map) → Preview → Approve
8. Phase 8 (Creative Concepts) → Preview → Approve
9. Phase 9 (Videos) → Preview → Approve
10. Global Polish → Final Preview

Stop after each phase and wait for approval before proceeding.