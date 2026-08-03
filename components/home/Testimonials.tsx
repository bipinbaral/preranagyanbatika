"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { testimonials } from "@/data/testimonials";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import "swiper/css";
import "swiper/css/pagination";

export default function Testimonials() {
  return (
    <section className="bg-dark-green py-20 lg:py-28">
      <Container>
        <SectionTitle
          subtitle="Testimonials"
          title="What Parents Say About Us"
          description="Hear from families who have experienced the Prerana Gyan Batika difference firsthand."
          light
        />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            className="testimonials-swiper pb-12"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <Card glass className="h-full p-6">
                  <Quote className="mb-4 h-8 w-8 text-gold/50" />
                  <p className="mb-6 text-sm leading-relaxed text-text/80">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>
                  <div className="flex items-center gap-1 mb-3">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-gold text-gold"
                      />
                    ))}
                  </div>
                  <div>
                    <p className="font-bold text-dark-green">{testimonial.name}</p>
                    <p className="text-xs text-text/60">{testimonial.role}</p>
                  </div>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </Container>
    </section>
  );
}
