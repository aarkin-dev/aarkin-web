import { createFileRoute } from "@tanstack/react-router";
import { Mail, Sparkles } from "lucide-react";
import { SealMark } from "@/components/site-chrome";

/* ============================================================================
 * ORIGINAL SITE — commented out while aarkin.co.in is under construction.
 * To restore: delete the "UNDER CONSTRUCTION" block below, uncomment
 * everything in this block, and remove the imports that are only used by
 * the construction page (Mail, Sparkles, SealMark) if they're not needed.
 * ============================================================================

import { useEffect, useLayoutEffect } from "react";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import {
  Hero,
  Credentials,
  About,
  Services,
  Process,
  WhyArkin,
  Schemes,
  FounderStories,
  Faq,
  Consultation,
  ScrollEnquiryPopup,
} from "@/components/sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aarkin — Government Grants, DPIIT & MSME Advisory for Indian Founders" },
      {
        name: "description",
        content:
          "Aarkin helps Indian startups and MSMEs navigate government grants, DPIIT recognition, Udyam registration, CGTMSE loans and investment readiness.",
      },
      {
        property: "og:title",
        content: "Aarkin — Government Grants, DPIIT & MSME Advisory for Indian Founders",
      },
      {
        property: "og:description",
        content:
          "Unlock government schemes, grants and registrations without the paperwork. Free 30-minute eligibility audit.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.aarkin.co.in/" },
      { property: "og:image", content: "https://www.aarkin.co.in/og.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Aarkin — Government support, made actionable" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://www.aarkin.co.in/og.png" },
    ],
  }),
  component: Index,
});

function Index() {
  useLayoutEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const resetScroll = () => window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    resetScroll();
    const frame = window.requestAnimationFrame(resetScroll);
    window.addEventListener("pageshow", resetScroll);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("pageshow", resetScroll);
    };
  }, []);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>("main > section"));
    document.documentElement.classList.add("motion-ready");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8%", threshold: 0.08 },
    );

    sections.forEach((section) => {
      section.classList.add("reveal-section");

      const revealItems = Array.from(
        section.querySelectorAll<HTMLElement>(
          "h1, h2, img, form, .tile-lift, .hairline-grid, a.group",
        ),
      );

      revealItems.forEach((item, index) => {
        item.classList.add("reveal-item");
        item.style.setProperty("--reveal-delay", Math.min(index, 7) * 75 + "ms");
        if (item.tagName === "IMG") item.classList.add("reveal-image");
      });

      observer.observe(section);
    });

    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("motion-ready");
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <Credentials />
        <About />
        <Services />
        <Process />
        <WhyArkin />
        <Schemes />
        <FounderStories />
        <Faq />
        <Consultation />
      </main>
      <SiteFooter />
      <ScrollEnquiryPopup />
    </div>
  );
}

 * ============================================================================
 * END ORIGINAL SITE
 * ============================================================================ */

/* ============================================================================
 * UNDER CONSTRUCTION — live placeholder for aarkin.co.in.
 * Delete this whole block when restoring the original site above.
 * ============================================================================ */

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aarkin — Something New Is On The Way" },
      {
        name: "description",
        content:
          "Aarkin is building a new experience. We'll be back shortly — reach us at operations@aarkin.co.in in the meantime.",
      },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: "Aarkin — Something New Is On The Way" },
      {
        property: "og:description",
        content: "We're building something new. Check back soon.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="ledger-grain flex min-h-screen flex-col">
      <main className="flex flex-1 flex-col items-center justify-center px-6 py-24 text-center">
        <SealMark className="h-16 w-auto md:h-20" />

        <span className="eyebrow mt-10 inline-flex items-center gap-2 border-2 border-primary px-3 py-1.5 text-primary">
          <Sparkles className="size-3" /> Under construction
        </span>

        <h1 className="mt-7 max-w-3xl font-display text-4xl leading-[1.05] font-bold text-balance md:text-6xl">
          Something new is on the way{" "}
          <span className="slab-yellow mr-1 -rotate-1 inline-block px-3 py-0.5">from Aarkin</span>
        </h1>

        <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">
          We're rebuilding our site to serve founders better. We'll be back online shortly — for
          anything urgent, reach out directly.
        </p>

        <a
          href="mailto:operations@aarkin.co.in"
          className="slab-yellow mt-10 inline-flex items-center gap-2 px-6 py-4 text-xs font-bold tracking-widest uppercase transition-transform hover:translate-x-1 hover:translate-y-1"
        >
          <Mail className="size-3.5" /> operations@aarkin.co.in
        </a>
      </main>

      <footer className="border-t border-border py-6 text-center">
        <p className="eyebrow text-muted-foreground">
          &copy; {new Date().getFullYear()} Aarkin. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
