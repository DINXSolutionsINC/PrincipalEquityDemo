import { CheckCircle2 } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { CtaBand } from "@/components/CtaBand";
import { FaqAccordion } from "@/components/FaqAccordion";
import { PathwaySelector } from "@/components/PathwaySelector";
import { SectionHeader } from "@/components/SectionHeader";
import {
  benefits,
  differentiators,
  processSteps,
  services,
  values,
} from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <section className="hero-image px-5 py-20 text-white sm:px-8 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase text-gold">
              African American Small Business Contracting Consultancy
            </p>
            <h1 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Principal Equity Capital
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">
              We help African American small business owners enter government
              contracting with clear strategy, proposal guidance, and contract
              acquisition support. Minority-owned and growth-ready small
              businesses are also served through the same proven systems.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/book" icon="phone">
                Book a Call
              </ButtonLink>
              <ButtonLink href="/about" variant="light">
                About the Firm
              </ButtonLink>
            </div>
            <div className="mt-10 grid gap-3 border-l border-gold/60 pl-5 text-sm text-white/75 sm:grid-cols-3 sm:border-l-0 sm:border-t sm:pl-0 sm:pt-5">
              <span>African American small business support</span>
              <span>8(a) and GSA pathway advisory</span>
              <span>Detroit roots, nationwide support</span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Value"
            title="A simpler path for African American businesses to access public-sector opportunities."
            description="Government contracting can feel complex from the outside. Principal Equity Capital organizes the path so African American founders and owners can move with confidence."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <article
                  key={benefit.title}
                  className="interactive-card rounded-lg border border-ink/10 bg-white p-6 shadow-soft"
                >
                  <Icon aria-hidden="true" className="h-7 w-7 text-gold" />
                  <h3 className="mt-5 text-xl font-bold text-ink">
                    {benefit.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-steel">
                    {benefit.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-mist px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Services"
            title="Focused support for contract readiness and pursuit."
            description="The demo service model keeps the message high-level, direct, and easy for new clients to understand."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article
                  key={service.title}
                  className="interactive-card rounded-lg border border-ink/10 bg-white p-6"
                >
                  <Icon aria-hidden="true" className="h-7 w-7 text-pine" />
                  <h3 className="mt-5 text-lg font-bold text-ink">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-steel">
                    {service.description}
                  </p>
                </article>
              );
            })}
          </div>
          <p className="mt-6 text-sm text-steel">
            Government leasing support is available as a secondary advisory
            area.
          </p>
        </div>
      </section>

      <section className="bg-white px-5 py-16 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <SectionHeader
            eyebrow="Process"
            title="A clear sequence from first call to execution."
            description="Every engagement begins with practical context: where the business stands today, what contracts are realistic, and what needs to happen next."
          />
          <div className="grid gap-4">
            {processSteps.map((step, index) => (
              <div
                key={step}
                className="process-step flex items-center gap-4 rounded-lg border border-ink/10 bg-white p-5"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-navy text-sm font-bold text-gold">
                  {index + 1}
                </span>
                <div>
                  <h3 className="text-lg font-bold text-ink">{step}</h3>
                  <p className="mt-1 text-sm text-steel">
                    {index === 0
                      ? "Assess readiness, goals, registrations, and contract fit."
                      : index === 1
                        ? "Build a practical path around capability, timing, and targets."
                        : index === 2
                          ? "Identify opportunities that match the business profile."
                          : "Support disciplined movement through proposals and next actions."}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PathwaySelector />

      <section className="fine-grid bg-ink px-5 py-16 text-white sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase text-gold">
              Differentiation
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
              Built first for African American businesses ready to compete.
            </h2>
            <p className="mt-4 text-base leading-7 text-white/70">
              Principal Equity Capital emphasizes practical empowerment for
              African American small business owners: helping them understand
              the systems, pursue more contracts, and position for stronger
              qualifications over time.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {values.map((value) => {
                const Icon = value.icon;
                return (
                  <div key={value.title} className="border-l border-gold pl-4">
                    <Icon aria-hidden="true" className="h-6 w-6 text-gold" />
                    <h3 className="mt-4 font-bold text-white">
                      {value.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-white/70">
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="interactive-card rounded-lg border border-white/10 bg-white p-6 text-ink shadow-soft">
            <h3 className="text-xl font-bold">8(a) + GSA Advantage</h3>
            <p className="mt-3 text-sm leading-6 text-steel">
              The firm helps clients think beyond a single pursuit. More
              contract activity can support faster program readiness, while
              8(a) and GSA positioning can make future wins more efficient.
            </p>
            <div className="mt-6 grid gap-3">
              {differentiators.map((item) => (
                <div key={item} className="flex gap-3">
                  <CheckCircle2
                    aria-hidden="true"
                    className="mt-0.5 h-5 w-5 shrink-0 text-pine"
                  />
                  <p className="text-sm leading-6 text-steel">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-7">
              <ButtonLink href="/book" variant="secondary" icon="phone">
                Call to Discuss
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <FaqAccordion />

      <CtaBand />
    </>
  );
}
