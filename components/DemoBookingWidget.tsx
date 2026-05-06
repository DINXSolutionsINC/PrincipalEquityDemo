"use client";

import { useMemo, useState } from "react";
import { CalendarDays, CheckCircle2, Clock, Phone } from "lucide-react";
import { phoneNumber } from "@/lib/content";

const consultationTypes = [
  {
    label: "Contract Readiness",
    description: "SAM status, capability positioning, and first target agencies.",
  },
  {
    label: "8(a) + GSA Pathway",
    description: "Program sequencing, realistic timelines, and qualification planning.",
  },
  {
    label: "Proposal Strategy",
    description: "Opportunity fit, response discipline, and proposal next steps.",
  },
];

const slots = [
  { day: "Mon", date: "May 11", times: ["10:00 AM", "2:00 PM"] },
  { day: "Tue", date: "May 12", times: ["11:30 AM", "3:30 PM"] },
  { day: "Wed", date: "May 13", times: ["9:30 AM", "1:30 PM"] },
];

export function DemoBookingWidget() {
  const [selectedType, setSelectedType] = useState(consultationTypes[0].label);
  const [selectedSlot, setSelectedSlot] = useState({
    day: slots[0].day,
    date: slots[0].date,
    time: slots[0].times[0],
  });
  const [isReserved, setIsReserved] = useState(false);

  const phoneHref = useMemo(
    () => `tel:${phoneNumber.replace(/[^0-9]/g, "")}`,
    [],
  );
  const selectedTypeDescription =
    consultationTypes.find((type) => type.label === selectedType)
      ?.description ?? consultationTypes[0].description;

  return (
    <aside className="bg-mist p-6 shadow-soft">
      <div className="bg-white p-5">
        <p className="text-xs font-bold uppercase text-gold">
          Demo Booking Preview
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
            <CalendarDays aria-hidden="true" className="h-5 w-5 text-pine" />
            <span>Detroit time, nationwide support</span>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <p className="text-xs font-bold uppercase text-steel">
          Select call focus
        </p>
        <div className="mt-3 grid gap-3">
          {consultationTypes.map((type) => {
            const isSelected = selectedType === type.label;
            return (
              <button
                key={type.label}
                type="button"
                onClick={() => {
                  setSelectedType(type.label);
                  setIsReserved(false);
                }}
                className={`rounded-md border px-4 py-3 text-left transition-all duration-300 ${
                  isSelected
                    ? "border-gold bg-[#fbf7ec] shadow-soft"
                    : "border-ink/10 bg-white hover:border-gold/60"
                }`}
              >
                <span className="text-sm font-bold text-ink">
                  {type.label}
                </span>
                <span className="mt-1 block text-xs leading-5 text-steel">
                  {type.description}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-6">
        <p className="text-xs font-bold uppercase text-steel">Pick a time</p>
        <div className="mt-3 grid gap-3">
          {slots.map((slot) => (
            <div key={slot.date} className="rounded-md bg-white p-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-ink">{slot.day}</span>
                <span className="text-sm text-steel">{slot.date}</span>
              </div>
              <div className="mt-3 grid grid-cols-2 gap-2">
                {slot.times.map((time) => {
                  const isSelected =
                    selectedSlot.date === slot.date && selectedSlot.time === time;
                  return (
                    <button
                      key={`${slot.date}-${time}`}
                      type="button"
                      onClick={() => {
                        setSelectedSlot({
                          day: slot.day,
                          date: slot.date,
                          time,
                        });
                        setIsReserved(false);
                      }}
                      className={`min-h-10 rounded-md px-3 text-sm font-semibold transition-all duration-300 ${
                        isSelected
                          ? "bg-navy text-white"
                          : "bg-mist text-ink hover:bg-[#e4e9ef]"
                      }`}
                    >
                      {time}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 rounded-md border border-ink/10 bg-white p-4">
        <p className="text-xs font-bold uppercase text-gold">Selected Call</p>
        <p className="mt-2 text-sm font-bold text-ink">
          {selectedType} - {selectedSlot.day}, {selectedSlot.date} at{" "}
          {selectedSlot.time}
        </p>
        <p className="mt-2 text-sm leading-6 text-steel">
          {selectedTypeDescription}
        </p>
      </div>

      <button
        type="button"
        onClick={() => setIsReserved(true)}
        className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-gold px-5 py-3 text-sm font-semibold text-ink shadow-soft transition hover:bg-[#d5b25c] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
      >
        <CheckCircle2 aria-hidden="true" className="h-4 w-4" />
        <span>Reserve Demo Slot</span>
      </button>

      {isReserved ? (
        <div className="selection-panel mt-4 rounded-md border border-pine/20 bg-white p-4">
          <p className="text-sm font-bold text-ink">Demo slot selected.</p>
          <p className="mt-2 text-sm leading-6 text-steel">
            In the live version, this would create the booking. For the demo,
            call to confirm this consultation time.
          </p>
          <a
            href={phoneHref}
            className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-pine hover:text-navy"
          >
            <Phone aria-hidden="true" className="h-4 w-4" />
            <span>{phoneNumber}</span>
          </a>
        </div>
      ) : null}

      <p className="mt-4 text-xs leading-5 text-steel">
        Demo-only booking UI. No personal data is collected on this page.
      </p>
    </aside>
  );
}
