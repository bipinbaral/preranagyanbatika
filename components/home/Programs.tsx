"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { programs } from "@/data/programs";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";

export default function Programs() {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <SectionTitle
          subtitle="Our Programs"
          title="Age-Appropriate Montessori Learning"
          description="From early childhood through primary grades, each program is carefully designed to meet developmental milestones and inspire a lifelong love of learning."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((program, i) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="h-full">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <Badge variant="gold" className="mb-3">
                    {program.ageGroup}
                  </Badge>
                  <h3 className="mb-2 text-xl font-bold text-dark-green">
                    {program.title}
                  </h3>
                  <p className="mb-4 line-clamp-3 text-sm leading-relaxed text-text/70">
                    {program.description}
                  </p>
                  <Link
                    href="/programs"
                    className="inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors hover:text-dark-green"
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
