"use client";

import { motion } from "framer-motion";
import { FileText, Users, ClipboardCheck, PartyPopper } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";

const steps = [
  {
    icon: FileText,
    step: "01",
    title: "Inquiry & Visit",
    description:
      "Contact us to schedule a campus tour and learn about our Montessori programs and philosophy.",
  },
  {
    icon: ClipboardCheck,
    step: "02",
    title: "Submit Application",
    description:
      "Complete the admission form with required documents including birth certificate and photos.",
  },
  {
    icon: Users,
    step: "03",
    title: "Interaction Session",
    description:
      "A friendly meeting between the child, parents, and our educators to ensure the best fit.",
  },
  {
    icon: PartyPopper,
    step: "04",
    title: "Enrollment",
    description:
      "Upon confirmation, complete fee payment and welcome your child to the Prerana family!",
  },
];

export default function AdmissionProcess() {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <SectionTitle
          subtitle="Admissions"
          title="Simple Steps to Join Our School"
          description="Our admission process is designed to be transparent, welcoming, and supportive for every family."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative text-center"
            >
              {i < steps.length - 1 && (
                <div className="absolute left-[calc(50%+40px)] top-10 hidden h-0.5 w-[calc(100%-80px)] bg-primary/20 lg:block" />
              )}
              <div className="relative mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-3xl bg-primary text-white shadow-lg shadow-primary/30">
                <step.icon className="h-8 w-8" />
                <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-gold text-xs font-bold text-dark-green">
                  {step.step}
                </span>
              </div>
              <h3 className="mb-2 font-bold text-dark-green">{step.title}</h3>
              <p className="text-sm leading-relaxed text-text/70">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button href="/admissions" size="lg">
            Start Your Application
          </Button>
        </div>
      </Container>
    </section>
  );
}
