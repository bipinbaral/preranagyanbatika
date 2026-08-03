"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { events } from "@/data/events";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";

export default function Events() {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <SectionTitle
          subtitle="Upcoming Events"
          title="What's Happening at Our School"
          description="Stay connected with our vibrant school community through exhibitions, celebrations, and special programs."
        />

        <div className="grid gap-8 md:grid-cols-2">
          {events.map((event, i) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="flex h-full flex-col overflow-hidden sm:flex-row">
                <div className="relative aspect-[16/10] shrink-0 sm:aspect-auto sm:w-2/5">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 40vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <Badge variant="primary" className="mb-3 w-fit">
                    Upcoming
                  </Badge>
                  <h3 className="mb-2 text-lg font-bold text-dark-green">
                    {event.title}
                  </h3>
                  <div className="mb-3 flex flex-wrap gap-4 text-sm text-text/60">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4 text-primary" />
                      {event.date}
                    </span>
                    {event.location && (
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4 text-primary" />
                        {event.location}
                      </span>
                    )}
                  </div>
                  <p className="flex-1 text-sm leading-relaxed text-text/70">
                    {event.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/events"
            className="inline-flex items-center gap-2 font-semibold text-primary hover:text-dark-green"
          >
            See All Events
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
