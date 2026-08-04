export interface GalleryItem {
  id: string;
  title: string;
  category: "classroom" | "events" | "activities" | "campus";
  image: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: "1",
    title: "Montessori Classroom",
    category: "classroom",
    image:
      "/images/gallery/classroom.jpg",
  },
  {
    id: "2",
    title: "Creative Art Session",
    category: "activities",
    image:
      "/images/gallery/creativeartsessio.jpg",
  },
  {
    id: "3",
    title: "Annual Day Celebration",
    category: "events",
    image:
      "/images/gallery/annualcelebration.jpg",
  },
  {
    id: "4",
    title: "Outdoor Play Area",
    category: "campus",
    image:
      "/images/gallery/outerplayground.png",
  },
  {
    id: "5",
    title: "Reading Corner",
    category: "classroom",
    image:
      "/images/gallery/readingconor.jpg",
  },
  {
    id: "6",
    title: "Science Exploration",
    category: "activities",
    image:
      "/images/gallery/art and activity.jpg",
  },
  {
    id: "7",
    title: "Sports Day",
    category: "events",
    image:
      "/images/gallery/sportsday.jpg",
  },
  {
    id: "8",
    title: "School Building",
    category: "campus",
    image:
      "/images/hero/background.png",
  },
];

export const galleryCategories = [
  { id: "all", label: "All" },
  { id: "classroom", label: "Classrooms" },
  { id: "activities", label: "Activities" },
  { id: "events", label: "Events" },
  { id: "campus", label: "Campus" },
] as const;
