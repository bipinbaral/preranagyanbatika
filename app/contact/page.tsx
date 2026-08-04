"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { SCHOOL } from "@/lib/constants";
import Container from "@/components/ui/Container";
import PageHeader from "@/components/ui/PageHeader";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:${SCHOOL.email}?subject=${encodeURIComponent(formState.subject || "Inquiry from Website")}&body=${encodeURIComponent(
      `Name: ${formState.name}\nPhone: ${formState.phone}\nEmail: ${formState.email}\n\n${formState.message}`,
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <>
      <PageHeader
        title="Contact Us"
        description="We'd love to hear from you. Reach out for admissions, inquiries, or to schedule a campus visit."
        breadcrumb="Home / Contact"
      />

      <section className="py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <h2 className="mb-6 text-2xl font-bold text-dark-green">
                Get in Touch
              </h2>
              <div className="space-y-6">
                {[
                  {
                    icon: MapPin,
                    title: "Address",
                    content: SCHOOL.location,
                  },
                  {
                    icon: Phone,
                    title: "Phone",
                    content: SCHOOL.phone,
                    href: `tel:${SCHOOL.phone}`,
                  },
                  {
                    icon: Mail,
                    title: "Email",
                    content: SCHOOL.email,
                    href: `mailto:${SCHOOL.email}`,
                  },
                  {
                    icon: Clock,
                    title: "Office Hours",
                    content: "Sunday – Friday: 9:00 AM – 3:30 PM",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-dark-green">
                        {item.title}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-sm text-text/70 hover:text-primary"
                        >
                          {item.content}
                        </a>
                      ) : (
                        <p className="text-sm text-text/70">{item.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <a href={SCHOOL.mapLink} target="_blank" rel="noopener noreferrer" className="block mt-8">
                <Card className="overflow-hidden transition-transform hover:scale-[1.02]">
                  <div className="aspect-video bg-primary/10 flex items-center justify-center">
                    <div className="text-center p-6">
                      <MapPin className="mx-auto mb-2 h-8 w-8 text-primary" />
                      <p className="font-semibold text-dark-green">Kalanki-14, Khadka Gaun</p>
                      <p className="text-sm text-text/60">Kathmandu, Nepal</p>
                      <p className="mt-3 text-sm font-medium text-primary hover:underline">View on Google Maps</p>
                    </div>
                  </div>
                </Card>
              </a>
            </div>

            <Card className="p-8 lg:col-span-3">
              <h2 className="mb-6 text-2xl font-bold text-dark-green">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-1.5 block text-sm font-medium text-text/80"
                    >
                      Full Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({ ...formState, name: e.target.value })
                      }
                      className="w-full rounded-xl border border-black/10 bg-cream px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-1.5 block text-sm font-medium text-text/80"
                    >
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={formState.phone}
                      onChange={(e) =>
                        setFormState({ ...formState, phone: e.target.value })
                      }
                      className="w-full rounded-xl border border-black/10 bg-cream px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                      placeholder="Your phone"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-sm font-medium text-text/80"
                  >
                    Email Address *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                    className="w-full rounded-xl border border-black/10 bg-cream px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="mb-1.5 block text-sm font-medium text-text/80"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    value={formState.subject}
                    onChange={(e) =>
                      setFormState({ ...formState, subject: e.target.value })
                    }
                    className="w-full rounded-xl border border-black/10 bg-cream px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                    placeholder="Admission inquiry, general question, etc."
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-sm font-medium text-text/80"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    className="w-full resize-none rounded-xl border border-black/10 bg-cream px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                    placeholder="How can we help you?"
                  />
                </div>
                <Button type="submit" size="lg">
                  <Send className="h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </Container>
      </section>
    </>
  );
}
