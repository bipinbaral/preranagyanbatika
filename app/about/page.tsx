import type { Metadata } from "next";
import Image from "next/image";
import { Target, Eye, Award, Heart } from "lucide-react";
import { createMetadata } from "@/lib/metadata";
import { SCHOOL } from "@/lib/constants";
import Container from "@/components/ui/Container";
import PageHeader from "@/components/ui/PageHeader";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import CTA from "@/components/home/CTA";

export const metadata: Metadata = createMetadata({
  title: "About Us",
  description:
    "Learn about Prerana Gyan Batika Montessori School's mission, vision, and commitment to quality Montessori education in Kathmandu since 2071 B.S.",
  path: "/about",
});

const values = [
  {
    icon: Heart,
    title: "Compassion",
    description: "Every child is treated with kindness, respect, and understanding.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for the highest standards in education and care.",
  },
  {
    icon: Target,
    title: "Integrity",
    description: "Honesty and transparency guide all our interactions.",
  },
  {
    icon: Eye,
    title: "Innovation",
    description: "Continuous improvement in teaching methods and learning experiences.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Our School"
        description="Discover the story, mission, and values behind Prerana Gyan Batika Montessori School."
        breadcrumb="Home / About"
      />

      <section className="py-20">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80"
                alt="About Prerana Gyan Batika Montessori School"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <SectionTitle
                subtitle="Our Story"
                title="Building Futures Since 2071 B.S."
                align="left"
              />
              <p className="mb-4 leading-relaxed text-text/70">
                Prerana Gyan Batika Montessori School was founded with a vision
                to bring authentic Montessori education to the Kalanki community
                in Kathmandu. As a private co-educational day school, we serve
                over {SCHOOL.students} students across ECD through Grade 3.
              </p>
              <p className="leading-relaxed text-text/70">
                Our name &ldquo;Prerana&rdquo; means inspiration, and
                &ldquo;Gyan Batika&rdquo; represents a garden of knowledge. Together,
                they reflect our commitment to inspiring young learners in a
                nurturing environment where knowledge blooms naturally.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container>
          <div className="grid gap-8 md:grid-cols-2">
            <Card className="p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-3 text-2xl font-bold text-dark-green">Our Mission</h3>
              <p className="leading-relaxed text-text/70">{SCHOOL.mission}</p>
            </Card>
            <Card className="p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/15">
                <Eye className="h-6 w-6 text-dark-green" />
              </div>
              <h3 className="mb-3 text-2xl font-bold text-dark-green">Our Vision</h3>
              <p className="leading-relaxed text-text/70">{SCHOOL.vision}</p>
            </Card>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionTitle
            subtitle="Our Values"
            title="What We Stand For"
            description="These core values guide everything we do at Prerana Gyan Batika."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <Card key={value.title} className="p-6 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 font-bold text-dark-green">{value.title}</h3>
                <p className="text-sm text-text/70">{value.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}
