"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, Mail } from "lucide-react";
import { NAV_LINKS, SCHOOL } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/Button";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <div className="hidden bg-dark-green text-white lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-sm sm:px-6 lg:px-8">
          <div className="flex items-center gap-6">
            <a
              href={`tel:${SCHOOL.phone}`}
              className="flex items-center gap-2 transition-colors hover:text-gold"
            >
              <Phone className="h-3.5 w-3.5" />
              {SCHOOL.phone}
            </a>
            <a
              href={`mailto:${SCHOOL.email}`}
              className="flex items-center gap-2 transition-colors hover:text-gold"
            >
              <Mail className="h-3.5 w-3.5" />
              {SCHOOL.email}
            </a>
          </div>
          <p className="text-white/70">Est. {SCHOOL.established} · {SCHOOL.city}</p>
        </div>
      </div>

      <header
        className={cn(
          "sticky top-0 z-50 transition-all duration-300",
          scrolled ? "glass shadow-lg" : "bg-cream/95 backdrop-blur-sm",
        )}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logo/logopng.png"
              alt={SCHOOL.name}
              width={52}
              height={52}
              className="h-12 w-12 object-contain"
              priority
            />
            <div>
              <p className="text-sm font-bold leading-tight text-dark-green">
                Prerana Gyan Batika
              </p>
              <p className="text-xs text-text/60">Montessori School</p>
            </div>
          </Link>

          <ul className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="rounded-xl px-3 py-2 text-sm font-medium text-text/80 transition-colors hover:bg-primary/10 hover:text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-4 md:flex">
            <Button 
              href={SCHOOL.admissionFormLink} 
              size="sm"
            >
              Apply Now
            </Button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-xl p-2 text-dark-green transition-colors hover:bg-primary/10 lg:hidden"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
      </header>

      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
