import { CalendarDays, Clock, MapPin, Phone } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { phoneNumber } from "@/lib/content";

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
              No forms, no data collection. Use the placeholder number below to
              represent the demo booking experience.
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
          </div>

          <aside className="bg-mist p-6 shadow-soft">
            <div className="bg-white p-5">
              <p className="text-xs font-bold uppercase text-gold">
                Demo Calendar Preview
              </p>
              <h2 className="mt-3 text-2xl font-bold text-ink">
                Advisory Consultation
              </h2>
              <div className="mt-5 grid gap-3 text-sm text-steel">
                <div className="flex items-center gap-3">
                  <Clock aria-hidden="true" className="h-5 w-5 text-pine" />
                  <span>30 minute strategy call</span>
                </div>
                <div className="flex items-center gap-3">
                  <CalendarDays
                    aria-hidden="true"
                    className="h-5 w-5 text-pine"
                  />
                  <span>Availability shown in live version</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin aria-hidden="true" className="h-5 w-5 text-pine" />
                  <span>Detroit emphasis, nationwide support</span>
                </div>
              </div>
            </div>
            <div className="mt-5 grid gap-3">
              {["Mon", "Tue", "Wed"].map((day, index) => (
                <div
                  key={day}
                  className="flex items-center justify-between rounded-md border border-ink/10 bg-white px-4 py-3"
                >
                  <span className="text-sm font-semibold text-ink">{day}</span>
                  <span className="text-sm text-steel">
                    {index === 0
                      ? "10:00 AM"
                      : index === 1
                        ? "1:30 PM"
                        : "3:00 PM"}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs leading-5 text-steel">
              Non-functional mockup for demo purposes only.
            </p>
          </aside>
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
