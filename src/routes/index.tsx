import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useLayoutEffect } from "react";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import {
  Hero,
  About,
  Services,
  Process,
  WhyArkin,
  FundingCta,
  Schemes,
  FounderStories,
  InsightsPreview,
  Faq,
  Consultation,
  ContactCta,
  ScrollEnquiryPopup,
  // Parked — no direct reference match yet. Real, good content;
  // revisit placement as we work through the pending-sections list.
  // Credentials,
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

    // Section-level: a plain opacity fade for the section's own background/
    // container once any part of it is on screen.
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            sectionObserver.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8%", threshold: 0.08 },
    );

    // Item-level: each reveal item watches its OWN entry into the viewport.
    // A tall section (e.g. a heading followed by a much-lower card grid)
    // must NOT gate every descendant's animation on the section merely
    // starting to appear -- by the time content far down that section
    // actually scrolls into view, a section-wide timer would already have
    // finished, so the reveal would have played out off-screen and never
    // be seen. Observing items individually fixes that regardless of how
    // tall the section is.
    //
    // `.reveal-image` items are observed via their PARENT, not themselves --
    // a `.reveal-image` starts fully hidden behind `clip-path: inset(0 0
    // 100% 0)`, and the browser folds that clip into the element's own
    // intersection geometry, so its intersectionRatio is permanently 0 and
    // it can never cross the threshold that would remove the clip-path in
    // the first place. Every existing image wrapper in this codebase is a
    // tight `<div className="relative">` around just that image, so it's a
    // safe, correctly-sized stand-in to watch instead.
    const revealTargets = new Map<Element, HTMLElement[]>();
    const itemObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = revealTargets.get(entry.target) ?? [entry.target as HTMLElement];
            items.forEach((item) => item.classList.add("is-visible"));
            itemObserver.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -10%", threshold: 0.15 },
    );

    sections.forEach((section) => {
      section.classList.add("reveal-section");
      sectionObserver.observe(section);

      const revealItems = Array.from(
        section.querySelectorAll<HTMLElement>(
          "h1, h2, img, form, .tile-lift, .hairline-grid, .reveal-card, a.group",
        ),
        // .reveal-card is an atomic reveal unit (e.g. an eyebrow+heading+
        // subtitle block, or a feature column) -- anything it wraps
        // (like its own <h2>) must NOT also be independently selected,
        // or it double-animates against its already-fading parent.
      ).filter((el) => el.classList.contains("reveal-card") || !el.closest(".reveal-card"));

      revealItems.forEach((item, index) => {
        item.classList.add("reveal-item");
        // Explicit override for delays measured off the actual reference
        // (data-reveal-delay-ms="300" etc.) -- falls back to the generic
        // auto-stagger for everything else.
        const explicitDelay = item.dataset["revealDelayMs"];
        const delay = explicitDelay ? Number(explicitDelay) : Math.min(index, 7) * 75;
        item.style.setProperty("--reveal-delay", delay + "ms");

        let observeTarget: Element = item;
        if (item.tagName === "IMG") {
          item.classList.add("reveal-image");
          observeTarget = item.parentElement ?? item;
        }
        const bucket = revealTargets.get(observeTarget) ?? [];
        bucket.push(item);
        revealTargets.set(observeTarget, bucket);
        itemObserver.observe(observeTarget);
      });
    });

    return () => {
      sectionObserver.disconnect();
      itemObserver.disconnect();
      document.documentElement.classList.remove("motion-ready");
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Services />
        <Process />
        <WhyArkin />
        <FundingCta />
        <Schemes />
        <FounderStories />
        <InsightsPreview />
        <Faq />
        <Consultation />
        <ContactCta />
      </main>
      <SiteFooter />
      <ScrollEnquiryPopup />
    </div>
  );
}
