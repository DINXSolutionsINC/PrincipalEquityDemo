import Link from "next/link";
import { phoneNumber } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-ink text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 sm:px-8 md:grid-cols-[1.3fr_0.7fr_0.7fr]">
        <div>
          <p className="text-sm font-bold uppercase text-gold">
            Principal Equity Capital
          </p>
          <p className="mt-3 max-w-xl text-sm leading-6 text-white/70">
            Government contracting consultancy for small businesses,
            minority-owned firms, and African American entrepreneurs pursuing
            public-sector growth.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Navigate</p>
          <div className="mt-3 grid gap-2 text-sm text-white/70">
            <Link href="/" className="hover:text-gold">
              Home
            </Link>
            <Link href="/about" className="hover:text-gold">
              About
            </Link>
            <Link href="/book" className="hover:text-gold">
              Book a Call
            </Link>
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Call to Book</p>
          <p className="mt-3 text-sm text-white/70">{phoneNumber}</p>
          <p className="mt-2 text-xs text-white/50">
            Demo placeholder. No form or data collection.
          </p>
        </div>
      </div>
    </footer>
  );
}
