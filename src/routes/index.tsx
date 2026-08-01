import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
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
