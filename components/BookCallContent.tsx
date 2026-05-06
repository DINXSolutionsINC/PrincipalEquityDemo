import { Mail, Phone } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { DemoBookingWidget } from "@/components/DemoBookingWidget";
import { contactEmail, phoneNumber } from "@/lib/content";

const agenda = [
  "Current business capability and contract readiness",
  "SAM status, certifications, 8(a), and GSA direction",
  "Immediate opportunity fit and next practical actions",
];

export function BookCallContent() {
  return (
    <>
      <section className="bg-white px-5 py-16 sm:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-xs font-bold uppercase text-gold">
              Book a Call
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-tight text-ink sm:text-5xl">
              Call to discuss your government contracting path.
            </h1>
            <p className="mt-6 text-lg leading-8 text-steel">
              Pick a consultation focus and preview an available time. This is
              a demo booking experience with no form submission and no data
              collection.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={`tel:${phoneNumber.replace(/[^0-9]/g, "")}`}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-gold px-5 py-3 text-sm font-semibold text-ink shadow-soft transition hover:bg-[#d5b25c] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              >
                <Phone aria-hidden="true" className="h-4 w-4" />
                <span>{phoneNumber}</span>
              </a>
              <ButtonLink href="/" variant="secondary">
                Return Home
              </ButtonLink>
            </div>
            <div className="mt-8 grid gap-3 text-sm text-steel">
              <div className="rounded-md border border-ink/10 bg-mist px-4 py-3">
                Best for African American small business owners exploring SAM,
                8(a), GSA, proposal readiness, or first contract targets.
              </div>
              <div className="rounded-md border border-ink/10 bg-mist px-4 py-3">
                Live booking would connect to Calendly or a scheduling tool; the
                demo shows the client flow without collecting information.
              </div>
            </div>
          </div>

          <DemoBookingWidget />
        </div>
      </section>

      <section className="bg-mist px-5 py-14 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 rounded-lg border border-ink/10 bg-white p-6 shadow-soft md:flex-row md:items-center">
          <div>
            <p className="text-xs font-bold uppercase text-gold">
              Prefer Email?
            </p>
            <h2 className="mt-3 text-2xl font-bold text-ink">
              Send a direct message about your contracting goals.
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-steel">
              Email is best for quick context, document questions, or asking
              which consultation focus makes the most sense before booking a
              call.
            </p>
          </div>
          <a
            href={`mailto:${contactEmail}`}
            className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-md bg-navy px-5 py-3 text-sm font-semibold text-white transition hover:bg-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
          >
            <Mail aria-hidden="true" className="h-4 w-4 text-gold" />
            <span>{contactEmail}</span>
          </a>
        </div>
      </section>

      <section className="bg-ink px-5 py-16 text-white sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-bold uppercase text-gold">
              What to Expect
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
              A focused conversation, not a sales maze.
            </h2>
          </div>
          <div className="grid gap-4">
            {agenda.map((item) => (
              <div
                key={item}
                className="rounded-lg border border-white/10 bg-white/10 p-5"
              >
                <p className="text-sm leading-6 text-white/75">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
