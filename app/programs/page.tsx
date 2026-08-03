import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { createMetadata } from "@/lib/metadata";
import { programs } from "@/data/programs";
import Container from "@/components/ui/Container";
import PageHeader from "@/components/ui/PageHeader";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import CTA from "@/components/home/CTA";

export const metadata: Metadata = createMetadata({
  title: "Programs",
  description:
    "Explore our Montessori programs from ECD and Nursery through LKG, UKG, and Grade 1-3 at Prerana Gyan Batika Montessori School, Kathmandu.",
  path: "/programs",
});

export default function ProgramsPage() {
  return (
    <>
      <PageHeader
        title="Our Programs"
        description="Comprehensive Montessori programs designed for every stage of early childhood and primary education."
        breadcrumb="Home / Programs"
      />

      <section className="py-20">
        <Container>
          <div className="space-y-16">
            {programs.map((program, i) => (
              <div
                key={program.id}
                className={`grid items-center gap-10 lg:grid-cols-2 ${
                  i % 2 === 1 ? "lg:[direction:rtl]" : ""
                }`}
              >
                <div className={`relative aspect-[16/10] overflow-hidden rounded-3xl shadow-xl ${i % 2 === 1 ? "lg:[direction:ltr]" : ""}`}>
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className={i % 2 === 1 ? "lg:[direction:ltr]" : ""}>
                  <Badge variant="gold" className="mb-4">
                    {program.ageGroup}
                  </Badge>
                  <h2 className="mb-4 text-3xl font-bold text-dark-green">
                    {program.title}
                  </h2>
                  <p className="mb-6 leading-relaxed text-text/70">
                    {program.description}
                  </p>
                  <ul className="space-y-3">
                    {program.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-start gap-3 text-sm text-text/80"
                      >
                        <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container>
          <Card className="p-8 text-center lg:p-12">
            <h2 className="mb-4 text-2xl font-bold text-dark-green">
              Not Sure Which Program Is Right?
            </h2>
            <p className="mx-auto mb-6 max-w-2xl text-text/70">
              Our educators are happy to guide you based on your child&apos;s age,
              development, and learning needs. Contact us for a personalized
              consultation.
            </p>
          </Card>
        </Container>
      </section>

      <CTA />
    </>
  );
}
