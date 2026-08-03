import type { Metadata } from "next";
import Image from "next/image";
import { Calendar, MapPin } from "lucide-react";
import { createMetadata } from "@/lib/metadata";
import { events } from "@/data/events";
import Container from "@/components/ui/Container";
import PageHeader from "@/components/ui/PageHeader";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import CTA from "@/components/home/CTA";

export const metadata: Metadata = createMetadata({
  title: "Events",
  description:
    "Stay updated with upcoming events, celebrations, and programs at Prerana Gyan Batika Montessori School in Kathmandu.",
  path: "/events",
});

export default function EventsPage() {
  return (
    <>
      <PageHeader
        title="School Events"
        description="Celebrations, exhibitions, and community programs that enrich our students' learning experience."
        breadcrumb="Home / Events"
      />

      <section className="py-20">
        <Container>
          <div className="space-y-8">
            {events.map((event) => (
              <Card key={event.id} className="overflow-hidden">
                <div className="grid md:grid-cols-5">
                  <div className="relative aspect-[16/10] md:aspect-auto md:col-span-2">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 40vw"
                    />
                  </div>
                  <div className="flex flex-col justify-center p-8 md:col-span-3">
                    <Badge variant="primary" className="mb-4 w-fit">
                      Upcoming Event
                    </Badge>
                    <h2 className="mb-3 text-2xl font-bold text-dark-green">
                      {event.title}
                    </h2>
                    <div className="mb-4 flex flex-wrap gap-4 text-sm text-text/60">
                      <span className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-primary" />
                        {event.date}
                      </span>
                      {event.location && (
                        <span className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-primary" />
                          {event.location}
                        </span>
                      )}
                    </div>
                    <p className="leading-relaxed text-text/70">
                      {event.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}
