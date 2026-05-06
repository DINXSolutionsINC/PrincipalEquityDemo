"use client";

import { useEffect, useMemo, useState } from "react";
import { Clock3, Phone } from "lucide-react";
import { phoneNumber } from "@/lib/content";

const timeZone = "America/Detroit";
const openHour = 9;
const closeHour = 17;
const weekdays = new Set(["Mon", "Tue", "Wed", "Thu", "Fri"]);

type HoursStatus = {
  isOpen: boolean;
  label: string;
  timeLabel: string;
};

function getDetroitStatus(date: Date): HoursStatus {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone,
    weekday: "short",
    hour: "numeric",
    minute: "2-digit",
    hour12: false,
    timeZoneName: "short",
  }).formatToParts(date);

  const getPart = (type: Intl.DateTimeFormatPartTypes) =>
    parts.find((part) => part.type === type)?.value ?? "";

  const weekday = getPart("weekday");
  const hour = Number(getPart("hour"));
  const minute = Number(getPart("minute"));
  const timeZoneName = getPart("timeZoneName") || "ET";
  const displayTime = new Intl.DateTimeFormat("en-US", {
    timeZone,
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).format(date);
  const currentMinutes = hour * 60 + minute;
  const isOpen =
    weekdays.has(weekday) &&
    currentMinutes >= openHour * 60 &&
    currentMinutes < closeHour * 60;

  return {
    isOpen,
    label: isOpen ? "Open now" : "Closed now",
    timeLabel: `Detroit: ${displayTime} ${timeZoneName}`,
  };
}

export function TopBar() {
  const [status, setStatus] = useState<HoursStatus | null>(null);
  const phoneHref = useMemo(
    () => `tel:${phoneNumber.replace(/[^0-9]/g, "")}`,
    [],
  );

  useEffect(() => {
    const updateStatus = () => setStatus(getDetroitStatus(new Date()));

    updateStatus();
    const intervalId = window.setInterval(updateStatus, 60_000);

    return () => window.clearInterval(intervalId);
  }, []);

  const isOpen = status?.isOpen ?? false;

  return (
    <section className="border-b border-white/10 bg-ink px-5 py-2 text-white sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 text-xs sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <span className="inline-flex items-center gap-2 font-semibold">
            <span
              aria-hidden="true"
              className={`h-2.5 w-2.5 rounded-full ${
                isOpen ? "bg-emerald-400" : "bg-red-500"
              }`}
            />
            <span>{status?.label ?? "Checking hours"}</span>
          </span>
          <span className="inline-flex items-center gap-2 text-white/70">
            <Clock3 aria-hidden="true" className="h-3.5 w-3.5 text-gold" />
            <span>{status?.timeLabel ?? "Detroit time"}</span>
          </span>
          <span className="text-white/58">Mon-Fri, 9:00 AM-5:00 PM ET</span>
        </div>

        <a
          href={phoneHref}
          className="inline-flex items-center gap-2 font-semibold text-white transition hover:text-gold"
        >
          <Phone aria-hidden="true" className="h-3.5 w-3.5 text-gold" />
          <span>{phoneNumber}</span>
        </a>
      </div>
    </section>
  );
}
