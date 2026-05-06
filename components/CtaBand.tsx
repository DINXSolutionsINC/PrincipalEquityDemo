import { ButtonLink } from "@/components/ButtonLink";

type CtaBandProps = {
  title?: string;
  description?: string;
};

export function CtaBand({
  title = "Ready to pursue government contracts with a clearer plan?",
  description = "Book a call to discuss your current position, immediate opportunities, and the path toward stronger contract readiness for African American small business owners.",
}: CtaBandProps) {
  return (
    <section className="bg-navy px-5 py-16 text-white sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase text-gold">Next Step</p>
          <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-base leading-7 text-white/70">
            {description}
          </p>
        </div>
        <div className="shrink-0">
          <ButtonLink href="/book" variant="light" icon="phone">
            Book a Call
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
