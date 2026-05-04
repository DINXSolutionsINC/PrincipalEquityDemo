import type { Metadata } from "next";
import { BookCallContent } from "@/components/BookCallContent";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Principal Equity Capital by phone to book a government contracting consultation.",
};

export default function ContactPage() {
  return <BookCallContent />;
}
