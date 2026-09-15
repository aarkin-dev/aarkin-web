import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowUpRight,
  Briefcase,
  CheckCircle2,
  GraduationCap,
  Mail,
  MapPin,
  Rocket,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
// Same real team photo used in the homepage Hero -- appropriate reuse
// for a "join the team" context, not a new stock image. Unsplash
// License (free, no attribution required):
// https://unsplash.com/photos/six-colleagues-collaborating-around-a-conference-table-with-laptops-RdEFWm0N84o
import heroTeamVisual from "@/assets/hero-visual-team.jpg";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers at Aarkin — Join Our Team" },
      {
        name: "description",
        content:
          "We're hiring for Sales at Aarkin -- open to both freshers and experienced candidates. See the role and apply.",
      },
      { property: "og:title", content: "Careers at Aarkin — Join Our Team" },
      {
        property: "og:description",
        content:
          "We're hiring for Sales at Aarkin -- open to both freshers and experienced candidates.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.aarkin.co.in/careers" },
    ],
    links: [{ rel: "canonical", href: "https://www.aarkin.co.in/careers" }],
  }),
  component: Careers,
});

const WHY_JOIN = [
  {
    icon: Target,
    title: "Real Impact",
    body: "Every conversation you have helps a real founder unlock funding or a registration they didn't know they qualified for.",
  },
  {
    icon: Rocket,
    title: "Small, Fast-Moving Team",
    body: "No layers of approval. Your work and your ideas reach clients and leadership directly.",
  },
  {
    icon: Sparkles,
    title: "Learn the Full Picture",
    body: "Exposure to registrations, government schemes, funding and compliance — not just one narrow function.",
  },
];

const RESPONSIBILITIES = [
  "Identify and reach out to potential clients — startups and MSMEs — who could benefit from Aarkin's services.",
  "Clearly explain government schemes, registrations and funding options to prospective clients over calls and meetings.",
  "Build and maintain relationships with leads, following up consistently until a decision is made.",
  "Work with the founder/advisory team to hand off qualified clients smoothly.",
  "Meet monthly targets for consultations booked and enquiries converted.",
];

const FRESHER_REQUIREMENTS = [
  "Any bachelor's degree (commerce, business or finance background is a plus, not required).",
  "Strong spoken and written communication in English and Hindi/Gujarati.",
  "Genuinely comfortable picking up the phone and talking to strangers all day.",
  "Willingness to learn government schemes and financial products from scratch — we'll train you.",
];

const EXPERIENCED_REQUIREMENTS = [
  "1+ years in sales, business development or client-facing roles — B2B, fintech or startup-ecosystem experience is a plus.",
  "A track record of hitting outreach or conversion targets.",
  "Comfortable owning the full pipeline — from first call to closed client.",
];

