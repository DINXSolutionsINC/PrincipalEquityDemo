"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { pathwayOptions } from "@/lib/content";

export function PathwaySelector() {
  const [selectedId, setSelectedId] = useState(pathwayOptions[0].id);
  const selected =
    pathwayOptions.find((option) => option.id === selectedId) ??
    pathwayOptions[0];

  return (
    <section className="bg-white px-5 py-16 sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="text-xs font-bold uppercase text-gold">
            Interactive Pathways
          </p>
          <h2 className="mt-3 text-3xl font-bold leading-tight text-ink sm:text-4xl">
            See how 8(a), GSA, and a combined strategy can work for African
            American small businesses.
          </h2>
          <p className="mt-4 text-base leading-7 text-steel">
            Select a pathway to understand what it does, how it helps, and why
            sequencing matters before pursuing government contracts.
          </p>
        </div>

        <div className="rounded-lg border border-ink/10 bg-mist p-3 shadow-soft">
          <div
            className="grid gap-2 rounded-md bg-white p-2 sm:grid-cols-3"
            role="tablist"
            aria-label="Contracting pathway selector"
          >
            {pathwayOptions.map((option) => {
              const isSelected = option.id === selected.id;
              return (
                <button
                  key={option.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setSelectedId(option.id)}
                  className={`min-h-12 rounded-md px-4 py-3 text-sm font-bold transition-all duration-300 ${
                    isSelected
                      ? "bg-navy text-white shadow-soft"
                      : "bg-white text-steel hover:bg-mist hover:text-ink"
                  }`}
                >
                  {option.label}
                </button>
              );
            })}
          </div>

          <article
            key={selected.id}
            className="selection-panel mt-3 rounded-lg bg-white p-6"
          >
            <p className="text-xs font-bold uppercase text-gold">
              {selected.eyebrow}
            </p>
            <h3 className="mt-3 text-2xl font-bold leading-tight text-ink">
              {selected.title}
            </h3>
            <p className="mt-4 text-sm leading-6 text-steel">
              {selected.description}
            </p>
            <div className="mt-6 grid gap-3">
              {selected.benefits.map((benefit) => (
                <div key={benefit} className="flex gap-3">
                  <CheckCircle2
                    aria-hidden="true"
                    className="mt-0.5 h-5 w-5 shrink-0 text-pine"
                  />
                  <p className="text-sm leading-6 text-steel">{benefit}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 rounded-md border border-gold/30 bg-[#fbf7ec] p-4 text-sm leading-6 text-ink">
              {selected.note}
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
