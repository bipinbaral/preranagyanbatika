"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  subtitle?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionTitle({
  subtitle,
  title,
  description,
  align = "center",
  light = false,
}: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className={cn(
        "mb-12 max-w-3xl",
        align === "center" && "mx-auto text-center",
      )}
    >
      {subtitle && (
        <span
          className={cn(
            "mb-3 inline-block rounded-full px-4 py-1.5 text-sm font-semibold tracking-wide uppercase",
            light
              ? "bg-white/20 text-white"
              : "bg-primary/10 text-primary",
          )}
        >
          {subtitle}
        </span>
      )}
      <h2
        className={cn(
          "text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl",
          light ? "text-white" : "text-dark-green",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-lg leading-relaxed",
            light ? "text-white/80" : "text-text/70",
          )}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
