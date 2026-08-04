export const SCHOOL = {
  name: "Prerana Gyan Batika Montessori School",
  shortName: "Prerana Gyan Batika",
  established: "2071 B.S.",
  type: "Private Montessori School",
  location: "Khadka Gaun, Kalanki-14, Kathmandu, Nepal",
  city: "Kathmandu, Nepal",
  programs: ["ECD", "Nursery", "LKG", "UKG", "Grade 1", "Grade 2", "Grade 3"],
  boarding: "Day Scholars",
  coed: true,
  students: "150+",
  phone: "01-5218530",
  email: "preranaschool72514@gmail.com",
  facebook: "https://www.facebook.com/profile.php?id=61565824730923",
  mapLink: "https://www.google.com/maps?rlz=1C1KNTJ_enNP1070NP1070&gs_lcrp=EgZjaHJvbWUqCAgBEEUYJxg7MgYIABBFGDwyCAgBEEUYJxg7MgYIAhBFGDwyBggDEEUYPDIGCAQQRRg8MgYIBRBFGEEyBggGEEUYPTIGCAcQRRhB0gEINDk0NWowajeoAgCwAgA&um=1&ie=UTF-8&fb=1&gl=np&sa=X&geocode=KaveA_7wI-s5MdOvFXSnXWiM&daddr=Kathmandu-14,+Kathmandu+44600",
  admissionFormLink: "/apply",
  mission:
    "To nurture every child's intellectual, emotional, social, and creative potential through quality Montessori education.",
  vision:
    "To become one of Kathmandu's leading Montessori schools by developing confident, responsible, and lifelong learners.",
} as const;

export const COLORS = {
  primary: "#2E6B4E",
  darkGreen: "#1F4D38",
  lightGreen: "#73A77A",
  gold: "#D8B44A",
  background: "#F8F7F2",
  text: "#1F2937",
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/admissions", label: "Admissions" },
  { href: "/facilities", label: "Facilities" },
  { href: "/gallery", label: "Gallery" },
  { href: "/events", label: "Events" },
  { href: "/contact", label: "Contact" },
  { href: "/faq", label: "FAQ" },
] as const;
