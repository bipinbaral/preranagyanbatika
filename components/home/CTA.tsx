"use client";

import { motion } from "framer-motion";
import { Phone, Mail, ArrowRight } from "lucide-react";
import { SCHOOL } from "@/lib/constants";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function CTA() {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-primary to-dark-green px-8 py-16 text-center sm:px-16"
        >
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gold/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-light-green/20 blur-3xl" />

          <div className="relative">
            <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Give Your Child the Best Start
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
              Join the Prerana Gyan Batika family and discover how Montessori
              education can unlock your child&apos;s full potential.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button href="/admissions" variant="secondary" size="lg">
                Apply for Admission
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button
                href="/contact"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-dark-green"
              >
                Contact Us
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-8 text-white/70">
              <a
                href={`tel:${SCHOOL.phone}`}
                className="flex items-center gap-2 transition-colors hover:text-gold"
              >
                <Phone className="h-4 w-4" />
                {SCHOOL.phone}
              </a>
              <a
                href={`mailto:${SCHOOL.email}`}
                className="flex items-center gap-2 transition-colors hover:text-gold"
              >
                <Mail className="h-4 w-4" />
                {SCHOOL.email}
              </a>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
