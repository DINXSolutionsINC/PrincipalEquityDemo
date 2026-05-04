import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: {
    default: "Principal Equity Capital | Government Contracting Consultancy",
    template: "%s | Principal Equity Capital",
  },
  description:
    "Premium government contracting consulting for small businesses, minority-owned firms, and African American entrepreneurs pursuing federal contract opportunities.",
  keywords: [
    "government contracting",
    "small business government contracts",
    "minority business contracts",
    "African American small business support",
    "Detroit government contracting",
    "8(a) program",
    "GSA Schedule",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
