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
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
  },
  {
    id: "2",
    title: "Creative Art Session",
    category: "activities",
    image:
      "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=800&q=80",
  },
  {
    id: "3",
    title: "Annual Day Celebration",
    category: "events",
    image:
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80",
  },
  {
    id: "4",
    title: "Outdoor Play Area",
    category: "campus",
    image:
      "https://images.unsplash.com/photo-1564760059215-87602a16e3a8?w=800&q=80",
  },
  {
    id: "5",
    title: "Reading Corner",
    category: "classroom",
    image:
      "https://images.unsplash.com/photo-1497633762305-f8ce55317943?w=800&q=80",
  },
  {
    id: "6",
    title: "Science Exploration",
    category: "activities",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80",
  },
  {
    id: "7",
    title: "Sports Day",
    category: "events",
    image:
      "https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=800&q=80",
  },
  {
    id: "8",
    title: "School Building",
    category: "campus",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80",
  },
];

export const galleryCategories = [
  { id: "all", label: "All" },
  { id: "classroom", label: "Classrooms" },
  { id: "activities", label: "Activities" },
  { id: "events", label: "Events" },
  { id: "campus", label: "Campus" },
] as const;
