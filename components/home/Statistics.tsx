"use client";

import { motion } from "framer-motion";
import { Users, BookOpen, Award, Heart } from "lucide-react";
import { SCHOOL } from "@/lib/constants";
import Container from "@/components/ui/Container";

const stats = [
  {
    icon: Users,
    value: SCHOOL.students,
    label: "Enrolled Students",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: BookOpen,
    value: "7",
    label: "Academic Programs",
    color: "bg-gold/15 text-dark-green",
  },
  {
    icon: Award,
    value: SCHOOL.established,
    label: "Years of Excellence",
    color: "bg-light-green/20 text-primary",
  },
  {
    icon: Heart,
    value: "100%",
    label: "Montessori Focused",
    color: "bg-primary/10 text-primary",
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
