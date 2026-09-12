import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Menu, Phone, X } from "lucide-react";

export function SealMark({ className }: { className?: string }) {
  return (
    <img
      src="/brand/aarkin-logo.svg"
      alt="Aarkin"
      width="760"
      height="560"
      className={className}
      decoding="async"
    />
  );
}

const NAV_LINKS: [string, string][] = [
  ["Services", "#services"],
  ["How It Works", "#process"],
  ["Schemes", "#schemes"],
  ["Results", "#stories"],
  ["FAQ", "#faq"],
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    // Threshold and behaviour measured directly off the reference
    // (themazine.com/mr/dobee): its header sits transparent/blended with
    // the page until scrollY hits exactly 200px, at which point a wrapper
    // gains position:fixed, a solid white background and a soft shadow --
    // text colour never changes, only the background does.
    const onScroll = () => setScrolled(window.scrollY >= 200);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`site-header fixed top-0 left-0 z-50 w-full text-foreground transition-[background-color,box-shadow] duration-300 ${
        scrolled ? "bg-background shadow-[0_0_10px_3px_rgba(0,0,0,0.05)]" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link to="/" aria-label="Aarkin home" className="flex items-center">
          <SealMark className="h-10 w-auto" />
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {NAV_LINKS.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="nav-link text-sm font-semibold text-foreground/70 transition-colors hover:text-foreground"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#consult"
            className="hidden items-center gap-2 rounded-full border border-foreground/15 bg-foreground/5 px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-foreground/10 sm:inline-flex"
          >
            Book Free Consultation
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            className="grid size-10 cursor-pointer place-items-center rounded-full border border-foreground/15 bg-foreground/5 text-foreground md:hidden"
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <nav className="border-t border-border bg-background px-6 py-4 shadow-[0_0_10px_3px_rgba(0,0,0,0.05)] md:hidden">
          {NAV_LINKS.map(([label, href]) => (
            <a
              key={href}
              href={href}
              onClick={() => setMobileOpen(false)}
              className="block border-b border-border py-3 text-sm font-semibold text-foreground/80 last:border-0"
            >
              {label}
            </a>
          ))}
          <a
            href="#consult"
            onClick={() => setMobileOpen(false)}
            className="mt-4 block rounded-full bg-orange px-5 py-3 text-center text-sm font-semibold text-foreground"
          >
            Book Free Consultation
          </a>
        </nav>
      ) : null}
    </header>
  );
}

/* ---------- Footer: themazine.com/mr/dobee/index-3.html's
   footer__area__two, ditto -- light mint-family background (their
   rgb(239,249,248); ours is the same pale wash already used for
   Founder Stories/Process, #FFF7EE, so the two-tone family stays
   consistent instead of introducing a 3rd near-identical pale tint),
   logo+social left, link columns, a white newsletter card with a lime
   send button. Green replaces their lime exactly, per the sitewide
   colour change.

   Extended beyond the reference with a real registered-business
   section the reference doesn't have at all -- Registered Office,
   Branch Office, and legal/GST identifiers -- content pulled directly
   from aarkin.co.in's own "Our Legal & Financial Details" section, not
   invented. This is real compliance information the user explicitly
   asked to add here, so it's additive to the reference's layout
   rather than a literal copy of it. ---------- */
export function SiteFooter() {
  const serviceLinks: [string, string][] = [
    ["Startup India Registration", "#services"],
    ["MSME / Udyam Registration", "#services"],
    ["Government Grants", "#services"],
    ["Business Loans", "#services"],
    ["Investment Readiness", "#services"],
    ["Compliance Support", "#services"],
  ];
  const quickLinks: [string, string][] = [
    ["About Aarkin", "#about"],
    ["How It Works", "#process"],
    ["Government Schemes", "#schemes"],
    ["Our Impact", "#impact"],
    ["Success Stories", "#stories"],
    ["FAQ", "#faq"],
  ];
  const offices: { label: string; city: string; address: string }[] = [
    {
      label: "Registered Office",
      city: "Ahmedabad",
      address: "55 World Business House, Nr. Parimal Garden, Ambawadi, Ahmedabad – 380006, Gujarat",
    },
    {
      label: "Branch Office",
      city: "Gurugram",
      address:
        "270, Udyog Vihar II Rd, Phase II, Udyog Vihar III, Sector 20, Gurugram, Haryana 122016",
    },
  ];

  return (
    <footer className="bg-[#FFF7EE] pt-20 text-foreground/70">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2">
              <SealMark className="h-9 w-auto" />
              <span className="font-display text-lg font-bold tracking-tight text-foreground">
                AARKIN
              </span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed">
              Helping Indian startups and MSMEs unlock the full power of government support —
              registrations, grants, funding, and beyond.
            </p>
            <p className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-foreground/85">
              <span aria-hidden>🇮🇳</span> Proudly Serving Indian Builders
            </p>
            <div className="mt-6 flex gap-3">
              {["LinkedIn", "Instagram", "WhatsApp"].map((s) => (
                <a
                  key={s}
                  href="#"
                  aria-label={s}
                  className="grid size-9 place-items-center rounded-full bg-foreground/10 text-xs font-bold text-foreground transition-colors hover:bg-orange"
                >
                  {s[0]}
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-display text-sm font-bold text-foreground">Services</h4>
            <ul className="mt-5 space-y-3">
              {serviceLinks.map(([l, href]) => (
                <li key={l}>
                  <a
                    href={href}
                    className="text-sm transition-colors hover:text-[var(--green-text)]"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-display text-sm font-bold text-foreground">Quick Links</h4>
            <ul className="mt-5 space-y-3">
              {quickLinks.map(([l, href]) => (
                <li key={l}>
                  <a
                    href={href}
                    className="text-sm transition-colors hover:text-[var(--green-text)]"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h4 className="font-display text-sm font-bold text-foreground">Subscribe Newsletter</h4>
            <form
              className="mt-5 flex items-center rounded-full border border-foreground/15 bg-white p-1.5"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="min-w-0 flex-1 bg-transparent px-4 py-2 text-sm text-foreground placeholder:text-foreground/40 focus:outline-none"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="grid size-9 shrink-0 place-items-center rounded-full bg-orange text-foreground"
              >
                →
              </button>
            </form>
            <p className="mt-3 text-xs text-foreground/40">
              Scheme &amp; funding updates only. No spam, ever.
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-8 border-t border-foreground/10 pt-12 sm:grid-cols-2 lg:grid-cols-4">
          {offices.map(({ label, city, address }) => (
            <div key={label} className="flex gap-3">
              <MapPin
                className="mt-0.5 size-4 shrink-0 text-[var(--green-text)]"
                strokeWidth={1.75}
              />
              <div>
                <h5 className="text-sm font-bold text-foreground">
                  {label} <span className="font-normal text-foreground/50">— {city}</span>
                </h5>
                <p className="mt-1 text-sm leading-relaxed">{address}</p>
              </div>
            </div>
          ))}
          <div className="flex gap-3">
            <Phone className="mt-0.5 size-4 shrink-0 text-[var(--green-text)]" strokeWidth={1.75} />
            <div>
              <h5 className="text-sm font-bold text-foreground">Call Us</h5>
              <a
                href="tel:+918130557358"
                className="mt-1 block text-sm hover:text-[var(--green-text)]"
              >
                +91 81305 57358
              </a>
            </div>
          </div>
          <div className="flex gap-3">
            <Mail className="mt-0.5 size-4 shrink-0 text-[var(--green-text)]" strokeWidth={1.75} />
            <div>
              <h5 className="text-sm font-bold text-foreground">Email Us</h5>
              <a
                href="mailto:info@aarkin.co.in"
                className="mt-1 block text-sm hover:text-[var(--green-text)]"
              >
                info@aarkin.co.in
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-foreground/10 py-6 text-xs text-foreground/45">
          <p>
            <span className="font-semibold text-foreground/60">
              Aarkin Biz Solutions Private Limited
            </span>
            {" · "}CIN: U70200GJ2025PTC158343{" · "}GSTIN: 24ABCCA0649M1Z0
          </p>
        </div>

        <div className="flex flex-col gap-3 border-t border-foreground/10 py-8 text-xs text-foreground/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} Aarkin Biz Solutions Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-x-2 gap-y-1">
            <a href="#" className="hover:text-foreground">
              Privacy Policy
            </a>
            <span>&middot;</span>
            <a href="#" className="hover:text-foreground">
              Terms of Service
            </a>
            <span>&middot;</span>
            <a href="mailto:info@aarkin.co.in" className="hover:text-foreground">
              info@aarkin.co.in
            </a>
            <span>&middot;</span>
            <a href="tel:+918130557358" className="hover:text-foreground">
              +91 81305 57358
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
