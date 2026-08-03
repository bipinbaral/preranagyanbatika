import type { Metadata } from "next";
import { SCHOOL } from "./constants";

interface PageMetadataOptions {
  title: string;
  description: string;
  path?: string;
}

export function createMetadata({
  title,
  description,
  path = "",
}: PageMetadataOptions): Metadata {
  const fullTitle =
    title === "Home"
      ? `${SCHOOL.name} | Montessori School in Kathmandu`
      : `${title} | ${SCHOOL.shortName}`;

  return {
    title: fullTitle,
    description,
    keywords: [
      "Montessori school Kathmandu",
      "Prerana Gyan Batika",
      "preschool Nepal",
      "ECD nursery LKG UKG",
      "Kalanki school",
      "private school Kathmandu",
    ],
    openGraph: {
      title: fullTitle,
      description,
      type: "website",
      locale: "en_NP",
      siteName: SCHOOL.name,
    },
    alternates: {
      canonical: path || "/",
    },
  };
}
