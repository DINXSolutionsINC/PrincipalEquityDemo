import type { Metadata } from "next";
import { BookCallContent } from "@/components/BookCallContent";

export const metadata: Metadata = {
  title: "Book a Call",
  description:
    "Call Principal Equity Capital to discuss government contracting strategy, proposal guidance, 8(a), and GSA pathways.",
};

export default function BookPage() {
  return <BookCallContent />;
}
