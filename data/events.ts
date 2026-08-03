export interface SchoolEvent {
  id: string;
  title: string;
  date: string;
  description: string;
  image: string;
  location?: string;
}

export const events: SchoolEvent[] = [
  {
    id: "1",
    title: "Annual Montessori Exhibition",
    date: "March 15, 2026",
    description:
      "Students showcase their Montessori projects, creative work, and learning journeys to parents and the community.",
    image:
      "https://images.unsplash.com/photo-1427504494785-3a9ca7714fda?w=800&q=80",
    location: "School Campus",
  },
  {
    id: "2",
    title: "Parents' Orientation Day",
    date: "April 10, 2026",
    description:
      "An interactive session for parents to understand our Montessori philosophy, curriculum, and child development approach.",
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80",
    location: "Main Hall",
  },
  {
    id: "3",
    title: "Sports & Fitness Week",
    date: "May 5–9, 2026",
    description:
      "A week of fun physical activities, team games, and health awareness programs designed for every age group.",
    image:
      "https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=800&q=80",
    location: "Playground",
  },
  {
    id: "4",
    title: "Cultural Heritage Day",
    date: "June 20, 2026",
    description:
      "Celebrating Nepal's rich culture through dance, music, traditional dress, and storytelling by our young learners.",
    image:
      "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&q=80",
    location: "School Campus",
  },
];
