"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { ArrowRight } from "lucide-react";
import { galleryItems } from "@/data/gallery";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Gallery() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <Container>
        <SectionTitle
          subtitle="Gallery"
          title="Glimpses of School Life"
          description="Explore moments of learning, creativity, and joy captured across our campus and events."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation
            className="gallery-swiper pb-12"
          >
            {galleryItems.slice(0, 6).map((item) => (
              <SwiperSlide key={item.id}>
                <div className="group relative aspect-[4/3] overflow-hidden rounded-3xl">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-dark-green/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <p className="p-5 font-semibold text-white">{item.title}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        <div className="text-center">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 font-semibold text-primary hover:text-dark-green"
          >
            View Full Gallery
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
