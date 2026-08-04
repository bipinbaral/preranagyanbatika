import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import ApplyClient from "./ApplyClient";

export const metadata: Metadata = createMetadata({
  title: "Apply for Admission",
  description:
    "Complete our online admission application form to enroll your child at Prerana Gyan Batika Montessori School.",
  path: "/apply",
});

export default function ApplyPage() {
  return <ApplyClient />;
}
