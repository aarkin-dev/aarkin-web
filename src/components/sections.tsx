import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Asterisk,
  Award,
  BadgeCheck,
  Banknote,
  Building2,
  CheckCircle2,
  ChevronDown,
  Clock,
  Copyright,
  Factory,
  FileStack,
  FileText,
  Flag,
  Globe,
  Handshake,
  IdCard,
  Landmark,
  Leaf,
  Lightbulb,
  LineChart,
  Map,
  Megaphone,
  Play,
  Quote,
  Receipt,
  Rocket,
  Search,
  Ship,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  TrendingUp,
  UserCircle,
  Users,
  UtensilsCrossed,
  Wallet,
  X,
  Zap,
} from "lucide-react";
import { toast } from "sonner";
// Government Opportunity's photo -- symbolises the government itself
// (the Central Secretariat / Rashtrapati Bhavan dome in New Delhi),
// replacing the old navy/yellow duotone illustration, same real-photo
// treatment as every other section's image. Unsplash License (free,
// no attribution required):
// https://unsplash.com/photos/rashtrapati-bhavan-indias-presidential-palace-lRDBtGx_c9A
import governmentOpportunityVisual from "@/assets/government-opportunity.jpg";
// Natural, warm-toned photo for the Hero circle -- the site's other
// visuals are a deliberate navy/orange duotone illustration style, which
// reads as flatly yellow/orange in the reference's photo-realistic circle
// frame. Real photo, Unsplash License (free, no attribution required):
// https://unsplash.com/photos/diverse-team-collaborating-around-a-laptop-in-office-yd_RKGH_RH4
import heroTeamVisual from "@/assets/hero-visual-team.jpg";
// About section's photo collage -- real, natural photos, distinct from
// the Hero photo. Unsplash License (free, no attribution required):
// main: https://unsplash.com/photos/woman-using-laptop-in-workspace-HA-0i0E7sq4
// top accent: https://unsplash.com/photos/two-women-talking-at-a-desk-in-an-office-aoweP90-XwM
// bottom accent: https://unsplash.com/photos/man-signing-a-document-with-a-pen-QI6NLgN5XnM
import aboutMain from "@/assets/about-main.jpg";
import aboutAccentTop from "@/assets/about-accent-top.jpg";
import aboutAccentBottom from "@/assets/about-accent-bottom.jpg";
// Why Arkin's photo -- real, distinct from every other photo already
// used elsewhere on the page. Unsplash License (free, no attribution
// required): https://unsplash.com/photos/two-business-people-reviewing-documents-together-8k5j5z6ZYT4
import whyArkinVisual from "@/assets/why-arkin.jpg";
// Consultation section's photo -- replaces the old navy/yellow duotone
// illustration (about-visual.jpg), which was the last leftover of that
// retired style still on the page. Real photo, distinct from every
// other section's, Unsplash License (free, no attribution required):
// https://unsplash.com/photos/gray-laptop-computer-7aakZdIl4vg
import consultationVisual from "@/assets/consultation-visual.jpg";

/* Mirrors every real enquiry (Consultation form + the scroll popup --
   not the newsletter box, which the user explicitly said doesn't need
   to be logged) into a Google Sheet the user owns, as a second,
   best-effort channel alongside the formsubmit.co email that already
   sends. The Apps Script web app appends one row per submission with
   server-side date/time, so nothing here needs to compute a
   timestamp.

   Fired with `mode: "no-cors"` and a `text/plain` content type (not
   `application/json`) on purpose: Apps Script web apps don't handle a
   CORS preflight, and `application/json` is not one of the
   CORS-safelisted content types, so the browser would send an OPTIONS
   request first and the whole call would fail silently. `text/plain`
   keeps this a "simple request" that skips preflight entirely --
   Apps Script itself doesn't care what Content-Type header arrives,
   it just reads e.postData.contents as text and JSON.parses it.
   `no-cors` means the response is opaque (can't be read, ok flag is
   meaningless) by design: this call must never block or fail the
   primary email send/success toast, so it's fired and forgotten with
   a swallowed catch rather than awaited into the try/catch above it. */
const ENQUIRY_SHEET_URL =
  "https://script.google.com/macros/s/AKfycbw1fTtQ-b40Q08a1NoUQxE1mDsaFUQ2OB8MC_Gef3lqf4zOrUc2-m6Vwyaf4rjUwqoW1A/exec";

function logEnquiryToSheet(data: Record<string, FormDataEntryValue>) {
  fetch(ENQUIRY_SHEET_URL, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify(data),
  }).catch(() => {
    // Best-effort only -- the email above is the source of truth.
  });
}

/* ---------- Hero: matches the "Dobee" reference layout exactly —
   warm off-white field, big left-aligned bold headline, avatar-group
   trust line, and a right-side circular photo inside decorative ring
   outlines with a play badge and a floating two-stat card. The
   `--orange` token now holds the reference's own lime green (see
   styles.css) rather than a substitute, per later direction to use
   the reference's real colours sitewide; its near-black text/button
   colour is just a dark neutral, so it stays as our regular ink/navy
   foreground. ---------- */
/* ---------- Skeleton loader: a soft pulsing placeholder shown over
   every real photo on the page until it actually finishes loading --
   so a slow connection sees a shape-accurate placeholder instead of
   blank space or a layout jump, rather than only a one-time page-load
   spinner. Sits as an absolute sibling inside a `relative
   overflow-hidden` wrapper that now carries the photo's own
   position/size/rounding classes (moved off the <img> itself, which
   becomes a plain `size-full object-cover` and fades in on load). ---------- */
function PhotoSkeleton({ show }: { show: boolean }) {
  if (!show) return null;
  return <div aria-hidden className="absolute inset-0 animate-pulse bg-foreground/10" />;
}

