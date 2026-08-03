"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import PageHeader from "@/components/ui/PageHeader";
import { galleryItems, galleryCategories } from "@/data/gallery";
import { cn } from "@/lib/utils";
import CTA from "@/components/home/CTA";

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered =
    activeCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <>
      <PageHeader
        title="Photo Gallery"
        description="Explore moments of learning, creativity, and joy at Prerana Gyan Batika."
        breadcrumb="Home / Gallery"
      />

      <section className="py-20">
        <Container>
          <div className="mb-10 flex flex-wrap justify-center gap-2">
            {galleryCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  "rounded-full px-5 py-2 text-sm font-medium transition-all duration-300",
                  activeCategory === cat.id
                    ? "bg-primary text-white shadow-lg shadow-primary/25"
                    : "bg-white text-text/70 hover:bg-primary/10 hover:text-primary",
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                className="group relative aspect-[4/3] overflow-hidden rounded-3xl shadow-lg"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-dark-green/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="p-5">
                    <p className="font-semibold text-white">{item.title}</p>
                    <p className="text-xs capitalize text-white/70">
                      {item.category}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}
