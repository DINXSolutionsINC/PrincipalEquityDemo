"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/lib/content";

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-mist px-5 py-16 sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-xs font-bold uppercase text-gold">FAQ</p>
          <h2 className="mt-3 text-3xl font-bold leading-tight text-ink sm:text-4xl">
            Common questions before entering government contracting.
          </h2>
          <p className="mt-4 text-base leading-7 text-steel">
            Clear answers for African American small business owners comparing
            SAM readiness, 8(a), GSA, and contract pursuit strategy.
          </p>
        </div>

        <div className="grid gap-3">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;
            return (
              <article
                key={item.question}
                className="interactive-card overflow-hidden rounded-lg border border-ink/10 bg-white"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-5 px-5 py-4 text-left"
                >
                  <span className="text-base font-bold text-ink">
                    {item.question}
                  </span>
                  <ChevronDown
                    aria-hidden="true"
                    className={`h-5 w-5 shrink-0 text-gold transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  id={panelId}
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="border-t border-ink/10 px-5 py-5 text-sm leading-6 text-steel">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
