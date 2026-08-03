import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import { Navbar, Footer } from "@/components/layout";
import { createMetadata } from "@/lib/metadata";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = createMetadata({
  title: "Home",
  description:
    "Prerana Gyan Batika Montessori School in Kalanki, Kathmandu offers quality ECD, Nursery, LKG, UKG, and Grade 1-3 programs with authentic Montessori education.",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body className="min-h-screen antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
