"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";

interface PageHeaderProps {
  title: string;
  description?: string;
  breadcrumb?: string;
}

export default function PageHeader({
  title,
  description,
  breadcrumb,
}: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-dark-green to-primary py-20 lg:py-28">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -right-20 top-0 h-80 w-80 rounded-full bg-gold blur-3xl" />
        <div className="absolute -left-20 bottom-0 h-80 w-80 rounded-full bg-light-green blur-3xl" />
      </div>
      <Container className="relative text-center">
        {breadcrumb && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-3 text-sm font-medium text-gold"
          >
            {breadcrumb}
          </motion.p>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl font-bold text-white sm:text-5xl"
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-4 max-w-2xl text-lg text-white/80"
          >
            {description}
          </motion.p>
        )}
      </Container>
    </section>
  );
}
