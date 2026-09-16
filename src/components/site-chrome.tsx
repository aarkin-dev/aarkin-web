import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  Asterisk,
  BadgeCheck,
  Calendar,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
  Sparkles,
  X,
} from "lucide-react";
import { toast } from "sonner";

/* Lucide has no WhatsApp mark (it ships generic icons, not brand
   logos) -- inlined the standard WhatsApp glyph (simple-icons, CC0)
   at the same 24x24 box/currentColor convention as the lucide icons
   it sits next to, so it drops in without a visual mismatch. */
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12.05 0C5.495 0 .16 5.335.16 11.89c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.89-11.89 0-3.176-1.237-6.163-3.481-8.407A11.82 11.82 0 0 0 12.05 0zm0 21.785h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.981.998-3.648-.235-.374a9.86 9.86 0 0 1-1.511-5.263c0-5.454 4.437-9.891 9.891-9.891a9.82 9.82 0 0 1 6.99 2.898 9.82 9.82 0 0 1 2.898 6.994c0 5.454-4.437 9.891-9.891 9.891z" />
    </svg>
  );
}

/* Three brand-mark variants, all extracted straight from the master
   file (public/brand/aarkin-master.svg, the untouched original) --
   see public/brand/README.md for how each was derived and why. Pick
   by what a call site needs: "icon" when the wordmark is set
   separately (or there's no room for it), "lockup" for the normal
   icon+"AARKIN" combination (the default -- used in the header and
   footer), "lockup-full" when the "POWERING YOUR GROWTH" tagline
   should show too. Every variant is real vector paths from the
   original artwork, not a look-alike web font, so it's pixel-accurate
   regardless of what typeface the source was actually set in. */
const SEAL_SRC = {
  icon: "/brand/aarkin-icon.svg",
  lockup: "/brand/aarkin-lockup.svg",
  "lockup-full": "/brand/aarkin-lockup-full.svg",
} as const;

export function SealMark({
  variant = "lockup",
  className,
}: {
  variant?: keyof typeof SEAL_SRC;
  className?: string;
}) {
  return <img src={SEAL_SRC[variant]} alt="Aarkin" className={className} decoding="async" />;
}

/* ---------- Preloader: shown once, on first load, before the site is
   interactive. The mark's icon literally is a rocket -- so instead of a
   generic spinner, the rocket launches: it lifts off from a pulsing
   engine-glow, accelerates up out of frame, and the loop resets for
   another launch, on repeat, while the page's own resources finish
   loading (the "AARKIN" wordmark stays put underneath, big and still,
   so it isn't flying off with it). Overlay fades out once the page is
   actually ready (window "load"), not on a fixed timer alone. A short
   minimum hold (900ms) keeps it from flashing on a fast cache hit, and
   a hard cap (4s) keeps a slow asset from trapping the user behind it
   indefinitely. Body scroll is locked while it's up so there's nothing
   to scroll to underneath. */
