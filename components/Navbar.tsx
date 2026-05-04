import Link from "next/link";
import { Phone } from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <Link href="/" className="group flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-md bg-navy text-sm font-bold text-gold">
            PE
          </span>
          <span className="flex flex-col">
            <span className="text-sm font-bold uppercase text-ink">
              Principal Equity
            </span>
            <span className="hidden text-xs text-steel sm:inline">
              Capital
            </span>
          </span>
        </Link>

        <div className="flex items-center gap-2 sm:gap-4">
          <div className="hidden items-center gap-2 sm:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-steel transition hover:bg-mist hover:text-ink"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <Link
            href="/book"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-navy px-4 py-2 text-sm font-semibold text-white transition hover:bg-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
          >
            <Phone aria-hidden="true" className="h-4 w-4" />
            <span>Book a Call</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
