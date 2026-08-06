import { createFileRoute } from "@tanstack/react-router";
import { Mail, Sparkles } from "lucide-react";
import { SealMark } from "@/components/site-chrome";

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
          href="mailto:aarkin2024@gmail.com"
          className="slab-yellow mt-10 inline-flex items-center gap-2 px-6 py-4 text-xs font-bold tracking-widest uppercase transition-transform hover:translate-x-1 hover:translate-y-1"
        >
          <Mail className="size-3.5" /> aarkin2024@gmail.com
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
