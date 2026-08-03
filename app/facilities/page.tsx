import type { Metadata } from "next";
import Image from "next/image";
import {
  Building2,
  BookOpen,
  Palette,
  Trees,
  Utensils,
  Shield,
  Monitor,
  HeartPulse,
} from "lucide-react";
import { createMetadata } from "@/lib/metadata";
import Container from "@/components/ui/Container";
import PageHeader from "@/components/ui/PageHeader";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import CTA from "@/components/home/CTA";

export const metadata: Metadata = createMetadata({
  title: "Facilities",
  description:
    "Explore the modern facilities at Prerana Gyan Batika Montessori School including classrooms, library, playground, and activity rooms in Kathmandu.",
  path: "/facilities",
});

const facilities = [
  {
    icon: Building2,
    title: "Montessori Classrooms",
    description:
      "Bright, spacious classrooms equipped with authentic Montessori materials, child-sized furniture, and organized learning areas that promote independence and focus.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
  },
  {
    icon: BookOpen,
    title: "Library & Reading Corner",
    description:
      "A cozy reading space stocked with picture books, storybooks, and educational resources to cultivate a lifelong love of reading from an early age.",
    image: "https://images.unsplash.com/photo-1497633762305-f8ce55317943?w=800&q=80",
  },
  {
    icon: Palette,
    title: "Art & Activity Room",
    description:
      "Dedicated creative spaces for painting, drawing, craft work, music sessions, and hands-on projects that nurture artistic expression.",
    image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=800&q=80",
  },
  {
    icon: Trees,
    title: "Outdoor Playground",
    description:
      "A safe, well-maintained outdoor area with play equipment for physical activities, sports, and nature-based learning experiences.",
    image: "https://images.unsplash.com/photo-1564760059215-87602a16e3a8?w=800&q=80",
  },
  {
    icon: Utensils,
    title: "Hygienic Cafeteria",
    description:
      "Clean dining facilities where children learn healthy eating habits in a supervised, comfortable environment.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80",
  },
  {
    icon: Monitor,
    title: "Computer Learning Lab",
    description:
      "Age-appropriate technology resources that introduce digital literacy skills in a guided, balanced manner.",
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80",
  },
  {
    icon: Shield,
    title: "Security & Safety",
    description:
      "CCTV monitoring, secure entry points, and trained staff ensure a safe environment for all students throughout the school day.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80",
  },
  {
    icon: HeartPulse,
    title: "First Aid & Health",
    description:
      "On-campus first aid facilities and health awareness programs to support student wellbeing and safety.",
    image: "https://images.unsplash.com/photo-1577896851231-94ef0908cc59?w=800&q=80",
  },
];

export default function FacilitiesPage() {
  return (
    <>
      <PageHeader
        title="Our Facilities"
        description="Thoughtfully designed spaces that support learning, creativity, and holistic development."
        breadcrumb="Home / Facilities"
      />

      <section className="py-20">
        <Container>
          <SectionTitle
            subtitle="Campus"
            title="World-Class Learning Environment"
            description="Every corner of our campus is designed with children's safety, comfort, and development in mind."
          />
          <div className="grid gap-8 md:grid-cols-2">
            {facilities.map((facility) => (
              <Card key={facility.title} className="overflow-hidden">
                <div className="relative aspect-[16/9]">
                  <Image
                    src={facility.image}
                    alt={facility.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute bottom-4 left-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white/90 shadow-lg">
                    <facility.icon className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold text-dark-green">
                    {facility.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-text/70">
                    {facility.description}
                  </p>
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
