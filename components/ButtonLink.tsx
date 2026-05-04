import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "light";
  icon?: "arrow" | "phone";
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  icon = "arrow",
}: ButtonLinkProps) {
  const styles = {
    primary:
      "bg-gold text-ink shadow-soft hover:bg-[#d5b25c] focus-visible:outline-gold",
    secondary:
      "border border-ink/10 bg-white text-ink hover:border-gold hover:text-navy focus-visible:outline-gold",
    light:
      "border border-white/30 bg-white/10 text-white backdrop-blur hover:bg-white/20 focus-visible:outline-white",
  };
  const Icon = icon === "phone" ? Phone : ArrowRight;

  return (
    <Link
      href={href}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold transition ${styles[variant]} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2`}
    >
      <span>{children}</span>
      <Icon aria-hidden="true" className="h-4 w-4" />
    </Link>
  );
}