function Careers() {
  const [applyOpen, setApplyOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        {/* ---------- Hero ---------- */}
        <section className="dotted-bg relative overflow-hidden pt-44 pb-20">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
            <div>
              <p className="eyebrow text-[var(--green-text)]">Careers at Aarkin</p>
              <h1 className="mt-3 font-display text-4xl leading-[1.1] font-bold text-balance text-foreground md:text-5xl">
                Help Founders Unlock Government Support. Build Your Career Doing It.
              </h1>
              <p className="mt-5 max-w-md leading-relaxed text-muted-foreground">
                Aarkin sits at the intersection of policy expertise and startup understanding —
                translating India&rsquo;s government ecosystem into clear, actionable growth for
                real clients. We&rsquo;re a small team, and every hire matters.
              </p>
              <a
                href="#open-roles"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--orange-dark)] px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-orange hover:text-foreground"
              >
                See Open Roles <ArrowUpRight className="size-4" />
              </a>
            </div>

            <div className="relative mx-auto aspect-[4/3] w-full max-w-md overflow-hidden rounded-[2rem]">
              <img
                src={heroTeamVisual}
                alt="A team collaborating together in the Aarkin office"
                width={1200}
                height={900}
                loading="eager"
                decoding="async"
                className="size-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* ---------- Why join ---------- */}
        <section className="bg-[#FFF7EE] py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-xl">
              <p className="text-lg font-semibold text-foreground">Why Aarkin</p>
              <h2 className="mt-2 font-display text-3xl leading-[1.15] font-bold text-balance md:text-4xl">
                A Small Team Doing Work That Actually Matters
              </h2>
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {WHY_JOIN.map(({ icon: Icon, title, body }) => (
                <div key={title} className="rounded-3xl bg-background p-6">
                  <span className="grid size-12 place-items-center rounded-full bg-orange text-foreground">
                    <Icon className="size-5" strokeWidth={1.5} />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold text-foreground">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- Open roles ---------- */}
        <section id="open-roles" className="bg-[var(--mint)] py-20">
          <div className="mx-auto max-w-4xl px-6">
            <div className="text-center">
              <p className="text-lg font-semibold text-foreground">Open Roles</p>
              <h2 className="mt-2 font-display text-3xl leading-[1.15] font-bold text-balance md:text-4xl">
                Currently Hiring
              </h2>
            </div>

            <article className="mt-10 overflow-hidden rounded-3xl bg-background shadow-sm">
              <div className="flex flex-wrap items-start justify-between gap-4 border-b border-foreground/10 p-8">
                <div>
                  <span className="eyebrow text-[var(--green-text)]">Sales</span>
                  <h3 className="mt-1 font-display text-2xl font-bold text-foreground">
                    Sales Executive
                  </h3>
                  <div className="mt-3 flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <Briefcase className="size-4" /> Full-time
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="size-4" /> Ahmedabad, Gujarat
                    </span>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-orange/20 px-4 py-2 text-xs font-bold text-[var(--orange-dark)] uppercase">
                  <Users className="size-3.5" /> Freshers & Experienced Welcome
                </span>
              </div>

              <div className="grid gap-8 p-8 sm:grid-cols-2">
                <div>
                  <h4 className="font-display text-base font-bold text-foreground">
                    What you&rsquo;ll do
                  </h4>
                  <ul className="mt-3 space-y-2">
                    {RESPONSIBILITIES.map((r) => (
                      <li
                        key={r}
                        className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground"
                      >
                        <CheckCircle2
                          className="mt-0.5 size-4 shrink-0 text-[var(--green-text)]"
                          strokeWidth={2}
                        />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="flex items-center gap-2 font-display text-base font-bold text-foreground">
                      <GraduationCap className="size-4 text-[var(--green-text)]" /> If you&rsquo;re
                      a fresher
                    </h4>
                    <ul className="mt-3 space-y-2">
                      {FRESHER_REQUIREMENTS.map((r) => (
                        <li
                          key={r}
                          className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground"
                        >
                          <CheckCircle2
                            className="mt-0.5 size-4 shrink-0 text-[var(--green-text)]"
                            strokeWidth={2}
                          />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="flex items-center gap-2 font-display text-base font-bold text-foreground">
                      <Briefcase className="size-4 text-[var(--green-text)]" /> If you&rsquo;re
                      experienced
                    </h4>
                    <ul className="mt-3 space-y-2">
                      {EXPERIENCED_REQUIREMENTS.map((r) => (
                        <li
                          key={r}
                          className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground"
                        >
                          <CheckCircle2
                            className="mt-0.5 size-4 shrink-0 text-[var(--green-text)]"
                            strokeWidth={2}
                          />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 border-t border-foreground/10 bg-[var(--orange-light)]/40 p-8">
                <p className="text-sm text-muted-foreground">
                  Email your resume with the subject line &ldquo;Application — Sales
                  Executive&rdquo;.
                </p>
                <button
                  type="button"
                  onClick={() => setApplyOpen(true)}
                  className="inline-flex items-center gap-2 rounded-full bg-[var(--orange-dark)] px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-orange hover:text-foreground"
                >
                  Apply Now <ArrowUpRight className="size-4" />
                </button>
              </div>
            </article>

            <p className="mt-10 text-center text-sm text-muted-foreground">
              Don&rsquo;t see a role that fits? We&rsquo;re always glad to hear from driven people —{" "}
              <button
                type="button"
                onClick={() => setApplyOpen(true)}
                className="font-semibold text-[var(--green-text)] underline underline-offset-2"
              >
                write to us anyway
              </button>
              .
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />

      {applyOpen && <ApplyModal onClose={() => setApplyOpen(false)} />}
    </div>
  );
}

function ApplyModal({ onClose }: { onClose: () => void }) {
  return (
    <div
      role="presentation"
      onClick={onClose}
      className="animate-in fade-in fixed inset-0 z-[70] flex items-center justify-center bg-foreground/60 p-4 duration-200"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="apply-modal-title"
        onClick={(event) => event.stopPropagation()}
        className="animate-in fade-in zoom-in-95 w-full max-w-md overflow-hidden rounded-2xl bg-background shadow-2xl duration-200"
      >
        <div className="bg-[var(--orange-dark)] p-6 text-white">
          <span className="eyebrow text-orange">Apply</span>
          <h2 id="apply-modal-title" className="mt-1 font-display text-xl font-bold">
            Send Us Your Application
          </h2>
        </div>
        <div className="space-y-4 p-6">
          <p className="text-sm leading-relaxed text-muted-foreground">
            Email your resume, a line or two about yourself, and the role you&rsquo;re applying for
            to:
          </p>
          <a
            href="mailto:hr@aarkin.co.in?subject=Application%20%E2%80%94%20Sales%20Executive"
            className="flex items-center gap-3 rounded-xl bg-[var(--mint)] p-4 text-sm font-bold text-[var(--orange-dark)]"
          >
            <Mail className="size-5 shrink-0" />
            hr@aarkin.co.in
          </a>
          <p className="text-xs text-muted-foreground">
            We reply to every genuine application — usually within a few business days.
          </p>
          <button
            type="button"
            onClick={onClose}
            className="w-full rounded-full border border-foreground/15 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-foreground/5"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
