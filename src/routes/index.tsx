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
    const elements = Array.from(document.querySelectorAll<HTMLElement>("main > *"));
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

    elements.forEach((element) => {
      element.classList.add("reveal-section");
      observer.observe(element);
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
    </div>
  );
}
