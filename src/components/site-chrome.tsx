import { Link } from "@tanstack/react-router";
import { Menu } from "lucide-react";

export function SealMark({ className }: { className?: string }) {
  return (
    <img
      src="/brand/logo-placeholder.svg"
      alt="Aarkin placeholder logo"
      width="78"
      height="58"
      className={className}
      decoding="async"
    />
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-3">
          <SealMark className="h-8 w-auto" />
          <span className="font-display text-lg font-bold tracking-tight">AARKIN</span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {[
            ["Services", "#services"],
            ["How It Works", "#process"],
            ["Schemes", "#schemes"],
            ["FAQ", "#faq"],
          ].map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {label}
            </a>
          ))}
        </nav>

        <a
          href="#consult"
          className="hidden bg-yellow px-5 py-2.5 text-xs font-bold tracking-widest text-accent-foreground uppercase transition-colors hover:bg-primary hover:text-primary-foreground sm:inline-flex"
        >
          Free Consultation
        </a>
        <details className="mobile-menu relative md:hidden">
          <summary
            className="grid size-10 cursor-pointer list-none place-items-center border border-border"
            aria-label="Open navigation menu"
          >
            <Menu className="size-5" />
          </summary>
          <nav className="absolute right-0 top-12 w-64 border border-border bg-background p-3 shadow-xl">
            {[
              ["Services", "#services"],
              ["How It Works", "#process"],
              ["Schemes", "#schemes"],
              ["FAQ", "#faq"],
              ["Free Consultation", "#consult"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="block border-b border-border px-3 py-3 text-sm font-medium last:border-0"
              >
                {label}
              </a>
            ))}
          </nav>
        </details>
      </div>
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
    ["Why Aarkin", "#why"],
    ["FAQ", "#faq"],
  ];

  return (
    <footer className="border-t-2 border-yellow">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <SealMark className="h-8 w-auto" />
              <span className="font-display text-lg font-bold tracking-tight">AARKIN.</span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Helping Indian startups and MSMEs unlock the full power of government support —
              registrations, grants, funding, and beyond.
            </p>
            <p className="eyebrow mt-6 inline-flex items-center gap-2 border-2 border-primary px-3 py-1.5 text-primary">
              <span aria-hidden>🇮🇳</span> Proudly serving Indian builders
            </p>
            <div>
              <a
                href="#consult"
                className="slab-yellow mt-7 inline-block px-5 py-3 text-xs font-bold tracking-widest uppercase"
              >
                Free consultation
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h4 className="eyebrow text-primary">Services</h4>
            <ul className="mt-5 space-y-3">
              {serviceLinks.map(([l, href]) => (
                <li key={l}>
                  <a
                    href={href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="eyebrow text-primary">Quick Links</h4>
            <ul className="mt-5 space-y-3">
              {quickLinks.map(([l, href]) => (
                <li key={l}>
                  <a
                    href={href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="eyebrow text-primary">Contact</h4>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="mailto:aarkin2024@gmail.com" className="hover:text-primary">
                  aarkin2024@gmail.com
                </a>
              </li>
              <li>Mon–Sat, 10am–7pm IST</li>
              <li>Pan-India, remote-first</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-border pt-6">
          <p className="eyebrow text-muted-foreground">
            &copy; {new Date().getFullYear()} Aarkin Advisory &middot; Startup India &amp; MSME
            Consultants &middot; India
          </p>
        </div>
      </div>
    </footer>
  );
}
