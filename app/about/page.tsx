import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { CtaBand } from "@/components/CtaBand";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Principal Equity Capital's mission to help African American small businesses pursue government contracts.",
};

const missionPoints = [
  "Clarify the government contracting process for capable African American small businesses.",
  "Prioritize African American firms entering public-sector markets, with support for minority-owned businesses as a secondary audience.",
  "Help owners build a practical path toward proposal readiness, contract acquisition, 8(a), and GSA positioning.",
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-white px-5 py-16 sm:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase text-gold">
              About the Firm
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-tight text-ink sm:text-5xl">
              Expert guidance for African American small businesses entering
              government contracting.
            </h1>
            <p className="mt-6 text-lg leading-8 text-steel">
              Principal Equity Capital exists to help African American business
              owners translate capability into contract opportunity. The firm
              supports clients through the processes, proposals, and strategy
              required to compete with more confidence.
            </p>
            <div className="mt-8">
              <ButtonLink href="/book" icon="phone">
                Book a Call
              </ButtonLink>
            </div>
          </div>
          <div className="about-image min-h-[360px] rounded-lg shadow-soft" />
        </div>
      </section>

      <section className="bg-mist px-5 py-16 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeader
            eyebrow="Mission"
            title="Make government contracting more accessible for African American business owners."
            description="The focus is straightforward: help African American owners understand what matters, take the right next step, and build toward repeatable contract success."
          />
          <div className="grid gap-4">
            {missionPoints.map((point) => (
              <div
                key={point}
                className="flex gap-3 rounded-lg border border-ink/10 bg-white p-5"
              >
                <CheckCircle2
                  aria-hidden="true"
                  className="mt-0.5 h-5 w-5 shrink-0 text-pine"
                />
                <p className="text-sm leading-6 text-steel">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1fr]">
          <div>
            <SectionHeader
              eyebrow="Founder Background"
              title="Grounded in direct government contracting experience."
              description="The founder brings experience from prior work inside the government contracting space and positions Principal Equity Capital as an expert consultancy for African American small business owners who need steady advisory support."
            />
          </div>
          <div className="rounded-lg border border-ink/10 bg-white p-6 shadow-soft">
            <h3 className="text-xl font-bold text-ink">Demo Profile</h3>
            <p className="mt-4 text-sm leading-6 text-steel">
              Founder biography details can be expanded as the brand matures.
              For this phase, the page establishes credibility through relevant
              contracting experience, prior firm exposure, and a clear advisory
              point of view.
            </p>
            <div className="mt-6 rounded-md border border-dashed border-gold/70 bg-[#fbf7ec] p-4">
              <p className="text-sm font-semibold text-ink">
                Testimonials Coming Soon
              </p>
              <p className="mt-2 text-sm leading-6 text-steel">
                Client proof can be added once the demo moves into a live brand
                phase.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Speak with Principal Equity Capital about your contracting path."
        description="A short call can clarify where your business stands and what needs to happen next."
      />
    </>
  );
}
