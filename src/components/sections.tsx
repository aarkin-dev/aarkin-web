import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Award,
  BadgeCheck,
  Banknote,
  CheckCircle2,
  FileStack,
  Landmark,
  LineChart,
  Map,
  Minus,
  Plus,
  Quote,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  Users,
  X,
  Zap,
} from "lucide-react";
import { toast } from "sonner";
import heroVisual from "@/assets/hero-visual.jpg";
import aboutVisual from "@/assets/about-visual.jpg";

const HERO_STATS = [
  { value: "2,000+", label: "Businesses assisted" },
  { value: "₹50Cr+", label: "Funding unlocked" },
  { value: "98%", label: "Approval rate" },
  { value: "7 days", label: "Avg. DPIIT cycle" },
];

export function Hero() {
  return (
    <section className="ledger-grain border-b border-border">
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-16">
        <div className="grid items-end gap-12 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <span className="eyebrow inline-flex items-center gap-2 border-2 border-primary px-3 py-1.5 text-primary">
              <Sparkles className="size-3" /> India's trusted startup growth partner
            </span>
            <h1 className="mt-7 font-display text-5xl leading-[0.95] font-bold text-balance md:text-7xl">
              Your business deserves every rupee of support{" "}
              <span className="slab-yellow mr-3 -rotate-1 inline-block px-3 py-0.5">
                India offers
              </span>
            </h1>
          </div>
          <div className="lg:col-span-4">
            <div className="border-l-2 border-yellow py-1 pl-6">
              <p className="max-w-sm leading-relaxed text-muted-foreground">
                We decode government schemes, unlock grants, fast-track registrations and build
                investment-readiness — so founders can build, not file paperwork.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#consult"
                  className="slab-yellow inline-flex items-center gap-2 px-6 py-4 text-xs font-bold tracking-widest uppercase transition-transform hover:translate-x-1 hover:translate-y-1"
                >
                  Book free consultation <ArrowUpRight className="size-3.5" />
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center border-2 border-input px-6 py-4 text-xs font-bold tracking-widest uppercase transition-colors hover:border-yellow hover:bg-yellow hover:text-accent-foreground"
                >
                  Explore services
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-12">
          <div className="relative lg:col-span-5">
            <div className="absolute -top-3 -left-3 hidden size-full border-2 border-yellow lg:block" />
            <img
              src={heroVisual}
              alt="Indian founder holding an approved government scheme certificate"
              width={1024}
              height={1280}
              fetchPriority="high"
              decoding="async"
              className="relative aspect-[4/5] w-full object-cover"
            />
          </div>
          <div className="hairline-grid grid grid-cols-2 self-start border border-border lg:col-span-7">
            {HERO_STATS.map((s, i) => (
              <div
                key={s.label}
                className={
                  i % 3 === 0 ? "bg-yellow p-8 text-accent-foreground" : "bg-background p-8"
                }
              >
                <div className="tabular font-display text-3xl font-bold tracking-tight">
                  {s.value}
                </div>
                <div
                  className={`eyebrow mt-2 ${i % 3 === 0 ? "text-accent-foreground/70" : "text-muted-foreground"}`}
                >
                  {s.label}
                </div>
              </div>
            ))}
            <div className="bg-primary p-8 text-primary-foreground">
              <p className="text-sm leading-relaxed">
                Free 30-minute eligibility audit against 200+ central and state schemes.
              </p>
              <a
                href="#consult"
                className="eyebrow mt-4 inline-flex items-center gap-2 text-yellow"
              >
                Start now <ArrowUpRight className="size-3.5" />
              </a>
            </div>
            <div className="bg-yellow p-8 text-accent-foreground">
              <div className="tabular font-display text-3xl font-bold tracking-tight">200+</div>
              <div className="eyebrow mt-2 text-accent-foreground/70">Schemes mapped</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

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
    <div className="overflow-hidden border-y-2 border-yellow bg-yellow py-3 text-accent-foreground">
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

/* ---------- About: hero grammar — ledger field, outlined badge, hairline grid ---------- */
export function About() {
  return (
    <section id="about" className="ledger-grain border-b border-border">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <span className="eyebrow inline-flex items-center gap-2 border-2 border-primary px-3 py-1.5 text-primary">
          <Sparkles className="size-3" /> About Aarkin
        </span>
        <div className="mt-8 grid gap-12 lg:grid-cols-12">
          <h2 className="font-display text-4xl leading-[1.05] font-bold text-balance md:text-5xl lg:col-span-7">
            Government opportunity shouldn&rsquo;t be a{" "}
            <span className="slab-yellow -rotate-1 inline-block px-3 py-0.5">guessing game</span>
          </h2>
          <div className="space-y-5 border-l-2 border-yellow pl-6 lg:col-span-5">
            <p className="leading-relaxed text-muted-foreground">
              Most founders lose lakhs in grants, tax benefits and subsidies simply because they
              don&rsquo;t know the schemes exist — or because the process feels impossibly complex.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              Aarkin sits at the intersection of policy expertise and startup understanding —
              translating India&rsquo;s government ecosystem into clear, actionable growth.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-12">
          <div className="relative lg:col-span-5">
            <img
              src={aboutVisual}
              alt="Stack of approved government scheme certificates with official seals"
              width={1024}
              height={1024}
              loading="lazy"
              decoding="async"
              className="aspect-square w-full object-cover"
            />
            <span className="slab-yellow absolute -bottom-4 -left-4 px-4 py-2 text-xs font-bold tracking-widest uppercase">
              200+ schemes mapped
            </span>
          </div>
          <div className="hairline-grid grid self-start border border-border lg:col-span-7">
            {[
              ["₹3Cr+", "Average funding per client"],
              ["1,500+", "MSMEs onboarded"],
              ["7 days", "Average DPIIT cycle"],
            ].map(([v, l], i) => (
              <div
                key={l}
                className={
                  i === 1
                    ? "bg-yellow p-8 text-accent-foreground"
                    : i === 2
                      ? "bg-primary p-8 text-primary-foreground"
                      : "bg-background p-8"
                }
              >
                <div className="tabular font-display text-4xl font-bold tracking-tight">{v}</div>
                <div className={`eyebrow mt-2 ${i === 0 ? "text-muted-foreground" : "opacity-70"}`}>
                  {l}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="hairline-grid mt-8 grid border border-border md:grid-cols-3">
          {[
            [
              Map,
              "Scheme discovery & mapping",
              "We identify every scheme your business qualifies for — before you file a single form.",
            ],
            [
              Sparkles,
              "Fast-track execution",
              "Our team handles the entire application process — you get results, not status updates.",
            ],
            [
              Users,
              "Founder-first approach",
              "Dedicated manager, transparent timelines and honest guidance — always.",
            ],
          ].map(([Icon, title, body]) => {
            const I = Icon as typeof Map;
            return (
              <div key={title as string} className="bg-background p-8">
                <I className="size-6 text-primary" strokeWidth={1.5} />
                <h4 className="mt-5 font-display text-lg font-bold">{title as string}</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {body as string}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const SERVICES = [
  {
    icon: Landmark,
    title: "Startup India Registration",
    body: "DPIIT recognition unlocking 3 years of tax exemption under 80-IAC, IPR benefits and priority scheme access.",
    tag: "DPIIT approved",
  },
  {
    icon: Award,
    title: "MSME / Udyam Registration",
    body: "Priority lending, lower interest rates and access to ₹1000+ crore subsidy schemes.",
    tag: "Udyam portal",
  },
  {
    icon: Banknote,
    title: "Government Grants",
    body: "SIDBI, DST, BIRAC, NASSCOM and state-level schemes — identified, filed and followed up.",
    tag: "Non-dilutive capital",
  },
  {
    icon: Landmark,
    title: "Business & MSME Loans",
    body: "CGTMSE-backed credit, MUDRA, Standup India and PSU bank schemes at the lowest eligible rates.",
    tag: "Collateral-free",
  },
  {
    icon: LineChart,
    title: "Investment Readiness",
    body: "Pitch decks, financial models, diligence prep and investor introductions before you walk into the room.",
    tag: "Angel & VC connects",
  },
  {
    icon: FileStack,
    title: "Compliance & Documentation",
    body: "GST returns, startup filings, MCA compliance and annual reporting managed end to end.",
    tag: "Zero penalties",
  },
  {
    icon: Map,
    title: "Scheme Consulting",
    body: "A full audit against 200+ central and state schemes, with a personalised unlock roadmap.",
    tag: "200+ schemes mapped",
  },
  {
    icon: BadgeCheck,
    title: "Subsidy & Incentives",
    body: "Capital subsidy, technology upgrades, export incentives and tariff concessions, properly documented.",
    tag: "State & central",
  },
];

/* ---------- Services: an index, not a card grid. Rows flip to yellow on hover. ---------- */
export function Services() {
  return (
    <section id="services" className="border-b border-border">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="eyebrow inline-flex items-center gap-2 border-2 border-primary px-3 py-1.5 text-primary">
              What we do
            </span>
            <h2 className="mt-8 max-w-3xl font-display text-4xl leading-[1.05] font-bold text-balance md:text-5xl">
              Government support,{" "}
              <span className="slab-yellow -rotate-1 inline-block px-3 py-0.5">
                turned into growth
              </span>
            </h2>
          </div>
          <span className="tabular eyebrow text-muted-foreground">08 / services</span>
        </div>

        <div className="mt-14 border-t border-border">
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            return (
              <a
                key={s.title}
                href="#consult"
                className="group grid grid-cols-12 items-start gap-x-3 gap-y-2 border-b border-border px-2 py-7 transition-colors hover:bg-yellow hover:text-accent-foreground md:gap-8"
              >
                <span className="tabular eyebrow col-span-2 pt-1 text-primary group-hover:text-accent-foreground sm:col-span-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="col-span-10 sm:col-span-11 md:col-span-4">
                  <h3 className="flex items-center gap-3 font-display text-xl font-bold md:text-2xl">
                    <Icon
                      className="size-5 shrink-0 text-primary group-hover:text-accent-foreground"
                      strokeWidth={1.5}
                    />
                    {s.title}
                  </h3>
                </div>
                <p className="col-span-12 text-sm leading-relaxed text-muted-foreground group-hover:text-accent-foreground/80 md:col-span-5">
                  {s.body}
                </p>
                <span className="eyebrow col-span-12 flex items-center justify-between gap-2 pt-1 md:col-span-2 md:justify-end">
                  {s.tag}
                  <ArrowUpRight className="size-4 shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </span>
              </a>
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

/* ---------- Process: connected timeline with step nodes ---------- */
export function Process() {
  return (
    <section id="process" className="paper-rule border-y-2 border-primary bg-background">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <span className="eyebrow inline-flex items-center gap-2 border-2 border-primary px-3 py-1.5 text-primary">
          The process
        </span>
        <h2 className="mt-8 font-display text-4xl leading-[1.05] font-bold text-balance md:text-5xl">
          From first call to{" "}
          <span className="slab-yellow mr-3 -rotate-1 inline-block px-3 py-0.5">
            approved funding
          </span>
        </h2>

        <div className="relative mt-16">
          {/* connecting timeline line — hidden on mobile */}
          <div className="absolute top-[3.25rem] left-[12.5%] right-[12.5%] hidden h-0.5 bg-primary/20 md:block" />

          <div className="grid gap-8 md:grid-cols-4">
            {STEPS.map((s, i) => {
              const Icon = s.icon;
              const isAccent = i % 2 === 1;
              return (
                <div key={s.title} className="group relative flex flex-col">
                  {/* step node */}
                  <div className="relative z-10 mx-auto flex size-24 items-center justify-center border-2 border-primary bg-background transition-colors group-hover:border-yellow group-hover:bg-yellow md:mx-0 md:mb-8">
                    <Icon
                      className="size-8 text-primary transition-colors group-hover:text-accent-foreground"
                      strokeWidth={1.5}
                    />
                    <span className="tabular eyebrow absolute -top-3 -left-3 border-2 border-primary bg-yellow px-2 py-0.5 text-accent-foreground">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* card */}
                  <div
                    className={`relative flex-1 overflow-hidden border-2 border-primary p-6 pt-10 transition-all duration-300 tile-lift ${
                      isAccent
                        ? "bg-primary text-primary-foreground"
                        : "bg-background text-foreground"
                    }`}
                  >
                    <span
                      className={`tabular pointer-events-none absolute top-2 right-3 font-display text-6xl font-bold leading-none ${
                        isAccent ? "text-yellow/30" : "text-primary/10"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`eyebrow tabular ${isAccent ? "text-yellow" : "text-primary"}`}
                    >
                      {s.phase}
                    </span>
                    <h4 className="mt-3 mb-2 font-display text-xl font-bold">{s.title}</h4>
                    <p
                      className={`text-sm leading-relaxed ${
                        isAccent ? "text-primary-foreground/75" : "text-muted-foreground"
                      }`}
                    >
                      {s.body}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Why Aarkin: differentiators + hard numbers ---------- */
const WHY = [
  {
    icon: Target,
    title: "Founder-first thinking",
    body: "Every recommendation is benchmarked against your actual stage, sector and growth goals — not a generic checklist.",
  },
  {
    icon: Zap,
    title: "Faster than self-filing",
    body: "Thousands of applications filed. We know the exact formats, officer preferences and timelines — results roughly 3x faster.",
  },
  {
    icon: ShieldCheck,
    title: "Zero paperwork burden",
    body: "Send your KYC and business details once. We handle applications, follow-ups, revisions and confirmations.",
  },
  {
    icon: Map,
    title: "Deep ecosystem knowledge",
    body: "From DPIIT to DST, SIDBI to Make in India — we navigate every ministry, portal and process with precision.",
  },
];

export function WhyArkin() {
  return (
    <section id="why" className="ledger-grain border-b border-border">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="eyebrow inline-flex items-center gap-2 border-2 border-primary px-3 py-1.5 text-primary">
              Why Aarkin
            </span>
            <h2 className="mt-8 font-display text-4xl leading-[1.05] font-bold text-balance md:text-5xl">
              We don&rsquo;t just advise.{" "}
              <span className="slab-yellow -rotate-1 inline-block px-3 py-0.5">We execute.</span>
            </h2>
            <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">
              Most consultants hand you a report. We hand you outcomes — approved registrations,
              disbursed funds and filed returns.
            </p>
          </div>

          <div className="hairline-grid grid self-start border border-border sm:grid-cols-2 lg:col-span-7">
            {WHY.map(({ icon: Icon, title, body }, i) => (
              <div
                key={title}
                className={
                  i === 1 || i === 2
                    ? "bg-primary p-8 text-primary-foreground"
                    : "bg-background p-8"
                }
              >
                <Icon
                  className={`size-6 ${i === 1 || i === 2 ? "text-yellow" : "text-primary"}`}
                  strokeWidth={1.5}
                />
                <h4 className="mt-5 font-display text-lg font-bold">{title}</h4>
                <p
                  className={`mt-2 text-sm leading-relaxed ${i === 1 || i === 2 ? "text-primary-foreground/75" : "text-muted-foreground"}`}
                >
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="hairline-grid mt-8 grid grid-cols-2 border border-border md:grid-cols-4">
          {[
            ["2,000+", "Startups & MSMEs assisted"],
            ["98%", "Application success rate"],
            ["₹50Cr+", "Funding unlocked for clients"],
            ["7 days", "Average Startup India turnaround"],
          ].map(([v, l], i) => (
            <div
              key={l}
              className={i % 2 === 0 ? "bg-yellow p-7 text-accent-foreground" : "bg-background p-7"}
            >
              <div className="tabular font-display text-2xl font-bold">{v}</div>
              <div
                className={`eyebrow mt-2 ${i % 2 === 0 ? "opacity-70" : "text-muted-foreground"}`}
              >
                {l}
              </div>
            </div>
          ))}
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

/* ---------- Schemes: white paper band, yellow-tabbed cards ---------- */
export function Schemes() {
  return (
    <section id="schemes" className="paper-band paper-rule border-b-2 border-yellow">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="eyebrow inline-flex items-center gap-2 border-2 border-primary px-3 py-1.5 text-primary">
              Scheme library
            </span>
            <h2 className="mt-8 max-w-3xl font-display text-4xl leading-[1.05] font-bold text-balance md:text-5xl">
              The schemes founders miss{" "}
              <span className="slab-yellow -rotate-1 inline-block px-3 py-0.5">most often</span>
            </h2>
          </div>
          <span className="tabular eyebrow text-muted-foreground">
            200+ mapped &middot; 06 shown
          </span>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SCHEMES.map((s) => (
            <article
              key={s.name}
              className="tile-lift group flex flex-col border-2 border-foreground bg-card p-7"
            >
              <div className="flex items-start justify-between">
                <span className="tabular eyebrow bg-yellow px-2 py-1 text-accent-foreground">
                  {s.code}
                </span>
                <span className="eyebrow text-primary">{s.tag}</span>
              </div>
              <h3 className="mt-6 font-display text-xl font-bold">{s.name}</h3>
              <div className="tabular mt-2 font-display text-2xl font-bold text-primary">
                {s.amount}
              </div>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              <a
                href="#consult"
                className="eyebrow mt-6 inline-flex items-center gap-2 border-t-2 border-yellow pt-4 text-foreground"
              >
                Check eligibility <ArrowUpRight className="size-3.5" />
              </a>
            </article>
          ))}
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

/* ---------- Founder stories: proof cards from the original site ---------- */
export function FounderStories() {
  return (
    <section id="stories" className="ledger-grain border-b border-border">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid items-end gap-8 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <span className="eyebrow inline-flex items-center gap-2 border-2 border-primary px-3 py-1.5 text-primary">
              <Quote className="size-3" /> Founder stories
            </span>
            <h2 className="mt-8 font-display text-4xl leading-[1.05] font-bold text-balance md:text-5xl">
              Founders who{" "}
              <span className="slab-yellow -rotate-1 inline-block px-3 py-0.5">
                trusted the process
              </span>
            </h2>
          </div>
          <p className="border-l-2 border-yellow pl-6 leading-relaxed text-muted-foreground lg:col-span-4">
            Real founder experiences across grants, registrations, loans and investment readiness.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {FOUNDER_STORIES.map((story, index) => {
            const isDark = index === 0 || index === 5;
            const cardStyle = isDark
              ? "bg-primary text-primary-foreground"
              : index === 2
                ? "bg-yellow text-accent-foreground"
                : "bg-card";

            return (
              <figure
                key={story.name}
                className={
                  "tile-lift flex min-h-80 flex-col border-2 border-foreground p-7 " + cardStyle
                }
              >
                <div
                  className={
                    "flex items-center justify-between " + (isDark ? "text-yellow" : "text-primary")
                  }
                >
                  <Quote className="size-7" aria-hidden="true" />
                  <span className="flex gap-1" aria-label="5 out of 5 stars">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <Star key={starIndex} className="size-3.5 fill-current" aria-hidden="true" />
                    ))}
                  </span>
                </div>
                <blockquote className="mt-7 flex-1 font-display text-lg leading-relaxed font-medium">
                  “{story.quote}”
                </blockquote>
                <figcaption
                  className={
                    "mt-8 flex items-center gap-4 border-t pt-5 " +
                    (isDark ? "border-primary-foreground/25" : "border-foreground/20")
                  }
                >
                  <span
                    className={
                      "tabular grid size-11 shrink-0 place-items-center text-xs font-bold " +
                      (isDark
                        ? "bg-yellow text-accent-foreground"
                        : "bg-primary text-primary-foreground")
                    }
                    aria-hidden="true"
                  >
                    {story.initials}
                  </span>
                  <span>
                    <span className="block font-display font-bold">{story.name}</span>
                    <span
                      className={
                        "mt-0.5 block text-xs leading-relaxed " +
                        (isDark ? "text-primary-foreground/70" : "text-muted-foreground")
                      }
                    >
                      {story.role}
                    </span>
                  </span>
                </figcaption>
              </figure>
            );
          })}
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
export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="ledger-grain border-b border-border">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <span className="eyebrow inline-flex items-center gap-2 border-2 border-primary px-3 py-1.5 text-primary">
            Common questions
          </span>
          <h2 className="mt-8 font-display text-4xl leading-[1.05] font-bold text-balance">
            Everything founders ask us first
          </h2>
        </div>
        <div className="border-t border-border lg:col-span-8">
          {FAQS.map(([q, a], i) => (
            <div
              key={q}
              className={`border-b border-border transition-colors ${open === i ? "bg-card" : ""}`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-start gap-5 px-4 py-5 text-left"
                aria-expanded={open === i}
              >
                <span className="tabular eyebrow pt-1.5 text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="flex-1 font-display text-lg font-bold">{q}</span>
                {open === i ? (
                  <Minus className="mt-1 size-4 shrink-0 text-primary" />
                ) : (
                  <Plus className="mt-1 size-4 shrink-0 text-muted-foreground" />
                )}
              </button>
              {open === i && (
                <p className="animate-in fade-in slide-in-from-top-2 max-w-2xl px-4 pb-6 pl-14 leading-relaxed text-muted-foreground duration-300">
                  {a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Consultation() {
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    <section id="consult" className="ledger-grain">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-2">
        <div>
          <span className="eyebrow inline-flex items-center gap-2 border-2 border-primary px-3 py-1.5 text-primary">
            Free consultation
          </span>
          <h2 className="mt-4 font-display text-5xl leading-tight font-bold text-balance">
            Your business is sitting on untapped government capital.
          </h2>
          <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">
            Book a free 30-minute consultation. We'll audit your eligibility, identify your
            opportunities and give you a clear roadmap — no commitment required.
          </p>
          <div className="mt-10 space-y-6">
            {[
              ["01", "No-cost eligibility audit", "A 30-minute review of your entity and schemes."],
              ["02", "Pan-India expertise", "Founders served from Surat to Chennai."],
              ["03", "Response in 4 hours", "A dedicated manager replies the same business day."],
            ].map(([n, t, b]) => (
              <div key={n} className="flex gap-6">
                <div className="tabular grid size-11 shrink-0 place-items-center border-2 border-primary font-display text-sm text-primary">
                  {n}
                </div>
                <div>
                  <h5 className="font-display font-bold">{t}</h5>
                  <p className="text-sm text-muted-foreground">{b}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <form className="space-y-6 border border-border bg-card p-10" onSubmit={submitEnquiry}>
          <input
            type="text"
            name="company_website"
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />
          <h3 className="font-display text-2xl font-bold">Book your free consultation</h3>
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
          <Field label="Brief about your business (optional)">
            <textarea
              name="message"
              rows={3}
              className={inputClass}
              placeholder="What are you building?"
            />
          </Field>
          <button
            type="submit"
            disabled={isSubmitting}
            className="slab-yellow w-full py-4 text-xs font-bold tracking-widest uppercase transition-transform hover:translate-x-1 hover:translate-y-1 disabled:cursor-wait disabled:opacity-70"
          >
            {isSubmitting ? "Sending…" : "Get my free consultation"}
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
      className="animate-in fade-in slide-in-from-bottom-6 fixed right-3 bottom-3 left-3 z-[60] max-h-[calc(100vh-1.5rem)] overflow-y-auto border-2 border-primary bg-background shadow-2xl duration-300 sm:right-6 sm:bottom-6 sm:left-auto sm:w-[26rem]"
    >
      <div className="flex items-start justify-between gap-6 bg-primary p-5 text-primary-foreground">
        <div>
          <span className="eyebrow text-yellow">Free eligibility check</span>
          <h2 id="scroll-enquiry-title" className="mt-1 font-display text-2xl font-bold">
            Could your business qualify?
          </h2>
        </div>
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          className="grid size-9 shrink-0 place-items-center border border-primary-foreground/30 transition-colors hover:border-yellow hover:bg-yellow hover:text-accent-foreground"
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
          className="slab-yellow w-full py-3.5 text-xs font-bold tracking-widest uppercase transition-transform hover:translate-x-1 hover:translate-y-1 disabled:cursor-wait disabled:opacity-70"
        >
          {isSubmitting ? "Sending…" : "Check my eligibility"}
        </button>
        <p className="text-center text-xs text-muted-foreground">
          No spam. Your details are used only to reply.
        </p>
      </form>
    </aside>
  );
}

const inputClass =
  "w-full border-b border-input bg-transparent py-2 text-sm outline-none transition-colors focus:border-yellow";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block space-y-2">
      <span className="eyebrow text-muted-foreground">{label}</span>
      {children}
    </label>
  );
}
