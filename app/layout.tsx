import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { TopBar } from "@/components/TopBar";

export const metadata: Metadata = {
  title: {
    default: "Principal Equity Capital | Government Contracting Consultancy",
    template: "%s | Principal Equity Capital",
  },
  description:
    "Premium government contracting consulting for African American small business owners pursuing federal contract opportunities.",
  keywords: [
    "government contracting",
    "African American small business government contracts",
    "African American government contracting consultant",
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
        <TopBar />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