export function Preloader() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const MIN_HOLD_MS = 900;
    const FADE_MS = 500;
    const HARD_CAP_MS = 4000;
    const start = Date.now();
    let settled = false;

    function settle() {
      if (settled) return;
      settled = true;
      const remaining = Math.max(MIN_HOLD_MS - (Date.now() - start), 0);
      window.setTimeout(() => {
        setFading(true);
        window.setTimeout(() => setVisible(false), FADE_MS);
      }, remaining);
    }

    if (document.readyState === "complete") {
      settle();
    } else {
      window.addEventListener("load", settle);
    }
    const cap = window.setTimeout(settle, HARD_CAP_MS);

    return () => {
      window.removeEventListener("load", settle);
      window.clearTimeout(cap);
    };
  }, []);

  useEffect(() => {
    if (!visible) return;
    const prevOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = prevOverflow;
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      aria-hidden
      className={`dotted-bg fixed inset-0 z-[100] grid place-items-center transition-opacity duration-500 ${
        fading ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center">
        <div className="relative flex h-56 w-40 items-end justify-center overflow-hidden sm:h-72 sm:w-52">
          <SealMark variant="icon" className="preloader-rocket h-28 w-auto sm:h-36" />
        </div>
        <p className="-mt-2 font-display text-3xl font-extrabold tracking-tight text-[var(--orange-dark)] sm:text-4xl">
          AARKIN
        </p>
      </div>
    </div>
  );
}

// Every real content section on the page gets a nav entry, in the same
// order they actually appear in <main> (see routes/index.tsx) -- so the
// nav reads top-to-bottom exactly like the page scrolls. The closing
// Consultation form is reachable via the header's own "Book Free
// Consultation" button instead of a redundant nav item, and ContactCta
// is a closing CTA block rather than a standalone section, so it's
// left out. Careers is a separate page, not a homepage section, so it
// trails the list rather than slotting into scroll order.
const NAV_LINKS: [string, string][] = [
  ["Services", "/#services"],
  ["About", "/#about"],
  ["How It Works", "/#process"],
  ["Why Arkin", "/#why"],
  ["Funding", "/#opportunity"],
  ["Certifications", "/#certifications"],
  ["Results", "/#stories"],
  ["FAQ", "/#faq"],
  ["Careers", "/careers"],
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
          <SealMark className="h-16 w-auto" />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {NAV_LINKS.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="nav-link text-sm font-bold text-foreground/70 transition-colors hover:text-foreground"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="/#consult"
            className="hidden items-center gap-2 rounded-full bg-[var(--orange-dark)] px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-orange hover:text-foreground sm:inline-flex"
          >
            Book Free Consultation
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            className="grid size-10 cursor-pointer place-items-center rounded-full border border-foreground/15 bg-foreground/5 text-foreground lg:hidden"
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <nav className="max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-border bg-background px-6 py-4 shadow-[0_0_10px_3px_rgba(0,0,0,0.05)] lg:hidden">
          {NAV_LINKS.map(([label, href]) => (
            <a
              key={href}
              href={href}
              onClick={() => setMobileOpen(false)}
              className="block border-b border-border py-3 text-sm font-bold text-foreground/80 last:border-0"
            >
              {label}
            </a>
          ))}
          <a
            href="/#consult"
            onClick={() => setMobileOpen(false)}
            className="mt-4 block rounded-full bg-[var(--orange-dark)] px-5 py-3 text-center text-sm font-bold text-white transition-colors hover:bg-orange hover:text-foreground"
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
  const [isSubscribing, setIsSubscribing] = useState(false);

  // Previously just called preventDefault() and did nothing else -- a
  // real, visible signup form that silently discarded whatever a
  // visitor typed into it. Wired to the same formsubmit.co endpoint
  // the two consultation forms already use for real.
  async function submitNewsletter(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const email = new FormData(form).get("email");

    setIsSubscribing(true);
    try {
      const response = await fetch("https://formsubmit.co/ajax/aarkin2024@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          email,
          _subject: "New Aarkin newsletter signup",
          _template: "table",
        }),
      });

      if (!response.ok) throw new Error("Unable to subscribe");
      form.reset();
      toast.success("You're subscribed — scheme and funding updates only.");
    } catch {
      toast.error("We couldn't subscribe that email. Please try again.");
    } finally {
      setIsSubscribing(false);
    }
  }

  const serviceLinks: [string, string][] = [
    ["Startup India Registration", "/#services"],
    ["MSME / Udyam Registration", "/#services"],
    ["Government Grants", "/#services"],
    ["Business Loans", "/#services"],
    ["Investment Readiness", "/#services"],
    ["Compliance Support", "/#services"],
  ];
  const quickLinks: [string, string][] = [
    ["About Aarkin", "/#about"],
    ["How It Works", "/#process"],
    ["Government Schemes", "/#opportunity"],
    ["Our Impact", "/#impact"],
    ["Success Stories", "/#stories"],
    ["FAQ", "/#faq"],
    ["Careers", "/careers"],
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
    <footer className="relative overflow-hidden bg-[var(--mint)] pt-20 text-foreground/70">
      <Sparkles
        aria-hidden
        className="animate-[footer-bob_2s_ease-in-out_infinite_alternate] absolute top-16 right-[8%] size-6 text-[var(--green-text)]/40"
      />
      <Asterisk
        aria-hidden
        className="animate-[footer-pulse_2s_ease-in-out_infinite_alternate] absolute top-[38%] left-[4%] size-10 text-foreground/15"
      />
      <svg
        aria-hidden
        viewBox="0 0 40 40"
        className="animate-[footer-bob_2s_ease-in-out_infinite_alternate] absolute right-[18%] bottom-24 size-8 text-[var(--green-text)]/30"
        style={{ animationDelay: "0.6s" }}
      >
        <circle cx="20" cy="20" r="18" fill="none" stroke="currentColor" strokeWidth="1.5" />
      </svg>
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SealMark className="h-12 w-auto" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed">
              Helping Indian startups and MSMEs unlock the full power of government support —
              registrations, grants, funding, and beyond.
            </p>
            <p className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-foreground/85">
              <span aria-hidden>🇮🇳</span> Proudly Serving Indian Builders
            </p>
            <div className="mt-6 flex gap-3">
              {[
                {
                  label: "LinkedIn",
                  href: "https://www.linkedin.com/in/aarkin-biz-solutions-private-limited-33959b405/",
                  Icon: Linkedin,
                },
                // Trimmed the "igsi=..." tracking token off the URL the
                // client sent -- that's a short-lived Instagram
                // share-session id, not part of the actual profile link.
                {
                  label: "Instagram",
                  href: "https://www.instagram.com/aarkin.biz",
                  Icon: Instagram,
                },
                { label: "WhatsApp", href: "https://wa.me/918130557358", Icon: WhatsAppIcon },
              ].map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="grid size-9 place-items-center rounded-full bg-foreground/10 text-foreground transition-colors hover:bg-orange"
                >
                  <Icon className="size-4" />
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
              onSubmit={submitNewsletter}
            >
              <input
                type="email"
                name="email"
                required
                placeholder="Enter your email"
                className="min-w-0 flex-1 bg-transparent px-4 py-2 text-sm text-foreground placeholder:text-foreground/40 focus:outline-none"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                disabled={isSubscribing}
                className="grid size-9 shrink-0 place-items-center rounded-full bg-orange text-foreground transition-colors hover:bg-foreground hover:text-white disabled:cursor-wait disabled:opacity-70"
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

        <div className="mt-10 border-t border-foreground/10 py-6">
          <p className="text-sm font-semibold text-foreground/70">
            Aarkin Biz Solutions Private Limited{" "}
            <span className="font-normal text-foreground/45">(trading as Aarkin)</span>
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-foreground/15 bg-foreground/5 px-3 py-1.5 text-xs font-semibold text-foreground/70">
              <BadgeCheck className="size-3.5 text-[var(--green-text)]" />
              CIN: U70200GJ2025PTC158343
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-foreground/15 bg-foreground/5 px-3 py-1.5 text-xs font-semibold text-foreground/70">
              <BadgeCheck className="size-3.5 text-[var(--green-text)]" />
              GSTIN: 24ABCCA0649M1Z0
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-foreground/15 bg-foreground/5 px-3 py-1.5 text-xs font-semibold text-foreground/70">
              <Calendar className="size-3.5 text-[var(--green-text)]" />
              Incorporated 28 Jan 2025
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-foreground/10 py-8 text-xs text-foreground/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} Aarkin Biz Solutions Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-x-2 gap-y-1">
            <a href="/privacy" className="hover:text-foreground">
              Privacy Policy
            </a>
            <span>&middot;</span>
            <a href="/terms" className="hover:text-foreground">
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
