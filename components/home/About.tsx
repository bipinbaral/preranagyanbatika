"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { SCHOOL } from "@/lib/constants";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";

const highlights = [
  "Authentic Montessori methodology",
  "Experienced and caring educators",
  "Safe, child-friendly campus",
  "Individual attention for every child",
  "Holistic development focus",
  "Strong parent-school partnership",
];

export default function About() {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src="/images/gallery/about us.jpg"
                alt="Montessori classroom at Prerana Gyan Batika"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden rounded-2xl bg-primary p-6 text-white shadow-xl sm:block">
              <p className="text-4xl font-bold text-gold">{SCHOOL.established}</p>
              <p className="text-sm text-white/80">Year Established</p>
            </div>
          </motion.div>

          <div>
            <SectionTitle
              subtitle="About Us"
              title="A Place Where Every Child Thrives"
              description="Prerana Gyan Batika Montessori School is a private co-educational institution dedicated to providing quality early childhood and primary education in Kalanki, Kathmandu."
              align="left"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6 text-text/70 leading-relaxed"
            >
              Since our establishment in {SCHOOL.established}, we have been
              committed to fostering intellectual curiosity, emotional
              intelligence, and social responsibility in every student. Our
              Montessori-trained educators create a warm, stimulating environment
              where children learn at their own pace.
            </motion.p>

            <ul className="mb-8 grid gap-3 sm:grid-cols-2">
              {highlights.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center gap-2 text-sm text-text/80"
                >
                  <CheckCircle className="h-4 w-4 shrink-0 text-primary" />
                  {item}
                </motion.li>
              ))}
            </ul>

            <Button href="/about">Learn More About Us</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
