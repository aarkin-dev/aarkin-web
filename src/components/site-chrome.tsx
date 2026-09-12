import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";

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

  return (
    <footer className="bg-[var(--canvas)] pt-20 text-white/70">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 border-b border-white/10 pb-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2">
              <SealMark className="h-9 w-auto brightness-0 invert" />
              <span className="font-display text-lg font-bold tracking-tight text-white">
                AARKIN
              </span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed">
              Helping Indian startups and MSMEs unlock the full power of government support —
              registrations, grants, funding, and beyond.
            </p>
            <p className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white/85">
              <span aria-hidden>🇮🇳</span> Proudly Serving Indian Builders
            </p>
            <div className="mt-6 flex gap-3">
              {["LinkedIn", "Instagram", "WhatsApp"].map((s) => (
                <a
                  key={s}
                  href="#"
                  aria-label={s}
                  className="grid size-9 place-items-center rounded-full bg-white/10 text-xs font-bold text-white transition-colors hover:bg-orange hover:text-foreground"
                >
                  {s[0]}
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-display text-sm font-bold text-white">Services</h4>
            <ul className="mt-5 space-y-3">
              {serviceLinks.map(([l, href]) => (
                <li key={l}>
                  <a href={href} className="text-sm transition-colors hover:text-orange">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-display text-sm font-bold text-white">Quick Links</h4>
            <ul className="mt-5 space-y-3">
              {quickLinks.map(([l, href]) => (
                <li key={l}>
                  <a href={href} className="text-sm transition-colors hover:text-orange">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-display text-sm font-bold text-white">Subscribe Newsletter</h4>
            <form
              className="mt-5 flex items-center rounded-full border border-white/15 bg-white/5 p-1.5"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="min-w-0 flex-1 bg-transparent px-4 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="grid size-9 shrink-0 place-items-center rounded-full bg-orange text-foreground"
              >
                →
              </button>
            </form>
            <p className="mt-3 text-xs text-white/40">
              Scheme &amp; funding updates only. No spam, ever.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3 py-8 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Aarkin Consulting. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-2 gap-y-1">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <span>&middot;</span>
            <a href="#" className="hover:text-white">
              Terms of Service
            </a>
            <span>&middot;</span>
            <a href="mailto:info@aarkin.co.in" className="hover:text-white">
              info@aarkin.co.in
            </a>
            <span>&middot;</span>
            <a href="tel:+918130557358" className="hover:text-white">
              +91 81305 57358
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
