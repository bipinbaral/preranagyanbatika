import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Contact",
  description:
    "Contact Prerana Gyan Batika Montessori School for admissions, inquiries, or campus visits. Call 01-5218530 or email preranaschool72514@gmail.com.",
  path: "/contact",
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
