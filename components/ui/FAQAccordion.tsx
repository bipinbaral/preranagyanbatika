"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import type { FAQItem } from "@/data/faq";
import { cn } from "@/lib/utils";

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  return (
    <div className="mx-auto max-w-3xl space-y-3">
      {items.map((item) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm"
        >
          <button
            onClick={() => setOpenId(openId === item.id ? null : item.id)}
            className="flex w-full items-center justify-between gap-4 p-5 text-left"
            aria-expanded={openId === item.id}
          >
            <span className="font-semibold text-dark-green">{item.question}</span>
            <ChevronDown
              className={cn(
                "h-5 w-5 shrink-0 text-primary transition-transform duration-300",
                openId === item.id && "rotate-180",
              )}
            />
          </button>
          <AnimatePresence>
            {openId === item.id && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <p className="border-t border-black/5 px-5 pb-5 pt-3 text-sm leading-relaxed text-text/70">
                  {item.answer}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
}
