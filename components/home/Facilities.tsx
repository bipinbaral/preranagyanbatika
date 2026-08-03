"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building2, BookOpen, Palette, Trees, Utensils } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";

const facilities = [
  {
    icon: Building2,
    title: "Modern Classrooms",
    description: "Spacious, well-ventilated Montessori classrooms with natural lighting.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80",
  },
  {
    icon: BookOpen,
    title: "Library & Reading Corner",
    description: "A curated collection of age-appropriate books to spark imagination.",
    image: "https://images.unsplash.com/photo-1497633762305-f8ce55317943?w=600&q=80",
  },
  {
    icon: Palette,
    title: "Art & Activity Room",
    description: "Creative spaces for painting, crafts, music, and hands-on projects.",
    image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600&q=80",
  },
  {
    icon: Trees,
    title: "Outdoor Playground",
    description: "Safe outdoor area for physical play, sports, and nature exploration.",
    image: "https://images.unsplash.com/photo-1564760059215-87602a16e3a8?w=600&q=80",
  },
  {
    icon: Utensils,
    title: "Hygienic Cafeteria",
    description: "Clean dining area promoting healthy eating habits among students.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&q=80",
  },
];

export default function Facilities() {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <SectionTitle
          subtitle="Our Facilities"
          title="Spaces Designed for Learning & Growth"
          description="Our campus provides thoughtfully designed spaces that support every aspect of a child's development."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {facilities.map((facility, i) => (
            <motion.div
              key={facility.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={i === 0 ? "sm:col-span-2 lg:col-span-1" : ""}
            >
              <Card className="group h-full overflow-hidden">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={facility.image}
                    alt={facility.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-green/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white/90">
                    <facility.icon className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="mb-1 font-bold text-dark-green">{facility.title}</h3>
                  <p className="text-sm text-text/70">{facility.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/facilities"
            className="inline-flex items-center gap-2 font-semibold text-primary hover:text-dark-green"
          >
            View All Facilities
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
