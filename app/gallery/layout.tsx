import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Gallery",
  description:
    "Browse photos of classrooms, activities, events, and campus life at Prerana Gyan Batika Montessori School in Kathmandu.",
  path: "/gallery",
});

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
