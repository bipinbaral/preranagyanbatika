"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  Shield,
  Users,
  Lightbulb,
  Globe,
  Smile,
} from "lucide-react";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";

const reasons = [
  {
    icon: GraduationCap,
    title: "Certified Montessori Approach",
    description:
      "Our curriculum follows authentic Montessori principles with trained educators and specialized learning materials.",
  },
  {
    icon: Shield,
    title: "Safe & Nurturing Environment",
    description:
      "A secure campus with child-friendly facilities, ensuring parents' peace of mind and children's comfort.",
  },
  {
    icon: Users,
    title: "Small Class Sizes",
    description:
      "Individual attention ensures every child receives personalized guidance tailored to their unique learning style.",
  },
  {
    icon: Lightbulb,
    title: "Creative Learning",
    description:
      "Hands-on activities, arts, music, and exploration foster creativity alongside academic foundations.",
  },
  {
    icon: Globe,
    title: "Cultural Awareness",
    description:
      "We celebrate Nepali heritage while preparing students to be confident global citizens.",
  },
  {
    icon: Smile,
    title: "Happy Learners",
    description:
      "Joyful classrooms where children develop confidence, friendships, and a genuine love for school.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <Container>
        <SectionTitle
          subtitle="Why Choose Us"
          title="The Prerana Gyan Batika Difference"
          description="Discover what makes our Montessori school a trusted choice for families in Kathmandu."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <Card hover className="h-full p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                  <reason.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-dark-green">
                  {reason.title}
                </h3>
                <p className="text-sm leading-relaxed text-text/70">
                  {reason.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
