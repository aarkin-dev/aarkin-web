import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Aarkin" },
      {
        name: "description",
        content:
          "How Aarkin Biz Solutions Private Limited collects, uses and protects your information.",
      },
      { property: "og:title", content: "Privacy Policy — Aarkin" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.aarkin.co.in/privacy" },
    ],
    links: [{ rel: "canonical", href: "https://www.aarkin.co.in/privacy" }],
  }),
  component: Privacy,
});

/* Grounded in what this site actually does, not boilerplate pulled
   from nowhere: the only data collected is what the Consultation
   form, the scroll popup and the newsletter box ask for; the only
   places it goes are formsubmit.co (email delivery) and a Google
   Sheet (lead tracking, Consultation + popup only, per the client's
   own explicit scope decision); there is no analytics or ad-tracking
   script anywhere in this codebase, and the one piece of
   sessionStorage in use is a functional "don't re-show the popup
   this session" flag, not a tracking cookie. This is a reasonable
   draft, not legal advice -- worth a lawyer's pass before treating it
   as final. */
function Privacy() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <section className="bg-[var(--mint)] py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-6">
            <p className="eyebrow text-[var(--green-text)]">Legal</p>
            <h1 className="mt-3 font-display text-4xl font-bold text-foreground sm:text-5xl">
              Privacy Policy
            </h1>
            <p className="mt-4 text-sm text-muted-foreground">Last updated: 16 September 2026</p>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-3xl space-y-10 px-6 text-[15px] leading-relaxed text-muted-foreground">
            <p>
              Aarkin Biz Solutions Private Limited (&ldquo;Aarkin&rdquo;, &ldquo;we&rdquo;,
              &ldquo;us&rdquo;) operates aarkin.co.in. This policy explains what information we
              collect from visitors to this website, why, and what we do with it.
            </p>

            <div>
              <h2 className="font-display text-xl font-bold text-foreground">
                1. Information We Collect
              </h2>
              <p className="mt-3">We only collect what you give us directly, through:</p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>
                  <strong className="text-foreground">
                    The Consultation form and the scroll-in consultation prompt
                  </strong>{" "}
                  — your name, phone number, email address, business structure, the service
                  you&rsquo;re interested in, and anything you write about your business.
                </li>
                <li>
                  <strong className="text-foreground">The newsletter signup box</strong> in the
                  footer — your email address only.
                </li>
                <li>
                  <strong className="text-foreground">A careers application</strong> — the
                  &ldquo;Apply Now&rdquo; button opens your own email client addressed to us;
                  whatever you choose to send (resume, message) goes directly to our inbox, not
                  through this website.
                </li>
              </ul>
              <p className="mt-3">
                We do not use cookies, analytics, or advertising trackers on this site. The only
                thing we store in your browser is a short-lived flag that remembers you&rsquo;ve
                already seen the consultation popup during your current visit, so it doesn&rsquo;t
                show twice — it holds no personal information and is cleared when you close your
                browser tab.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-foreground">
                2. How We Use Your Information
              </h2>
              <p className="mt-3">We use what you submit only to:</p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>
                  Respond to your enquiry and assess which schemes or services fit your business.
                </li>
                <li>Follow up by phone, email or WhatsApp about the request you made.</li>
                <li>
                  Send scheme and funding updates, if you&rsquo;ve subscribed to our newsletter.
                </li>
              </ul>
              <p className="mt-3">
                We never sell your information, and we don&rsquo;t use it for anything beyond
                responding to the specific request you made.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-foreground">
                3. Where Your Information Goes
              </h2>
              <p className="mt-3">
                Form submissions are delivered to our team&rsquo;s inbox through{" "}
                <strong className="text-foreground">formsubmit.co</strong>, a third-party email
                delivery service. Consultation form and scroll-popup enquiries (not the newsletter
                signup) are also logged as a row in a private Google Sheet that only our team can
                access, so we can track and follow up on leads. Both are processing tools we use
                internally — neither service is authorised to use your data for its own purposes.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-foreground">
                4. Third-Party Links
              </h2>
              <p className="mt-3">
                Our WhatsApp, LinkedIn and Instagram links take you to those platforms directly.
                Once you leave aarkin.co.in, their own privacy policies apply — we don&rsquo;t
                receive anything from those platforms about you.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-foreground">
                5. How Long We Keep It
              </h2>
              <p className="mt-3">
                We retain enquiry information for as long as reasonably needed to respond to you and
                maintain a record of client interactions, and in line with applicable Indian tax and
                business-record retention requirements. You can ask us to delete your information at
                any time — see Section 7.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-foreground">6. Data Security</h2>
              <p className="mt-3">
                We take reasonable steps to protect the information you share with us, including
                restricting access to our lead-tracking sheet and inbox to our own team. No method
                of transmission over the internet is completely secure, so we can&rsquo;t guarantee
                absolute security, but we don&rsquo;t take that lightly.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-foreground">7. Your Rights</h2>
              <p className="mt-3">
                You can ask us at any time to tell you what information we hold about you, correct
                it, or delete it. Write to{" "}
                <a
                  href="mailto:info@aarkin.co.in"
                  className="font-semibold text-[var(--green-text)]"
                >
                  info@aarkin.co.in
                </a>{" "}
                and we&rsquo;ll act on it promptly.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-foreground">
                8. Children&rsquo;s Privacy
              </h2>
              <p className="mt-3">
                This website and our services are intended for business owners and founders, and are
                not directed at individuals under 18. We don&rsquo;t knowingly collect information
                from children.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-foreground">
                9. Changes to This Policy
              </h2>
              <p className="mt-3">
                If we change how we handle your information, we&rsquo;ll update this page and revise
                the date at the top. Continuing to use this site after a change means you accept the
                updated policy.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-foreground">10. Contact Us</h2>
              <p className="mt-3">
                Questions about this policy or your data are welcome — reach us at{" "}
                <a
                  href="mailto:info@aarkin.co.in"
                  className="font-semibold text-[var(--green-text)]"
                >
                  info@aarkin.co.in
                </a>{" "}
                or{" "}
                <a href="tel:+918130557358" className="font-semibold text-[var(--green-text)]">
                  +91 81305 57358
                </a>
                . Registered office: 55 World Business House, Nr. Parimal Garden, Ambawadi,
                Ahmedabad – 380006, Gujarat.
              </p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
