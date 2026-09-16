import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — Aarkin" },
      {
        name: "description",
        content: "The terms governing your use of aarkin.co.in and Aarkin's advisory services.",
      },
      { property: "og:title", content: "Terms of Service — Aarkin" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.aarkin.co.in/terms" },
    ],
    links: [{ rel: "canonical", href: "https://www.aarkin.co.in/terms" }],
  }),
  component: Terms,
});

/* Same grounding note as privacy.tsx: written around what this site
   and business actually are (a registration/funding/scheme advisory,
   not a government body, no on-site payments or e-commerce, no user
   accounts), not generic boilerplate. A reasonable draft, not legal
   advice -- worth a lawyer's pass before treating it as final. */
function Terms() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <section className="bg-[var(--mint)] pt-32 pb-16 sm:pt-40 sm:pb-20">
          <div className="mx-auto max-w-3xl px-6">
            <p className="eyebrow text-[var(--green-text)]">Legal</p>
            <h1 className="mt-3 font-display text-4xl font-bold text-foreground sm:text-5xl">
              Terms of Service
            </h1>
            <p className="mt-4 text-sm text-muted-foreground">Last updated: 16 September 2026</p>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-3xl space-y-10 px-6 text-[15px] leading-relaxed text-muted-foreground">
            <p>
              These terms govern your use of aarkin.co.in, operated by Aarkin Biz Solutions Private
              Limited (&ldquo;Aarkin&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;). By using this
              website, you agree to them. If you don&rsquo;t agree, please don&rsquo;t use the site.
            </p>

            <div>
              <h2 className="font-display text-xl font-bold text-foreground">
                1. What Aarkin Does
              </h2>
              <p className="mt-3">
                Aarkin is a private advisory firm. We help Indian startups and MSMEs with business
                registrations, government scheme discovery, funding applications and related
                compliance and documentation. We are not a government body, bank, or lender, and we
                don&rsquo;t issue certificates, grants or loans ourselves — we assess eligibility,
                prepare and file applications, and liaise with the relevant department, bank or
                authority on your behalf.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-foreground">
                2. Using This Website
              </h2>
              <p className="mt-3">
                This website is informational — it describes our services and lets you request a
                consultation. Nothing on it is a binding offer, and submitting an enquiry form
                doesn&rsquo;t create a client relationship or any obligation on either side. That
                only happens once we&rsquo;ve had a conversation and both agreed to proceed,
                typically confirmed separately over email or a service agreement.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-foreground">
                3. Accuracy of Your Information
              </h2>
              <p className="mt-3">
                Any registration, scheme or funding recommendation we give depends on the accuracy
                of what you tell us about your business. You&rsquo;re responsible for the accuracy
                and completeness of the information and documents you provide — we rely on it in
                good faith and aren&rsquo;t liable for outcomes caused by inaccurate or incomplete
                information you supplied.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-foreground">
                4. No Guarantee of Outcome
              </h2>
              <p className="mt-3">
                Government schemes, grants, loans and registrations are ultimately approved or
                rejected by the relevant department, bank or authority under its own criteria and
                timelines, which are outside our control. We commit to preparing and presenting your
                case as strongly as possible, but we can&rsquo;t guarantee approval, a specific
                funding amount, or a specific processing time, and nothing on this website should be
                read as such a guarantee.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-foreground">
                5. Fees &amp; Engagement
              </h2>
              <p className="mt-3">
                Figures shown on this site (scheme amounts, subsidy percentages, timelines) describe
                the government schemes themselves, not our fees. Our own fees, scope and payment
                terms for any engagement are agreed separately with you in writing before work
                begins — this website doesn&rsquo;t itself constitute a fee agreement.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-foreground">
                6. Intellectual Property
              </h2>
              <p className="mt-3">
                The Aarkin name, logo, and the content, design and layout of this website belong to
                Aarkin Biz Solutions Private Limited. You&rsquo;re welcome to share links to it, but
                please don&rsquo;t reproduce, copy or repurpose our content, branding or site design
                without asking us first.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-foreground">
                7. Third-Party Links &amp; Services
              </h2>
              <p className="mt-3">
                Links to WhatsApp, LinkedIn and Instagram, and the third-party services we use to
                process enquiry forms (see our{" "}
                <a href="/privacy" className="font-semibold text-[var(--green-text)]">
                  Privacy Policy
                </a>
                ), are outside our control once you leave this site. We aren&rsquo;t responsible for
                their content, availability or practices.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-foreground">
                8. Limitation of Liability
              </h2>
              <p className="mt-3">
                To the extent permitted by law, Aarkin isn&rsquo;t liable for any indirect,
                incidental or consequential loss arising from your use of this website, including
                any decision made based on general information published here. This doesn&rsquo;t
                limit any liability we owe you under a separately signed service agreement.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-foreground">9. Governing Law</h2>
              <p className="mt-3">
                These terms are governed by the laws of India, and any dispute relating to them is
                subject to the exclusive jurisdiction of the courts at Ahmedabad, Gujarat.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-foreground">
                10. Changes to These Terms
              </h2>
              <p className="mt-3">
                We may update these terms from time to time; the date at the top of this page always
                reflects the latest version. Continuing to use this site after a change means you
                accept the update.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-foreground">11. Contact Us</h2>
              <p className="mt-3">
                Questions about these terms are welcome — reach us at{" "}
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
                Ahmedabad – 380006, Gujarat. CIN: U70200GJ2025PTC158343.
              </p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