export function Hero() {
  const [heroImgLoaded, setHeroImgLoaded] = useState(false);
  return (
    <section className="dotted-bg relative overflow-hidden pt-44 pb-24">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
        <div>
          <h1 className="font-display text-5xl leading-[1.08] font-extrabold text-balance text-foreground md:text-6xl">
            Your Business
            <br />
            Deserves Every
            <br />
            <span className="text-[var(--green-text)]">Rupee of Support</span>
          </h1>

          <p className="mt-7 max-w-md text-base leading-relaxed text-foreground/60 md:text-lg">
            We decode government schemes, unlock funding, fast-track registrations, and build
            investment-readiness — so founders can focus on building, not paperwork.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-6">
            <a
              href="#consult"
              className="inline-flex items-center justify-center rounded-full bg-[var(--orange-dark)] px-8 py-4 text-sm font-bold text-white transition-colors hover:bg-orange hover:text-foreground"
            >
              Learn More
            </a>

            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                {[Landmark, Users, ShieldCheck].map((Icon, i) => (
                  <span
                    key={i}
                    className="grid size-11 place-items-center rounded-full border-2 border-[var(--hero-green)] bg-orange/15 text-[var(--green-text)]"
                  >
                    <Icon className="size-4.5" strokeWidth={1.75} />
                  </span>
                ))}
              </div>
              <p className="text-sm">
                <span className="block font-display font-bold text-foreground">
                  2,000+ Founders
                </span>
                <span className="block text-foreground/55">Already onboarded</span>
              </p>
            </div>
          </div>
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-xl">
          {/* Decorative ring outlines -- sized ~1.4x the photo's diameter
              and spinning continuously, exactly as measured off the
              reference's own hero__one__02.png (9s linear, no easing). */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-[-15%] animate-[ring-spin_9s_linear_infinite]"
          >
            <svg viewBox="0 0 400 400" className="size-full">
              <circle
                cx="185"
                cy="195"
                r="185"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="text-foreground/20"
              />
              <circle
                cx="225"
                cy="180"
                r="175"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="text-foreground/15"
              />
              <circle
                cx="205"
                cy="220"
                r="165"
                fill="none"
                stroke="var(--green-text)"
                strokeWidth="1.5"
              />
            </svg>
          </div>

          <div className="absolute inset-[7%] size-[86%] overflow-hidden rounded-full shadow-2xl">
            <PhotoSkeleton show={!heroImgLoaded} />
            <img
              src={heroTeamVisual}
              alt="A founding team gathered around a laptop, reviewing their progress together"
              width={1400}
              height={1400}
              loading="eager"
              decoding="async"
              onLoad={() => setHeroImgLoaded(true)}
              className={`size-full object-cover transition-opacity duration-700 ${heroImgLoaded ? "opacity-100" : "opacity-0"}`}
            />
          </div>

          <button
            type="button"
            aria-label="Play introduction video"
            className="absolute top-[24%] left-[6%] grid size-16 animate-[cta-glow_5s_linear_infinite] place-items-center rounded-full bg-orange text-foreground transition-transform hover:scale-105"
          >
            <Play className="size-5 translate-x-0.5" fill="currentColor" strokeWidth={0} />
          </button>

          <div className="absolute -bottom-2 right-[2%] flex items-stretch gap-5 rounded-[1.75rem] bg-orange px-7 py-6 text-foreground shadow-xl">
            <div className="text-center">
              <span className="block font-display text-3xl font-extrabold">98%</span>
              <span className="mt-1 block text-xs font-semibold text-foreground/70">
                Approval Rate
              </span>
            </div>
            <div className="w-px bg-foreground/15" />
            <div className="text-center">
              <span className="block font-display text-3xl font-extrabold">7-Day</span>
              <span className="mt-1 block text-xs font-semibold text-foreground/70">
                DPIIT Certificate
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Credentials: an infinite-scroll lime trust-badge strip,
   real credentials only. Was built early on but never placed on the
   page -- sits right after Hero (before About), a thin credibility
   bridge between the hero claim and the detailed content that
   follows; a common pattern right below the fold on agency/SaaS
   pages, and distinct enough from Hero's own compact avatar-trust
   line (specific, itemised claims vs. one aggregate stat) to not
   read as repetition. ---------- */
export function Credentials() {
  const items = [
    "Startup India registered partners",
    "MSME Ministry compliant",
    "100% secure process",
    "End-to-end documentation",
    "7-day DPIIT certificate",
    "2,000+ founders served",
    "98% approval rate",
    "Dedicated relationship manager",
  ];

  return (
    <div className="overflow-hidden border-y border-border bg-orange py-3 text-foreground">
      <div className="flex gap-10 whitespace-nowrap">
        {[0, 1].map((k) => (
          <div key={k} className="flex shrink-0 animate-[marquee_38s_linear_infinite] gap-10">
            {items.map((i) => (
              <span key={i} className="eyebrow flex items-center gap-2">
                <BadgeCheck className="size-3.5" /> {i}
              </span>
            ))}
          </div>
        ))}
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-100%) } }`}</style>
    </div>
  );
}

const IMPACT_METRICS = [
  { icon: Users, value: "2,000+", label: "Customers Served" },
  { icon: FileText, value: "1,500+", label: "Projects Completed" },
  { icon: Clock, value: "10+", label: "Years of Experience" },
  { icon: Target, value: "98%", label: "Client Satisfaction" },
  { icon: TrendingUp, value: "₹500Cr+", label: "Funding Facilitated" },
];

/* ---------- Impact: the "Our Impact" stats strip from the client's
   existing site (127.0.0.1:8000/#our-impact-section) -- 5 genuine
   business metrics (customers served, projects completed, years of
   experience, client satisfaction, funding facilitated) that this
   redesign had dropped. Real numbers ported as-is (2000 / 1500 / 10 /
   98 / 500Cr, per that page's own counter-number data-target values),
   not invented. Placed right after the hero/credentials marquee,
   mirroring where the original site has it -- immediately before the
   first real content section. ---------- */
export function Impact() {
  return (
    <section className="bg-[var(--orange-dark)] py-16">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-8 gap-y-10 px-6 sm:grid-cols-5">
        {IMPACT_METRICS.map(({ icon: Icon, value, label }) => (
          <div key={label} className="flex flex-col items-center text-center">
            <span className="grid size-12 place-items-center rounded-full bg-orange/15 text-orange">
              <Icon className="size-5" strokeWidth={1.75} />
            </span>
            <span className="mt-3 font-display text-3xl font-bold text-white">{value}</span>
            <span className="mt-1 text-sm text-white/70">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

const ABOUT_POINTS = [
  {
    icon: Map,
    title: "Scheme Discovery & Mapping",
    body: "We identify every scheme your business qualifies for — before you file a single form.",
  },
  {
    icon: Sparkles,
    title: "Fast-Track Execution",
    body: "Our team handles the entire application process — you get results, not status updates.",
  },
  {
    icon: Users,
    title: "Founder-First Approach",
    body: "Dedicated manager, transparent timelines and honest guidance — always.",
  },
];

/* ---------- About: seoq.vercel.app/home-three "How Our Strategies
   Transformed Businesses" — heading band, then 3 stacked cards
   (left) beside one illustration (right). ---------- */
/* ---------- About: themazine.com/mr/dobee/about.html's "Our agency /
   Our Special Method Of Consulting." section, ditto -- layered photo
   pair on the left, plain eyebrow + heading + paragraph on the right,
   a plain (no card/border) icon-and-text list beside a solid stat
   box. Green -> orange, content and photos ours. The reference layers
   3 distinct photos; we only have two real, on-brand photos to draw
   on (the certificate stack and the team photo already used in Hero),
   so this is a 2-photo version of the same layered composition rather
   than a 3rd invented image. ---------- */
export function About() {
  const [mainLoaded, setMainLoaded] = useState(false);
  const [topLoaded, setTopLoaded] = useState(false);
  const [bottomLoaded, setBottomLoaded] = useState(false);
  return (
    <section id="about" className="bg-[#FFF7EE] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div className="relative">
            <div className="relative aspect-[4/5] w-[68%] overflow-hidden rounded-[1.25rem]">
              <PhotoSkeleton show={!mainLoaded} />
              <img
                src={aboutMain}
                alt="A founder reviewing her business plan at her desk"
                width={1000}
                height={1250}
                loading="lazy"
                decoding="async"
                onLoad={() => setMainLoaded(true)}
                className={`size-full object-cover transition-opacity duration-700 ${mainLoaded ? "opacity-100" : "opacity-0"}`}
              />
            </div>
            <div className="absolute -top-8 right-0 hidden aspect-[4/3] w-[42%] overflow-hidden rounded-[1.25rem] border-4 border-background shadow-xl sm:block md:-right-8">
              <PhotoSkeleton show={!topLoaded} />
              <img
                src={aboutAccentTop}
                alt="An Aarkin consultant walking a founder through her options"
                width={900}
                height={650}
                loading="lazy"
                decoding="async"
                onLoad={() => setTopLoaded(true)}
                className={`size-full object-cover transition-opacity duration-700 ${topLoaded ? "opacity-100" : "opacity-0"}`}
              />
            </div>
            <div className="absolute right-0 -bottom-8 hidden aspect-[4/3] w-[42%] overflow-hidden rounded-[1.25rem] border-4 border-background shadow-xl sm:block md:-right-8">
              <PhotoSkeleton show={!bottomLoaded} />
              <img
                src={aboutAccentBottom}
                alt="Signing an approved registration document"
                width={900}
                height={650}
                loading="lazy"
                decoding="async"
                onLoad={() => setBottomLoaded(true)}
                className={`size-full object-cover transition-opacity duration-700 ${bottomLoaded ? "opacity-100" : "opacity-0"}`}
              />
            </div>
          </div>

          <div>
            <p className="text-lg font-semibold text-foreground">About Aarkin</p>
            <h2 className="mt-2 font-display text-4xl leading-[1.15] font-bold text-balance md:text-5xl">
              Government Opportunity Shouldn&rsquo;t Be a{" "}
              <span className="text-[var(--green-text)]">Guessing Game</span>
            </h2>
            <p className="mt-4 max-w-lg leading-relaxed text-muted-foreground">
              Aarkin sits at the intersection of policy expertise and startup understanding —
              translating India&rsquo;s government ecosystem into clear, actionable growth.
            </p>

            <div className="mt-10 flex flex-col gap-10 sm:flex-row">
              <div className="flex flex-col gap-8">
                {ABOUT_POINTS.map(({ icon: Icon, title, body }) => (
                  <div key={title} className="flex gap-5">
                    <span className="grid size-16 shrink-0 place-items-center rounded-full bg-orange text-foreground">
                      <Icon className="size-6" strokeWidth={1.5} />
                    </span>
                    <div>
                      <h4 className="font-display text-lg font-bold text-foreground">{title}</h4>
                      <p className="mt-1.5 max-w-xs text-sm leading-relaxed text-muted-foreground">
                        {body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="w-full shrink-0 rounded-[5px] bg-orange p-8 sm:w-[193px]">
                <span className="block font-display text-[64px] leading-tight font-bold text-foreground">
                  200+
                </span>
                <span className="mt-1 block text-lg font-semibold text-foreground">
                  Schemes Mapped
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- FundingCta: seoq.vercel.app/home-three dark "Get Our Every
   Update, Join With Us" newsletter band — illustration one side,
   heading + copy + CTA the other, on the dark canvas field. ---------- */
const IMPACT_STATS = [
  { icon: Users, value: "2,000+", label: "Startups & MSMEs Assisted" },
  { icon: BadgeCheck, value: "98%", label: "Application Success Rate" },
  { icon: Banknote, value: "₹50Cr+", label: "Funding Unlocked for Clients" },
  { icon: Zap, value: "7 Days", label: "Avg. Startup India Turnaround" },
];

/* ---------- FundingCta / Government Opportunity: loosely ditto
   seoz-react-nextjs.netlify.app's "Why Choose Us -- Proven Results,
   And Exceptional Your Services" -- eyebrow + heading + intro + CTA,
   then the same section's own numbers grid folded in here too, per
   the user's explicit call ("numbers are also there, so you can use
   it for Impact/Numbers... improve according to the needs"). Dropped
   the reference's generic "Our Mission"/"Our Vision" filler blocks
   (nothing real to say there) and its unrelated mail-marketing
   illustration -- kept this site's own existing government-opportunity
   copy and photo instead, on the reference's dark-band CTA energy. The
   4 real Aarkin stats happen to match the reference's 4-stat grid
   count exactly, so nothing invented or cut. ---------- */
export function FundingCta() {
  const [imgLoaded, setImgLoaded] = useState(false);
  return (
    <section id="opportunity" className="bg-background py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
        <div>
          <p className="text-lg font-semibold text-[var(--green-text)]">Government Opportunity</p>
          <h2 className="mt-2 font-display text-3xl leading-[1.15] font-bold text-balance text-foreground md:text-4xl">
            The Government Wants to Fund Your Growth. Let Us Make the Introduction.
          </h2>
          <p className="mt-5 max-w-md leading-relaxed text-muted-foreground">
            Every year, thousands of crores in grants, subsidies and collateral-free loans go
            unclaimed — because founders don&rsquo;t know they qualify. Aarkin changes that
            equation.
          </p>
          <a
            href="#consult"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--orange-dark)] px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-orange hover:text-foreground"
          >
            Check My Eligibility Now <ArrowUpRight className="size-4" />
          </a>

          <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-10 border-t border-foreground/10 pt-10">
            {IMPACT_STATS.map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex items-start gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-orange/15 text-[var(--green-text)]">
                  <Icon className="size-5" strokeWidth={1.75} />
                </span>
                <div>
                  <span className="block font-display text-2xl font-bold text-foreground">
                    {value}
                  </span>
                  <span className="mt-1 block text-sm text-muted-foreground">{label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[2rem]">
          <PhotoSkeleton show={!imgLoaded} />
          <img
            src={governmentOpportunityVisual}
            alt="The Central Secretariat dome in New Delhi, seat of the Government of India"
            width={1000}
            height={1250}
            loading="lazy"
            decoding="async"
            onLoad={() => setImgLoaded(true)}
            className={`size-full object-cover transition-opacity duration-700 ${imgLoaded ? "opacity-100" : "opacity-0"}`}
          />
        </div>
      </div>
    </section>
  );
}

/* Categories mirror the client's existing site's 4 service tabs
   (127.0.0.1:8000/#services -- "Start / Fund / Protect / Digitalize
   Your Business", 20 named services total). "Digitalize" is spelled
   without the "-d" here for grammatical parallelism with the other 3
   imperative labels -- the original site has "Digitalized Your
   Business", inconsistent with its own "Start/Fund/Protect Your
   Business" siblings. Two extra services from this redesign that have
   no equivalent on the old site (Government Scheme Consulting, Subsidy
   & Incentive Assistance) are kept and folded into "Fund Your
   Business", since they're genuine, already-approved content, not
   filler -- so this list runs to 22 real services, not 20. */
const SERVICE_CATEGORIES = [
  "Start Your Business",
  "Fund Your Business",
  "Protect Your Business",
  "Digitalize Your Business",
] as const;

const CATEGORY_STYLES: Record<
  (typeof SERVICE_CATEGORIES)[number],
  { active: string; inactive: string }
> = {
  "Start Your Business": {
    active: "bg-orange text-foreground",
    inactive: "bg-orange/15 text-[var(--green-text)] hover:bg-orange/30",
  },
  "Fund Your Business": {
    active: "bg-[var(--yellow)] text-foreground",
    inactive: "bg-[var(--yellow)]/15 text-foreground/70 hover:bg-[var(--yellow)]/30",
  },
  "Protect Your Business": {
    active: "bg-[var(--orange-dark)] text-white",
    inactive:
      "bg-[var(--orange-dark)]/10 text-[var(--orange-dark)] hover:bg-[var(--orange-dark)]/20",
  },
  "Digitalize Your Business": {
    active: "bg-[var(--green-text)] text-white",
    inactive: "bg-[var(--green-text)]/10 text-[var(--green-text)] hover:bg-[var(--green-text)]/20",
  },
};

const SERVICES = [
  // ---------- Start Your Business (5) ----------
  {
    category: "Start Your Business",
    icon: Landmark,
    title: "Startup India Registration",
    body: "Get your DPIIT recognition certificate and unlock 3 years of tax exemption, IPR benefits, and government scheme priority access.",
    tag: "DPIIT Approved",
  },
  {
    category: "Start Your Business",
    icon: Award,
    title: "MSME / Udyam Registration",
    body: "Official Udyam certification gives you priority lending, lower interest rates, and access to ₹1000+ crore subsidy schemes.",
    tag: "Udyam Portal",
  },
  {
    category: "Start Your Business",
    icon: Building2,
    title: "Private Limited Company",
    body: "Incorporate with a clear legal identity built for outside funding, hiring and long-term growth — the most common structure for scaling startups.",
    tag: "Most Popular Structure",
  },
  {
    category: "Start Your Business",
    icon: Handshake,
    title: "Limited Liability Partnership (LLP)",
    body: "Register as an LLP — liability protection for founding partners, without the compliance load of a full private limited company.",
    tag: "Partnership Structure",
  },
  {
    category: "Start Your Business",
    icon: UserCircle,
    title: "One Person Company (OPC)",
    body: "Incorporate solo with full liability protection and a formal legal identity — built for single-founder businesses.",
    tag: "Solo Founder Friendly",
  },

  // ---------- Fund Your Business (8) ----------
  {
    category: "Fund Your Business",
    icon: Banknote,
    title: "Government Grants",
    body: "We identify and apply for grants you qualify for — SIDBI, DST, NASSCOM, state-level schemes, and more. You don't miss what we handle.",
    tag: "Non-Dilutive Capital",
  },
  {
    category: "Fund Your Business",
    icon: LineChart,
    title: "Investment / Pitch Deck Readiness",
    body: "Pitch decks, financial models, due-diligence prep, and investor introductions — we get you ready before you walk into any room.",
    tag: "Angel & VC Connects",
  },
  {
    category: "Fund Your Business",
    icon: ShieldCheck,
    title: "CGTMSE Credit Guarantee",
    body: "Collateral-free working capital and term loans for eligible MSMEs, backed by a government credit guarantee cover.",
    tag: "Collateral-Free",
  },
  {
    category: "Fund Your Business",
    icon: Landmark,
    title: "MSME Loans",
    body: "Structured loan applications to eligible banks and institutions, prepared and filed at the lowest rate your business qualifies for.",
    tag: "Bank & PSU Tie-ups",
  },
  {
    category: "Fund Your Business",
    icon: Wallet,
    title: "MUDRA — Shishu to Tarun",
    body: "Micro-enterprise credit with no collateral and quick sanction through PSU banks, from Shishu up to Tarun.",
    tag: "Up to ₹10L",
  },
  {
    category: "Fund Your Business",
    icon: Rocket,
    title: "SIDBI / DST / NASSCOM Funding Support",
    body: "Access to startup and innovation-ecosystem funding programmes — from eligibility assessment through to application and incubation support.",
    tag: "Ecosystem Funding",
  },
  {
    category: "Fund Your Business",
    icon: Map,
    title: "Government Scheme Consulting",
    body: "A full audit of your business against 200+ central and state schemes — with a personalized roadmap to unlock what you qualify for.",
    tag: "200+ Schemes Mapped",
  },
  {
    category: "Fund Your Business",
    icon: BadgeCheck,
    title: "Subsidy & Incentive Assistance",
    body: "Capital subsidy, technology upgrade subsidies, export incentives, and electricity tariff concessions — claimed and documented properly.",
    tag: "State & Central Level",
  },

  // ---------- Protect Your Business (5) ----------
  {
    category: "Protect Your Business",
    icon: ShieldCheck,
    title: "Trademark Registration",
    body: "Protect your brand name, logo and identity through professional trademark registration support.",
    tag: "Brand Protection",
  },
  {
    category: "Protect Your Business",
    icon: Lightbulb,
    title: "Patent Registration",
    body: "Protect eligible inventions and innovations with guided patent registration — from documentation through to filing.",
    tag: "IP Protection",
  },
  {
    category: "Protect Your Business",
    icon: Copyright,
    title: "Copyright Registration",
    body: "Register and protect your original creative and written work under copyright law.",
    tag: "Creative Work",
  },
  {
    category: "Protect Your Business",
    icon: Receipt,
    title: "GST Registration",
    body: "GST registration and ongoing compliance support for businesses that need indirect-tax registration.",
    tag: "Indirect Tax",
  },
  {
    category: "Protect Your Business",
    icon: FileStack,
    title: "MCA / ROC Compliance",
    body: "Corporate filings and ROC compliance handled on schedule — annual returns, resolutions and statutory filings, so you don't have to.",
    tag: "Zero Penalties",
  },

  // ---------- Digitalize Your Business (4) ----------
  {
    category: "Digitalize Your Business",
    icon: Globe,
    title: "Website Development",
    body: "A professional, conversion-ready website built around your services, brand and customers.",
    tag: "Custom Build",
  },
  {
    category: "Digitalize Your Business",
    icon: Search,
    title: "SEO Management",
    body: "Structured SEO to improve your search visibility and help the right customers find you organically.",
    tag: "Organic Growth",
  },
  {
    category: "Digitalize Your Business",
    icon: Megaphone,
    title: "Social Media Marketing",
    body: "Consistent, on-brand content and campaigns across social platforms to build audience and engagement.",
    tag: "Brand Presence",
  },
  {
    category: "Digitalize Your Business",
    icon: Target,
    title: "Lead Generation",
    body: "Targeted campaigns that connect your business with customers who are actually ready to buy.",
    tag: "Qualified Leads",
  },
] as const;

/* ---------- Services: seoq.vercel.app/home-three "features box" —
   one rounded light band holding a 4-column grid. Reference has NO
   per-column card (no bg/shadow) — icon, title, checklist and button
   sit directly on the shared band. Flat solid icon circles (not
   gradient), plain check glyphs (not circled), light-tint pill button.
   Measurements pulled directly from the reference via computed styles:
   heading 44px/700/plain navy (no gradient), subtitle 18px/500/70%
   opacity, icon 83px, column bg #F6F9FE, title 20px/600, list 15px/400,
   button bg rgba(38,80,226,.06) with plain navy text (not tinted).
   NOTE: layout-first pass. Aarkin has 8 real services; only the
   first 4 are seated here for now — the rest need an accommodation
   decision (second row? a "view all" page?) in a follow-up pass. ---------- */
/* ---------- Services: themazine.com/mr/dobee "Our Services" section,
   ditto -- plain eyebrow + big heading beside a bordered highlight box
   (spark icon, copy, pill CTA), then a row of plain white cards on the
   reference's own cream section backdrop (its dedicated `.service__bg`
   layer, matched here rather than the site's default white). Whole
   card flips solid orange on hover; the icon circle (orange at rest,
   like their lime) flips to dark ink with an inverted glyph on ITS OWN
   hover specifically -- both measured off the live site's actual CSS,
   not approximated. Green -> orange, content and copy ours. ---------- */
export function Services() {
  const [active, setActive] = useState<(typeof SERVICE_CATEGORIES)[number]>(SERVICE_CATEGORIES[0]);
  const shown = SERVICES.filter((s) => s.category === active);

  return (
    <section id="services" className="bg-[var(--mint)] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-10 pb-10 lg:grid-cols-2">
          <div className="reveal-card" data-reveal-delay-ms="150">
            <p className="text-lg font-semibold text-foreground">Our Services</p>
            <h2 className="mt-2 font-display text-4xl leading-[1.15] font-bold text-balance md:text-5xl">
              We Offer Every Founder Great Support.
            </h2>
          </div>

          <div
            className="reveal-card flex flex-col items-start gap-6 rounded-[5px] border border-foreground/80 p-7 sm:flex-row sm:items-center"
            data-reveal-delay-ms="300"
          >
            <Asterisk className="size-10 shrink-0 text-foreground" strokeWidth={1.5} />
            <p className="flex-1 text-[15px] leading-relaxed text-muted-foreground">
              From registration to funding, we handle every form, filing and follow-up — so you only
              deal with the outcome.
            </p>
            <a
              href="#consult"
              className="inline-flex shrink-0 items-center justify-center rounded-full bg-[var(--orange-dark)] px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-orange hover:text-foreground"
            >
              More Services
            </a>
          </div>
        </div>

        {/* Category chips -- one colour per category (not the site's usual
            monochrome filter pill) so all 22 services stay scannable in 4
            groups instead of one long wall of cards, mirroring the 4 tabs
            on the client's existing site. */}
        <div className="flex flex-wrap gap-2 pb-10">
          {SERVICE_CATEGORIES.map((c) => {
            const style = CATEGORY_STYLES[c];
            return (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`rounded-full px-4 py-2 text-sm font-bold transition-colors ${
                  active === c ? style.active : style.inactive
                }`}
              >
                {c}
              </button>
            );
          })}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {shown.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="reveal-card group flex h-full flex-col rounded-[5px] bg-white p-6 transition-colors duration-300 hover:bg-orange"
                data-reveal-delay-ms={300 + (i % 4) * 150}
              >
                <div className="flex items-center gap-4">
                  <span className="grid size-12 shrink-0 place-items-center rounded-full bg-orange text-foreground transition-colors duration-300 hover:bg-foreground hover:text-white">
                    <Icon className="size-5" strokeWidth={1.5} />
                  </span>
                  <h3 className="font-display text-lg leading-tight font-semibold text-foreground">
                    {s.title}
                  </h3>
                </div>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
                  {s.body}
                </p>
                <div className="mt-5 flex items-center justify-between">
                  <a
                    href="#consult"
                    className="inline-flex items-center justify-center rounded-[5px] bg-foreground px-5 py-3 text-sm font-semibold text-white"
                  >
                    Learn More
                  </a>
                  <a
                    href="#consult"
                    aria-label={`Learn more about ${s.title}`}
                    className="text-foreground transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  >
                    <ArrowUpRight className="size-5" strokeWidth={1.5} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const STEPS = [
  {
    phase: "Phase I",
    title: "Free consultation",
    body: "We assess your business, goals and current position. No sales pitch — just clarity on what you qualify for.",
    icon: Users,
  },
  {
    phase: "Phase II",
    title: "Scheme eligibility audit",
    body: "We map your business against 200+ central and state schemes, grants and funding programmes.",
    icon: Search,
  },
  {
    phase: "Phase III",
    title: "Documentation & filing",
    body: "Every document, form and application prepared, verified and submitted on your behalf.",
    icon: FileStack,
  },
  {
    phase: "Phase IV",
    title: "Approval & activation",
    body: "Certificates issued, funds disbursed, benefits activated — we follow up until you're approved.",
    icon: CheckCircle2,
  },
];

/* ---------- Process: themazine.com/mr/dobee/index-2.html's "How We
   Get Things Done" section, ditto -- plain eyebrow + heading, cards
   each holding a numbered badge (a solid circle ringed by a second
   dashed outline, done with a single CSS `outline` + `outline-offset`
   rather than a second element) that turns solid orange on hover.
   Green -> orange; content is aarkin.co.in's real 4-step process
   copy, so 4 cards where the reference shows 3 -- kept all 4 real
   steps rather than cutting one to match their count, same call made
   for Services (8 vs 3) and About (3 vs 2).

   The 4 cards originally sat in a plain grid with no visual link
   between them -- each numbered badge was its own island, so despite
   being labelled a "process" it read as four unrelated cards, not one
   sequence (direct feedback). Added a dashed line threading through
   every badge in order: a left-rail vertical line on mobile/tablet
   (badges stacked, title/body beside each one -- the classic
   left-aligned timeline), rotating to a horizontal line across the
   row from lg up (matching the original desktop layout, just now
   actually connected). The line sits behind everything (z-index auto
   vs. the badge's explicit z-10) and is only ever visible in the gaps
   between steps, since it's positioned to pass exactly through each
   82px badge's own centre (41px = half its diameter) and both the
   badge and the card content are fully opaque where they'd otherwise
   overlap it. ---------- */
export function Process() {
  return (
    <section id="process" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-lg font-semibold text-foreground">How It Works</p>
          <h2 className="mt-2 font-display text-4xl leading-[1.15] font-bold text-balance md:text-5xl">
            From First Call to Approved Funding
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Four clear steps. Zero confusion. One dedicated point of contact throughout.
          </p>
        </div>

        <div className="relative mt-16 flex flex-col gap-10 lg:flex-row lg:gap-6">
          <div
            aria-hidden
            className="absolute top-0 bottom-0 left-[41px] z-0 w-0 border-l-2 border-dashed border-foreground/25 lg:top-[41px] lg:right-0 lg:bottom-auto lg:left-0 lg:h-0 lg:w-auto lg:border-l-0 lg:border-t-2"
          />

          {STEPS.map((s, i) => (
            <div
              key={s.title}
              className="group relative flex items-start gap-5 lg:flex-1 lg:flex-col lg:items-center lg:gap-0 lg:text-center"
            >
              <span className="relative z-10 grid size-[82px] shrink-0 place-items-center rounded-full border border-foreground bg-background text-[32px] font-semibold text-foreground outline outline-1 outline-dashed outline-offset-[18px] outline-foreground/70 transition-colors duration-300 group-hover:bg-orange">
                {i + 1}
              </span>
              <div className="rounded-[10px] border border-foreground bg-[color-mix(in_oklab,var(--orange)_10%,white)] p-6 transition-colors duration-300 group-hover:bg-orange lg:mt-[30px] lg:w-full lg:p-9">
                <h4 className="text-[22px] leading-8 font-medium text-foreground lg:text-[26px] lg:leading-9">
                  {s.title}
                </h4>
                <p className="mt-3 text-base leading-7 text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
                  {s.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Why Aarkin: differentiators + hard numbers ---------- */
const WHY = [
  { title: "Founder-First Thinking", icon: Users },
  { title: "Faster Than Self-Filing", icon: Zap },
  { title: "Zero Paperwork Burden", icon: FileStack },
  { title: "Deep Government Ecosystem Knowledge", icon: Landmark },
];

/* ---------- Why Arkin: themazine.com/mr/dobee/index-2.html's "Our
   Agency" section (about__section__two), copied directly per later
   request -- confirmed this is the right block via its own "Our
   Agency" eyebrow, not the home page's separate "Why Choose Us" grid
   this section used to be based on.

   Structure measured off the live page: an organic blob-shaped photo
   (the reference bakes the blob into the PNG's alpha channel itself;
   ours gets the same silhouette from a CSS asymmetric border-radius
   since we're using a plain photo, not a pre-masked asset) with a
   lime stat badge (rgb(190,232,71), 5px radius, big bold number +
   label, measured padding 34px) overlapping its top-left corner,
   text column with eyebrow + heading + description, a row of 66px
   lime icon circles with bold labels (their "Providing Quality
   Services" / "Leader of Creative Agency", 2 items -- we have 4 real
   differentiators, kept all 4 as a 2x2 grid rather than cutting real
   ones to match their count, same call as every other section), a
   supporting line, and a lime pill "Learn More" button (30px radius,
   20px/46px padding). Column order flips on mobile (text first, image
   second) exactly as the reference does it via order-2/order-1.

   The small dark sparkle accent top-right of their heading animates
   (scale-up-one, 1s ease-in-out infinite alternate-reverse, read off
   its own computed style) -- reused here via the footer's
   `footer-pulse` keyframe at that same 1s duration instead of adding
   a redundant one. Green -> orange, content and photo stay ours; the
   "2,000+ Startups & MSMEs Assisted" stat moved from its own line
   into the new photo badge (the reference's badge slot), and the
   line that used to introduce it now stands alone as the supporting
   sentence before the CTA. ---------- */
export function WhyArkin() {
  const [imgLoaded, setImgLoaded] = useState(false);
  return (
    <section id="why" className="bg-[#FFF7EE] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-12">
          <div className="order-2 lg:order-1 lg:col-span-6">
            <div className="relative mx-auto max-w-md pt-8 pl-8">
              <div className="relative aspect-square w-full overflow-hidden rounded-[40%_60%_60%_40%/50%_40%_60%_50%]">
                <PhotoSkeleton show={!imgLoaded} />
                <img
                  src={whyArkinVisual}
                  alt="An Aarkin consultant reviewing a client's registration documents"
                  width={1000}
                  height={1000}
                  loading="lazy"
                  decoding="async"
                  onLoad={() => setImgLoaded(true)}
                  className={`size-full object-cover transition-opacity duration-700 ${imgLoaded ? "opacity-100" : "opacity-0"}`}
                />
              </div>
              <div className="absolute top-0 left-0 rounded-[5px] bg-orange p-6 md:p-8">
                <span className="block font-display text-4xl leading-tight font-bold text-foreground md:text-5xl">
                  2,000+
                </span>
                <span className="mt-1 block text-base font-semibold text-foreground md:text-lg">
                  Startups &amp; MSMEs Assisted
                </span>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 lg:col-span-6">
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="text-lg font-semibold text-[var(--green-text)]">Why Arkin</p>
                <h2 className="mt-2 font-display text-4xl leading-[1.15] font-bold text-balance md:text-5xl">
                  We Don&rsquo;t Just Advise. We Execute.
                </h2>
              </div>
              <Asterisk
                aria-hidden
                className="animate-[footer-pulse_1s_ease-in-out_infinite_alternate-reverse] mt-2 hidden size-8 shrink-0 text-foreground/20 sm:block"
              />
            </div>
            <p className="mt-4 max-w-lg text-lg leading-relaxed text-muted-foreground">
              Most consultants give you a report. We give you outcomes — approved registrations,
              disbursed funds and filed returns.
            </p>

            <div className="mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-2">
              {WHY.map(({ title, icon: Icon }) => (
                <div key={title} className="flex items-center gap-4">
                  <span className="grid size-[66px] shrink-0 place-items-center rounded-full bg-orange text-foreground">
                    <Icon className="size-6" strokeWidth={1.75} />
                  </span>
                  <h5 className="text-lg leading-tight font-semibold text-foreground">{title}</h5>
                </div>
              ))}
            </div>

            <p className="mt-10 max-w-lg text-lg leading-relaxed text-muted-foreground">
              Businesses across India trust Aarkin to turn government opportunity into approved,
              disbursed outcomes.
            </p>

            <a
              href="#consult"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-[var(--orange-dark)] px-8 py-4 text-sm font-bold text-white transition-colors hover:bg-orange hover:text-foreground"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

const SCHEMES = [
  {
    code: "01",
    name: "Startup India Seed Fund",
    amount: "Up to ₹50L",
    body: "Proof-of-concept, prototype and market-entry capital for DPIIT-recognised startups.",
    tag: "Non-dilutive",
  },
  {
    code: "02",
    name: "CGTMSE Credit Guarantee",
    amount: "Up to ₹5Cr",
    body: "Collateral-free working capital and term loans backed by a government guarantee cover.",
    tag: "Collateral-free",
  },
  {
    code: "03",
    name: "PMEGP Subsidy",
    amount: "15–35% subsidy",
    body: "Margin-money subsidy for new manufacturing and service units, rural and urban.",
    tag: "Capital subsidy",
  },
  {
    code: "04",
    name: "MUDRA — Shishu to Tarun",
    amount: "Up to ₹10L",
    body: "Micro-enterprise credit with no collateral and quick sanction through PSU banks.",
    tag: "Micro credit",
  },
  {
    code: "05",
    name: "BIRAC BIG Grant",
    amount: "Up to ₹50L",
    body: "Biotech and life-science innovation grants for early product development.",
    tag: "Deep tech",
  },
  {
    code: "06",
    name: "80-IAC Tax Exemption",
    amount: "3-year 100% relief",
    body: "Full profit tax exemption for recognised startups, plus Section 56 angel tax relief.",
    tag: "Tax benefit",
  },
];

/* ---------- Schemes: seoq.vercel.app/home-three "Real-Life Case
   Studies That Inspire" — heading + filter-tab row, then a tiled
   grid (their 3D illustration tiles stand in as colour tiles here,
   since Aarkin has no equivalent imagery). The tiles were originally
   a 6-colour rotation (violet/lime/navy/rose/sky/amber) as a stand-in
   for "distinguishable at a glance" -- polish pass: that rainbow was
   never actually on-brand (one swatch was literally the pre-revert
   navy), and nothing else on the page colour-codes cards that way, so
   every tile now gets the same dark-ink-green treatment with a lime
   corner glow instead of a per-card hue -- the tag pill and scheme
   name already do the differentiating. Card hover was `tile-lift`, a
   hard-shadow "neubrutalism" slab effect left over from the original
   template that threw a bright yellow shadow/border -- replaced with
   the same soft lift used elsewhere on the page. ---------- */
export function Schemes() {
  const categories = ["All", ...Array.from(new Set(SCHEMES.map((s) => s.tag)))];
  const [active, setActive] = useState("All");
  const shown = active === "All" ? SCHEMES : SCHEMES.filter((s) => s.tag === active);

  return (
    <section id="schemes" className="bg-[var(--mint)] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-lg font-semibold text-foreground">Scheme Library</p>
            <h2 className="mt-2 max-w-xl font-display text-4xl leading-[1.1] font-bold text-balance md:text-5xl">
              The Schemes Founders Miss <span className="text-[var(--green-text)]">Most Often</span>
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`rounded-full px-4 py-2 text-sm font-bold transition-colors ${
                  active === c
                    ? "bg-foreground text-white"
                    : "bg-background text-muted-foreground hover:bg-orange/20 hover:text-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((s) => (
            <article
              key={s.name}
              className="group overflow-hidden rounded-3xl bg-background shadow-sm transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-[var(--orange-dark)] p-6 text-white">
                <div
                  aria-hidden
                  className="absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,color-mix(in_oklab,var(--orange)_35%,transparent),transparent_60%)]"
                />
                <span className="absolute top-4 right-4 rounded-full bg-white/15 px-3 py-1 text-xs font-bold">
                  {s.tag}
                </span>
                <span className="relative font-display text-3xl font-bold">{s.amount}</span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-bold">{s.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                <a
                  href="#consult"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[var(--green-text)]"
                >
                  Check Eligibility{" "}
                  <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Content ported from the client's existing site
   (127.0.0.1:8000/#certifications), which has 8 certifications the
   redesign had dropped entirely. Body copy and the "authority" line
   come straight from that page's own "About" + eligibility text;
   "highlight" pulls the single most concrete benefit out of each
   one's (often much longer) benefits list, so all 8 cards stay one
   consistent length instead of a wall of bullet points. */
const CERTIFICATIONS = [
  {
    icon: Leaf,
    title: "ISO 14001: Environmental Management",
    authority: "ISO Standard",
    body: "An internationally recognized framework for structured environmental management practices.",
    highlight: "Supports enterprise vendor empanelment",
  },
  {
    icon: Factory,
    title: "ZED Certification",
    authority: "QCI · Ministry of MSME",
    body: "Zero Defect Zero Effect accreditation for manufacturing MSMEs, backed by QCI and the Ministry of MSME.",
    highlight: "Up to 100% fee subsidy + ₹10,000 joining reward",
  },
  {
    icon: UtensilsCrossed,
    title: "FSSAI Food Licensing",
    authority: "FSSAI",
    body: "Mandatory 14-digit food hygiene clearance for businesses handling, processing or trading food.",
    highlight: "Required to list on Swiggy, Zomato, Blinkit & Amazon",
  },
  {
    icon: Flag,
    title: "Make in India Certification",
    authority: "DPIIT",
    body: "Formal audit verification of domestic value addition under the DPIIT Public Procurement Order.",
    highlight: "Top purchase preference on GeM tenders",
  },
  {
    icon: Ship,
    title: "IEC (Import Export Code)",
    authority: "DGFT",
    body: "A 10-digit mandatory registration issued by DGFT for businesses in international commerce.",
    highlight: "Required for customs clearance & export benefits",
  },
  {
    icon: IdCard,
    title: "Udyam / MSME Registration",
    authority: "Ministry of MSME",
    body: "The foundational digital identity for Indian micro, small and medium enterprises.",
    highlight: "Lifetime validity, zero renewal fees",
  },
  {
    icon: ShieldCheck,
    title: "ISO/IEC 27001:2022",
    authority: "ISO Standard",
    body: "An internationally recognized standard for managing information security risks.",
    highlight: "Strengthens customer trust & data security",
  },
  {
    icon: BadgeCheck,
    title: "ISO 9001:2015",
    authority: "ISO Standard",
    body: "A standard for establishing and maintaining an effective quality management system.",
    highlight: "Builds credibility with customers & partners",
  },
] as const;

/* ---------- Certifications: same compact icon-beside-title card as
   Services (kept intentionally consistent -- see the note on that
   section about card height), but the icon sits in a dashed "seal"
   ring instead of a solid-fill circle, and each card carries an
   issuing-authority pill + a single highlighted benefit line, so
   these read as official approvals rather than more services. ---------- */
export function Certifications() {
  return (
    <section id="certifications" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="reveal-card text-lg font-semibold text-foreground">Certifications</p>
          <h2 className="reveal-card mt-2 font-display text-4xl leading-[1.15] font-bold text-balance md:text-5xl">
            Certifications & Approvals We Help You Get
          </h2>
          <p className="reveal-card mt-4 text-[15px] leading-relaxed text-muted-foreground">
            Explore the certifications and compliance approvals we help businesses obtain — each one
            backed by the relevant government body or standard.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CERTIFICATIONS.map((c, i) => {
            const Icon = c.icon;
            return (
              <div
                key={c.title}
                className="reveal-card group flex h-full flex-col rounded-[5px] bg-white p-6 transition-colors duration-300 hover:bg-orange"
                data-reveal-delay-ms={300 + (i % 4) * 150}
              >
                <div className="flex items-center gap-4">
                  <span className="grid size-12 shrink-0 place-items-center rounded-full border-2 border-dashed border-[var(--orange-dark)]/50 bg-orange/15 text-[var(--orange-dark)] transition-colors duration-300 group-hover:border-white/60 group-hover:bg-white/25 hover:!bg-[var(--orange-dark)] hover:!text-white">
                    <Icon className="size-5" strokeWidth={1.5} />
                  </span>
                  <h3 className="font-display text-base leading-tight font-semibold text-foreground">
                    {c.title}
                  </h3>
                </div>

                <span className="mt-3 inline-flex w-fit items-center rounded-full bg-foreground/5 px-2.5 py-1 text-[10px] font-bold tracking-wide text-muted-foreground uppercase transition-colors duration-300 group-hover:bg-white/40 group-hover:text-foreground">
                  {c.authority}
                </span>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
                  {c.body}
                </p>

                <p className="mt-3 flex flex-1 items-start gap-1.5 text-[13px] font-semibold text-[var(--green-text)] transition-colors duration-300 group-hover:text-foreground">
                  <CheckCircle2 className="mt-0.5 size-3.5 shrink-0" strokeWidth={2} />
                  {c.highlight}
                </p>

                <div className="mt-5 flex items-center justify-between">
                  <a
                    href="#consult"
                    className="inline-flex items-center justify-center rounded-[5px] bg-foreground px-5 py-3 text-sm font-semibold text-white"
                  >
                    Learn More
                  </a>
                  <a
                    href="#consult"
                    aria-label={`Learn more about ${c.title}`}
                    className="text-foreground transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  >
                    <ArrowUpRight className="size-5" strokeWidth={1.5} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const FOUNDER_STORIES = [
  {
    initials: "RK",
    name: "Rahul Khanna",
    role: "Founder, TechSprint — SaaS, Bengaluru",
    quote:
      "I had no idea I qualified for a seed fund grant. Aarkin found it, filed everything, and got us ₹18 lakhs within 6 weeks. That capital literally built our MVP.",
  },
  {
    initials: "PM",
    name: "Priya Mehta",
    role: "Co-Founder, GreenLeaf Organics — D2C, Jaipur",
    quote:
      "The Startup India registration alone saved us 3 years of taxes. Aarkin handled everything in 9 days flat. Worth every penny and then some.",
  },
  {
    initials: "AS",
    name: "Amit Shah",
    role: "Owner, Precision Tools India — Manufacturing, Surat",
    quote:
      "As an MSME owner, I was leaving government money on the table for years. Aarkin audited my business and unlocked 4 schemes I'd never heard of. Game changer.",
  },
  {
    initials: "NS",
    name: "Nisha Srinivasan",
    role: "Director, AquaTech Solutions — Clean Tech, Chennai",
    quote:
      "Our CGTMSE loan was approved without a single asset as collateral. The Aarkin team structured our application brilliantly — the bank barely asked a question.",
  },
  {
    initials: "VG",
    name: "Vikram Gupta",
    role: "Founder, RapidMove Logistics — Logistics, Delhi NCR",
    quote:
      "Before Aarkin, I'd wasted 3 months trying to file myself and got rejected. They took over, corrected everything, and had my registration in 7 days. Highly recommend.",
  },
  {
    initials: "DT",
    name: "Deepika Tiwari",
    role: "CEO, HealthBridge — HealthTech, Pune",
    quote:
      "The investment readiness package was exactly what we needed before our Series A pitch. They fixed our deck, modeled our financials, and connected us to 6 investors. We closed in 2 months.",
  },
];

/* ---------- Founder stories: seoz-react-nextjs.netlify.app's
   "What Client Say About Us" testimonial slider -- ditto design (white
   14px-radius bordered card, star row + quote, avatar/name flowing
   below it) and ditto animation (continuous, no manual prev/next),
   content and colours ours. Their version runs on Swiper autoplay
   (measured: it steps to the next slide on an eased ~2s transition,
   then holds); reproduced here as a seamless, pausable CSS marquee --
   same "always auto-advancing, hands off the wheel" effect using the
   exact technique this codebase already has for the Credentials strip,
   rather than pulling in a carousel library for it. ---------- */
/* ---------- Founder Stories: same card design as
   themazine.com/mr/dobee/about.html's "Hear From Our Happy
   Customers!" (name + role left, star row right, a big pull-quote,
   then a quote badge and avatar), but per the user's explicit call:
   ours moves continuously rather than stepping page-by-page, and only
   once the section has actually been scrolled to -- reusing the
   site-wide reveal-on-scroll system (index.tsx adds "reveal-section"
   then "is-visible" to every section as it enters the viewport) to
   gate the marquee's `animation-play-state` instead of adding a
   second, bespoke observer just for this one section. Content and
   colours ours; green -> orange. ---------- */
export function FounderStories() {
  const track = [...FOUNDER_STORIES, ...FOUNDER_STORIES];

  return (
    <section id="stories" className="overflow-hidden bg-[#FFF7EE] py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <p className="text-lg font-semibold text-foreground">Founder Stories</p>
        <h2 className="mt-2 font-display text-4xl leading-[1.15] font-bold text-balance md:text-5xl">
          Founders Who <span className="text-[var(--green-text)]">Trusted the Process</span>
        </h2>
      </div>

      <div className="mt-14 [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
        <div className="stories-marquee flex w-max animate-[marquee-loop_46s_linear_infinite] gap-8 px-6 hover:[animation-play-state:paused]">
          {track.map((story, i) => (
            <div key={i} className="w-[360px] shrink-0 rounded-[15px] bg-white p-8 sm:w-[420px]">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h3 className="font-display text-lg font-bold text-foreground">{story.name}</h3>
                  <p className="text-sm text-muted-foreground">{story.role}</p>
                </div>
                <span className="flex gap-1 text-[#F0BF11]" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="size-4 fill-current" aria-hidden="true" />
                  ))}
                </span>
              </div>
              <p className="mt-8 leading-relaxed text-foreground">{story.quote}</p>
              <div className="mt-10 flex items-center">
                <span className="z-10 grid size-[60px] shrink-0 place-items-center rounded-full bg-orange text-foreground">
                  <Quote className="size-6" fill="currentColor" strokeWidth={0} />
                </span>
                <span className="-ml-5 grid size-[53px] shrink-0 place-items-center rounded-full border-2 border-white bg-[var(--orange-dark)] text-sm font-bold text-white">
                  {story.initials}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const FAQS: [string, string][] = [
  [
    "Who qualifies for Startup India registration?",
    "Any private limited company, LLP or partnership firm — less than 10 years old, with annual turnover under ₹100 crore — working on innovation or scalable technology qualifies for DPIIT recognition.",
  ],
  [
    "How long does MSME Udyam registration take?",
    "With Aarkin managing the process, Udyam registration typically completes within 24–72 hours of receiving your documents. The certificate is issued instantly after government approval.",
  ],
  [
    "What documents do I need to get started?",
    "Usually your incorporation certificate, PAN, Aadhaar of directors, GST details and a short business description. We send a precise checklist after your free audit.",
  ],
  [
    "Can I get a business loan without collateral?",
    "Yes. CGTMSE-backed schemes, MUDRA and Standup India offer collateral-free credit. We structure and file the application so approval odds stay high.",
  ],
  [
    "What grants are available for early-stage startups?",
    "Startup India Seed Fund, SIDBI schemes, BIRAC grants for biotech, DST support for deep tech, plus state-level programmes. We map every scheme you qualify for.",
  ],
  [
    "Do I get a dedicated point of contact?",
    "Every client gets a dedicated relationship manager who handles filings, follow-ups and departmental liaisoning end to end.",
  ],
  [
    "What's the tax benefit of Startup India recognition?",
    "DPIIT-recognised startups can claim a 100% tax exemption on profits for 3 consecutive years within the first 10 years, plus angel tax relief under Section 56.",
  ],
  [
    "How much does Aarkin cost?",
    "Fees vary by scope — registration packages start affordably, and funding services are structured to be ROI-positive from the first disbursement. Your initial consultation is free with zero obligation.",
  ],
];

/* ---------- FAQ: numbered hairline accordion ---------- */
const INSIGHT_TILE_BG = [
  "from-[var(--orange-dark)] to-foreground",
  "from-orange to-orange-dark",
  "from-violet-400 to-violet-600",
];

/* ---------- InsightsPreview: fills the seoq.vercel.app/home-three
   "Trends and Predictions" blog-card slot. Aarkin has no blog yet,
   so this borrows 3 FAQ entries as teaser cards for now — flagged
   as a content gap to revisit. ---------- */
export function InsightsPreview() {
  const picks = FAQS.slice(0, 3);
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mx-auto max-w-xl text-center font-display text-4xl leading-[1.1] font-bold text-balance md:text-5xl">
          Trends &amp; Answers for <span className="text-[var(--green-text)]">Online Success</span>
        </h2>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {picks.map(([q, a], i) => (
            <article key={q} className="overflow-hidden rounded-3xl bg-background shadow-sm">
              <div
                className={`flex aspect-[16/10] items-center justify-center bg-gradient-to-br p-6 text-white ${INSIGHT_TILE_BG[i]}`}
              >
                <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-bold">FAQ</span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-bold text-balance">{q}</h3>
                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                  {a}
                </p>
                <a
                  href="#consult"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[var(--green-text)]"
                >
                  Read More <ArrowUpRight className="size-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- ContactCta: themazine.com/mr/dobee/index-3.html's
   subscribe__section__three, ditto -- pale lime band, a plain heading
   and one underlined link, faint decorative ring circles behind it.
   Sits as its own compact prompt right before the footer, exactly
   where the reference has it (last content section before the
   footer) -- separate from the full Consultation form higher up the
   page, not a replacement for it. Green throughout.

   The reference's right-side element (subscribe__link__btn) is a
   216px lime circle -- subscribe__one__06.png -- that spins 360deg
   every 6s (linear, infinite; confirmed off its own computed
   `animation` and @keyframes rotation), with "CONTACT WITH US" set on
   a curved path across its top arc, plus a static 138px outlined
   circle centred on top of it (not rotating -- it has no animation of
   its own) holding an arrow-link to their About page. Reproduced here
   as inline SVG + CSS (`animate-spin-slow`, see styles.css) instead of
   a raster image so the text stays crisp and recolourable, same
   circle/arc math and 216/138px sizing measured off the live
   reference. Ours links to #consult, same target as the section's own
   CTA link. ---------- */
function RotatingContactBadge() {
  return (
    <div className="relative hidden size-[216px] shrink-0 lg:block">
      <svg
        viewBox="0 0 216 216"
        className="size-full animate-[ring-spin_6s_linear_infinite]"
        aria-hidden
      >
        <defs>
          <path id="contact-badge-arc" d="M 20,108 A 88,88 0 0 1 196,108" fill="none" />
        </defs>
        <circle cx="108" cy="108" r="108" fill="var(--orange)" />
        <text fill="var(--orange-dark)" fontSize="14" fontWeight="700" letterSpacing="2.5">
          <textPath href="#contact-badge-arc" startOffset="50%" textAnchor="middle">
            TALK TO US
          </textPath>
        </text>
      </svg>
      <a
        href="#consult"
        aria-label="Talk to our team"
        className="absolute inset-0 m-auto grid size-[138px] place-items-center rounded-full border border-foreground bg-[var(--orange-light)] text-foreground transition-colors hover:bg-foreground hover:text-white"
      >
        <ArrowUpRight className="size-9" strokeWidth={1.75} />
      </a>
    </div>
  );
}

export function ContactCta() {
  return (
    <section className="relative overflow-hidden bg-[var(--orange-light)] py-20">
      <svg
        aria-hidden
        viewBox="0 0 600 600"
        className="pointer-events-none absolute top-1/2 right-0 size-[600px] max-w-none -translate-y-1/2 translate-x-1/4 text-foreground/10"
      >
        <circle cx="300" cy="300" r="290" fill="none" stroke="currentColor" strokeWidth="1" />
        <circle cx="300" cy="300" r="220" fill="none" stroke="currentColor" strokeWidth="1" />
        <circle cx="300" cy="300" r="150" fill="none" stroke="currentColor" strokeWidth="1" />
      </svg>

      <div className="relative mx-auto flex max-w-7xl items-center justify-between gap-12 px-6">
        <div>
          <h2 className="max-w-2xl font-display text-3xl leading-[1.25] font-bold text-balance text-foreground md:text-4xl">
            Want to Talk? Our Team Is Ready to Help.
          </h2>
          <a
            href="#consult"
            className="mt-4 inline-block text-lg font-semibold text-foreground underline decoration-2 underline-offset-4 transition-colors hover:text-[var(--green-text)]"
          >
            Reach out, or check your free eligibility to get started.
          </a>
        </div>
        <RotatingContactBadge />
      </div>
    </section>
  );
}

/* ---------- Faq: themazine.com/mr/dobee/faq.html's own FAQ page
   (.faq__section), not its home-page teaser -- confirmed off the
   live CSSOM (.faq__section .faq-rapper / .accordion-button rules;
   there's a second, unrelated ".faq .accordion-button" ruleset
   elsewhere in their stylesheet with a "+/-" text glyph and a pink
   background -- that one belongs to a different page and isn't used
   here). Two categories side by side (their "Business Questions" /
   "Consulting Questions"), each a pale sage card
   (rgb(234,240,216) -- measured off .faq-rapper's computed
   background, distinct from our existing --mint/--orange-light so
   kept as its own one-off tint rather than reusing a near-miss)
   holding white accordion rows 20px apart (.accordion-item.mt-20).
   Each row's toggle is a 43px lime circle (.accordion-button::after)
   with a chevron that rotates 180deg on open -- a single rotated
   icon, not a swapped plus/minus pair, matching the reference's own
   `--bs-accordion-btn-icon-transform: rotate(-180deg)` exactly.

   Categories are Aarkin's own grouping of the same real FAQS used by
   InsightsPreview -- the reference's two columns are generic content
   buckets, ours map onto what our 8 real questions are actually
   about (registrations vs. funding/process), so nothing here is
   invented copy. ---------- */
const FAQ_CATEGORIES: { title: string; indices: number[] }[] = [
  { title: "Registrations & Compliance", indices: [0, 1, 2, 6] },
  { title: "Funding & Working With Us", indices: [3, 4, 5, 7] },
];

function FaqColumn({ title, indices }: { title: string; indices: number[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div>
      <h3 className="text-[22px] leading-tight font-bold text-[var(--orange-dark)]">{title}</h3>
      <div className="mt-8 space-y-5 rounded-2xl bg-[#EAF0D8] p-6 sm:p-8">
        {indices.map((idx, i) => {
          const entry = FAQS[idx];
          if (!entry) return null;
          const [q, a] = entry;
          const isOpen = open === i;
          return (
            <div key={q} className="overflow-hidden rounded-md bg-white">
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
                aria-expanded={isOpen}
              >
                <span className="text-lg font-semibold text-foreground">{q}</span>
                <span className="grid size-[43px] shrink-0 place-items-center rounded-full bg-orange text-foreground">
                  <ChevronDown
                    className={`size-5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    strokeWidth={2}
                  />
                </span>
              </button>
              {isOpen && (
                <p className="animate-in fade-in slide-in-from-top-2 px-5 pr-10 pb-6 leading-[1.9] text-muted-foreground duration-300">
                  {a}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function Faq() {
  return (
    <section id="faq" className="bg-[var(--mint)] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-xl text-center">
          <p className="text-lg font-semibold text-foreground">Common Questions</p>
          <h2 className="mt-2 font-display text-4xl leading-[1.15] font-bold text-balance md:text-5xl">
            Answers Before You <span className="text-[var(--green-text)]">Ask</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-x-10">
          {FAQ_CATEGORIES.map((cat) => (
            <FaqColumn key={cat.title} title={cat.title} indices={cat.indices} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function Consultation() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);

  async function submitEnquiry(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    if (data["company_website"]) return;

    setIsSubmitting(true);
    try {
      const response = await fetch("https://formsubmit.co/ajax/aarkin2024@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...data,
          _subject: "New Aarkin website enquiry",
          _template: "table",
        }),
      });

      if (!response.ok) throw new Error("Unable to submit enquiry");
      logEnquiryToSheet({ ...data, source: "Consultation form" });
      form.reset();
      sessionStorage.setItem("aarkin-enquiry-completed", "true");
      window.dispatchEvent(new Event("aarkin:enquiry-completed"));
      toast.success("Request received — we'll reply within 4 business hours.");
    } catch {
      toast.error("We couldn't send that request. Please email aarkin2024@gmail.com.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="consult" className="bg-background py-24">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">
        <div>
          <div className="relative aspect-square w-full overflow-hidden rounded-[2rem]">
            <PhotoSkeleton show={!imgLoaded} />
            <img
              src={consultationVisual}
              alt="Two people in a relaxed one-on-one consultation meeting over laptops"
              width={1200}
              height={798}
              loading="lazy"
              decoding="async"
              onLoad={() => setImgLoaded(true)}
              className={`size-full object-cover transition-opacity duration-700 ${imgLoaded ? "opacity-100" : "opacity-0"}`}
            />
          </div>

          <p className="mt-8 text-lg font-semibold text-foreground">Free Consultation</p>
          <h2 className="mt-2 font-display text-4xl leading-tight font-bold text-balance md:text-5xl">
            Your Business Is Sitting on <span className="text-[var(--green-text)]">Untapped</span>{" "}
            Government Capital.
          </h2>
          <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">
            Book a free 30-minute consultation. We'll audit your eligibility, identify your
            opportunities and give you a clear roadmap — no commitment required.
          </p>
          <div className="mt-8 flex flex-wrap gap-6">
            {[
              ["01", "No-cost audit"],
              ["02", "Pan-India expertise"],
              ["03", "4-hour response"],
            ].map(([n, t]) => (
              <div key={n} className="flex items-center gap-3">
                <div className="tabular grid size-9 shrink-0 place-items-center rounded-full border border-foreground bg-[color-mix(in_oklab,var(--orange)_10%,white)] font-display text-xs font-bold text-foreground">
                  {n}
                </div>
                <h5 className="font-display text-sm font-bold text-foreground">{t}</h5>
              </div>
            ))}
          </div>
        </div>

        <form className="space-y-6 self-start p-8 md:p-10" onSubmit={submitEnquiry}>
          <input
            type="text"
            name="company_website"
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />
          <h3 className="font-display text-2xl font-bold text-foreground">
            Book Your Free Consultation
          </h3>
          <p className="text-sm text-muted-foreground">
            Tell us about your business. We'll do the rest.
          </p>
          <div className="grid gap-5 md:grid-cols-2">
            <Field label="Full name">
              <input
                required
                name="name"
                autoComplete="name"
                className={inputClass}
                placeholder="Anirudh Sharma"
              />
            </Field>
            <Field label="Phone number">
              <input
                required
                name="phone"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                className={inputClass}
                placeholder="+91 98xxx xxxxx"
              />
            </Field>
          </div>
          <Field label="Email address">
            <input
              required
              name="email"
              type="email"
              autoComplete="email"
              className={inputClass}
              placeholder="you@company.in"
            />
          </Field>
          <div className="grid gap-5 md:grid-cols-2">
            <Field label="Business type">
              <select required name="business_type" className={inputClass} defaultValue="">
                <option value="" disabled>
                  Select type
                </option>
                <option>Startup (Pvt. Ltd. / LLP)</option>
                <option>MSME / small business</option>
                <option>Sole proprietorship</option>
                <option>Partnership firm</option>
                <option>Not yet registered</option>
              </select>
            </Field>
            <Field label="Primary need">
              <select required name="primary_need" className={inputClass} defaultValue="">
                <option value="" disabled>
                  Select need
                </option>
                <option>Startup India registration</option>
                <option>MSME / Udyam registration</option>
                <option>Government grants & funding</option>
                <option>Business / MSME loans</option>
                <option>Investment readiness</option>
                <option>Compliance & documentation</option>
                <option>Not sure — need guidance</option>
              </select>
            </Field>
          </div>
          <Field label="Brief about your business">
            <textarea
              required
              name="message"
              rows={3}
              className={inputClass}
              placeholder="What are you building?"
            />
          </Field>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-full bg-[var(--orange-dark)] py-3.5 text-sm font-bold text-white transition-colors hover:bg-orange hover:text-foreground disabled:cursor-wait disabled:opacity-70"
          >
            {isSubmitting ? "Sending…" : "Get My Free Consultation"}
          </button>
          <p className="text-center text-xs text-muted-foreground">
            Your details are used only to respond to your enquiry. No spam.
          </p>
        </form>
      </div>
    </section>
  );
}

export function ScrollEnquiryPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("aarkin-enquiry-completed")) {
      return;
    }

    const onScroll = () => {
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0;
      const consultation = document.getElementById("consult");
      const consultationIsVisible =
        consultation !== null &&
        consultation.getBoundingClientRect().top < window.innerHeight * 0.85;

      if (scrollProgress >= 0.3 && !consultationIsVisible) {
        setIsOpen(true);
        window.removeEventListener("scroll", onScroll);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    const closeOnCompletedEnquiry = () => setIsOpen(false);

    window.addEventListener("keydown", closeOnEscape);
    window.addEventListener("aarkin:enquiry-completed", closeOnCompletedEnquiry);
    return () => {
      window.removeEventListener("keydown", closeOnEscape);
      window.removeEventListener("aarkin:enquiry-completed", closeOnCompletedEnquiry);
    };
  }, [isOpen]);

  async function submitPopupEnquiry(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    if (data["company_website"]) return;

    setIsSubmitting(true);
    try {
      const response = await fetch("https://formsubmit.co/ajax/aarkin2024@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...data,
          source: "Scroll consultation prompt",
          _subject: "New Aarkin website enquiry",
          _template: "table",
        }),
      });

      if (!response.ok) throw new Error("Unable to submit enquiry");
      logEnquiryToSheet({ ...data, source: "Scroll consultation prompt" });
      form.reset();
      sessionStorage.setItem("aarkin-enquiry-completed", "true");
      setIsOpen(false);
      toast.success("Request received — we'll reply within 4 business hours.");
    } catch {
      toast.error("We couldn't send that request. Please email aarkin2024@gmail.com.");
    } finally {
      setIsSubmitting(false);
    }
  }

  if (!isOpen) return null;

  return (
    <aside
      role="dialog"
      aria-modal="false"
      aria-labelledby="scroll-enquiry-title"
      className="animate-in fade-in slide-in-from-bottom-6 fixed right-3 bottom-3 left-3 z-[60] max-h-[calc(100vh-1.5rem)] overflow-y-auto rounded-2xl border border-border bg-background shadow-2xl duration-300 sm:right-6 sm:bottom-6 sm:left-auto sm:w-[26rem]"
    >
      <div className="flex items-start justify-between gap-6 rounded-t-2xl bg-[var(--orange-dark)] p-5 text-white">
        <div>
          <span className="eyebrow text-orange">Free eligibility check</span>
          <h2 id="scroll-enquiry-title" className="mt-1 font-display text-2xl font-bold">
            Could your business qualify?
          </h2>
        </div>
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          className="grid size-9 shrink-0 place-items-center rounded-full border border-white/30 transition-colors hover:border-transparent hover:bg-orange hover:text-foreground"
          aria-label="Close consultation form"
        >
          <X className="size-4" />
        </button>
      </div>

      <form className="space-y-4 p-5" onSubmit={submitPopupEnquiry}>
        <input
          type="text"
          name="company_website"
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />
        <p className="text-sm leading-relaxed text-muted-foreground">
          Share a few details. We’ll map your first opportunities for free.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Full name">
            <input
              required
              name="name"
              autoComplete="name"
              className={inputClass}
              placeholder="Your name"
            />
          </Field>
          <Field label="Phone number">
            <input
              required
              name="phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              className={inputClass}
              placeholder="+91 98xxx xxxxx"
            />
          </Field>
        </div>
        <Field label="Email address">
          <input
            required
            name="email"
            type="email"
            autoComplete="email"
            className={inputClass}
            placeholder="you@company.in"
          />
        </Field>
        <Field label="What do you need help with?">
          <select required name="primary_need" className={inputClass} defaultValue="">
            <option value="" disabled>
              Select a service
            </option>
            <option>Startup India registration</option>
            <option>MSME / Udyam registration</option>
            <option>Government grants & funding</option>
            <option>Business / MSME loans</option>
            <option>Investment readiness</option>
            <option>Not sure — need guidance</option>
          </select>
        </Field>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-full bg-[var(--orange-dark)] py-3.5 text-sm font-bold text-white transition-colors hover:bg-orange hover:text-foreground disabled:cursor-wait disabled:opacity-70"
        >
          {isSubmitting ? "Sending…" : "Check My Eligibility"}
        </button>
        <p className="text-center text-xs text-muted-foreground">
          No spam. Your details are used only to reply.
        </p>
      </form>
    </aside>
  );
}

const inputClass =
  "w-full rounded-xl border border-input bg-white px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-[var(--green-text)]";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block space-y-2">
      <span className="eyebrow text-foreground/60">{label}</span>
      {children}
    </label>
  );
}
