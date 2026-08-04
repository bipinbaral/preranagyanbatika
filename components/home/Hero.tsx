"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import { SCHOOL } from "@/lib/constants";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import Container from "@/components/ui/Container";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/hero/background.png"
          alt="Children learning at Montessori school"
          fill
          className="object-cover object-[75%_center] md:object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-green/90 via-dark-green/75 to-dark-green/50" />
      </div>

      <Container className="relative flex min-h-[90vh] items-center py-20">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="light" className="mb-6">
              <Sparkles className="mr-1 inline h-3 w-3" />
              Est. {SCHOOL.established} · Kathmandu, Nepal
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl"
          >
            Nurturing Young Minds Through{" "}
            <span className="text-gold">Montessori Excellence</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg leading-relaxed text-white/85 sm:text-xl"
          >
            {SCHOOL.mission}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Button href="/admissions" variant="secondary" size="lg">
              Start Admission
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button
              href="/about"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-dark-green"
            >
              Discover Our School
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 flex flex-wrap gap-8"
          >
            {[
              { value: SCHOOL.students, label: "Happy Students" },
              { value: "7", label: "Programs" },
              { value: SCHOOL.established, label: "Established" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-bold text-gold">{stat.value}</p>
                <p className="text-sm text-white/70">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </Container>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" className="w-full fill-cream">
          <path d="M0,30 C360,60 720,0 1080,30 C1260,45 1380,45 1440,30 L1440,60 L0,60 Z" />
        </svg>
      </div>
    </section>
  );
}
