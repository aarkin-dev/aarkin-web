import {
  Outlet,
  Link,
  createRootRoute,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Toaster } from "sonner";
import { Preloader, SealMark } from "@/components/site-chrome";

import appCss from "../styles.css?url";

/* Both fallback pages were never touched during the redesign -- still
   the original shadcn-default bg-primary/text-primary-foreground
   buttons (the old navy), so a dead link or a thrown error dropped a
   visitor onto a page that looked like it belonged to a different
   site. Recoloured to the site's real two-tier CTA pattern (dark
   green by default, lime on hover) and given the same brand mark
   every other page has. */
function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <Link to="/" aria-label="Aarkin home" className="inline-flex justify-center">
          <SealMark className="h-12 w-auto" />
        </Link>
        <h1 className="mt-8 font-display text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-[var(--orange-dark)] px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-orange hover:text-foreground"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <Link to="/" aria-label="Aarkin home" className="inline-flex justify-center">
          <SealMark className="h-12 w-auto" />
        </Link>
        <h1 className="mt-8 font-display text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-full bg-[var(--orange-dark)] px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-orange hover:text-foreground"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-foreground/15 bg-foreground/5 px-5 py-2.5 text-sm font-bold text-foreground transition-colors hover:bg-foreground/10"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      // Sitewide fallback only -- the home route (routes/index.tsx) sets
      // its own more specific title/description/OG copy (including
      // og:url/og:image, which don't need repeating here) that overrides
      // this for "/"; this generic version is what a 404 or a thrown
      // error actually falls back to, since those don't match the home
      // route. Previously both places carried a full, near-duplicate set
      // of copy for the same page, which was confusing to keep in sync.
      { title: "Aarkin — Government Grants & MSME Advisory for Indian Founders" },
      {
        name: "description",
        content:
          "Aarkin helps Indian startups and MSMEs navigate government grants, DPIIT recognition, Udyam registration and collateral-free loans.",
      },
      { name: "author", content: "Aarkin Advisory" },
      { property: "og:site_name", content: "Aarkin" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@500;600;700;800&family=Mulish:wght@400;500;600;700;800&display=swap",
      },
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "canonical", href: "https://www.aarkin.co.in/" },
    ],
  }),

  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <>
      <Preloader />
      <Outlet />
      <Toaster richColors position="bottom-right" />
    </>
  );
}
