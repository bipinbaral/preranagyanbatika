"use client";

import { motion } from "framer-motion";
import { GraduationCap, Library, Star, Puzzle } from "lucide-react";
import { SCHOOL } from "@/lib/constants";
import Container from "@/components/ui/Container";

const stats = [
  {
    icon: GraduationCap,
    value: SCHOOL.students,
    label: "Enrolled Students",
    color: "bg-white/10 text-white",
  },
  {
    icon: Library,
    value: "7",
    label: "Academic Programs",
    color: "bg-white/10 text-white",
  },
  {
    icon: Star,
    value: SCHOOL.established,
    label: "Years of Excellence",
    color: "bg-white/10 text-white",
  },
  {
    icon: Puzzle,
    value: "100%",
    label: "Montessori Focused",
    color: "bg-white/10 text-white",
  },
];

export default function Statistics() {
  return (
    <section className="bg-primary py-16 lg:py-20">
      <Container>
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div
                className={`mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl ${stat.color}`}
              >
                <stat.icon className="h-7 w-7" />
              </div>
              <p className="text-3xl font-bold text-white sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-white/70">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
