import type { Metadata } from "next";
import FAQAccordion from "@/components/ui/FAQAccordion";
import { createMetadata } from "@/lib/metadata";
import { faqItems } from "@/data/faq";
import Container from "@/components/ui/Container";
import PageHeader from "@/components/ui/PageHeader";
import SectionTitle from "@/components/ui/SectionTitle";
import CTA from "@/components/home/CTA";

export const metadata: Metadata = createMetadata({
  title: "FAQ",
  description:
    "Find answers to frequently asked questions about admissions, programs, timings, and school life at Prerana Gyan Batika Montessori School.",
  path: "/faq",
});

export default function FAQPage() {
  return (
    <>
      <PageHeader
        title="Frequently Asked Questions"
        description="Everything you need to know about our school, programs, and admission process."
        breadcrumb="Home / FAQ"
      />

      <section className="py-20">
        <Container>
          <SectionTitle
            subtitle="Help Center"
            title="Common Questions"
            description="Can't find what you're looking for? Contact us directly and we'll be happy to help."
          />
          <FAQAccordion items={faqItems} />
        </Container>
      </section>

      <CTA />
    </>
  );
}
