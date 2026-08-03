import type { Metadata } from "next";
import {
  FileText,
  Users,
  ClipboardCheck,
  PartyPopper,
  CheckCircle,
} from "lucide-react";
import { createMetadata } from "@/lib/metadata";
import { SCHOOL } from "@/lib/constants";
import Container from "@/components/ui/Container";
import PageHeader from "@/components/ui/PageHeader";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import CTA from "@/components/home/CTA";

export const metadata: Metadata = createMetadata({
  title: "Admissions",
  description:
    "Apply for admission to Prerana Gyan Batika Montessori School. Learn about our enrollment process, requirements, and how to join our Kathmandu campus.",
  path: "/admissions",
});

const steps = [
  {
    icon: FileText,
    step: "01",
    title: "Inquiry & Campus Visit",
    description:
      "Contact our office to schedule a guided tour of our campus. Meet our educators and explore our Montessori environment.",
  },
  {
    icon: ClipboardCheck,
    step: "02",
    title: "Application Submission",
    description:
      "Fill out the admission form and submit required documents including birth certificate and passport-size photographs.",
  },
  {
    icon: Users,
    step: "03",
    title: "Child Interaction",
    description:
      "A brief, friendly session where our teachers interact with your child to understand their readiness and needs.",
  },
  {
    icon: PartyPopper,
    step: "04",
    title: "Confirmation & Enrollment",
    description:
      "Upon acceptance, complete the fee payment and receive your welcome package with school guidelines.",
  },
];

const requirements = [
  "Completed admission application form",
  "Copy of child's birth certificate",
  "Two recent passport-size photographs",
  "Previous school records (if applicable)",
  "Immunization/vaccination records",
  "Parent/guardian identification copy",
];

export default function AdmissionsPage() {
  return (
    <>
      <PageHeader
        title="Admissions"
        description="Welcome to Prerana Gyan Batika! We're excited to help your child begin their Montessori journey."
        breadcrumb="Home / Admissions"
      />

      <section className="py-20">
        <Container>
          <SectionTitle
            subtitle="How to Apply"
            title="Admission Process"
            description="Our straightforward admission process ensures a smooth experience for every family."
          />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <Card key={step.step} className="p-6 text-center">
                <div className="relative mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-white">
                  <step.icon className="h-7 w-7" />
                  <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-gold text-xs font-bold text-dark-green">
                    {step.step}
                  </span>
                </div>
                <h3 className="mb-2 font-bold text-dark-green">{step.title}</h3>
                <p className="text-sm text-text/70">{step.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionTitle
                subtitle="Requirements"
                title="Documents Needed"
                align="left"
              />
              <ul className="space-y-3">
                {requirements.map((req) => (
                  <li
                    key={req}
                    className="flex items-start gap-3 text-text/80"
                  >
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    {req}
                  </li>
                ))}
              </ul>
            </div>
            <Card className="p-8">
              <h3 className="mb-4 text-xl font-bold text-dark-green">
                Ready to Apply?
              </h3>
              <p className="mb-6 text-text/70">
                Contact our admissions office to begin the process or schedule
                a campus visit. We accept applications throughout the year,
                subject to seat availability.
              </p>
              <div className="space-y-3 text-sm text-text/80">
                <p>
                  <strong>Phone:</strong>{" "}
                  <a href={`tel:${SCHOOL.phone}`} className="text-primary">
                    {SCHOOL.phone}
                  </a>
                </p>
                <p>
                  <strong>Email:</strong>{" "}
                  <a
                    href={`mailto:${SCHOOL.email}`}
                    className="text-primary break-all"
                  >
                    {SCHOOL.email}
                  </a>
                </p>
                <p>
                  <strong>Location:</strong> {SCHOOL.location}
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button href="/contact">Contact Us</Button>
                <Button href={`tel:${SCHOOL.phone}`} variant="outline">
                  Call Now
                </Button>
              </div>
            </Card>
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}
