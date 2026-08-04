export interface Program {
  id: string;
  title: string;
  ageGroup: string;
  description: string;
  highlights: string[];
  image: string;
}

export const programs: Program[] = [
  {
    id: "ecd",
    title: "Early Childhood Development (ECD)",
    ageGroup: "2.5 – 3.5 years",
    description:
      "Our ECD program introduces young learners to a nurturing Montessori environment where curiosity, independence, and social skills begin to flourish through hands-on exploration.",
    highlights: [
      "Sensory-based learning activities",
      "Language and motor skill development",
      "Social interaction and emotional growth",
      "Child-safe Montessori materials",
    ],
    image:
      "/images/programs/earlychildhood.jpg",
  },
  {
    id: "nursery",
    title: "Nursery",
    ageGroup: "3.5 – 4 years",
    description:
      "Nursery students engage in structured Montessori activities that build foundational literacy, numeracy, and practical life skills in a joyful, age-appropriate setting.",
    highlights: [
      "Phonics and pre-reading exercises",
      "Number sense through Montessori tools",
      "Creative arts and music",
      "Daily routines and self-care skills",
    ],
    image:
      "/images/programs/nursary.jpg",
  },
  {
    id: "lkg",
    title: "Lower Kindergarten (LKG)",
    ageGroup: "4 – 5 years",
    description:
      "LKG bridges early childhood and formal learning with Montessori methods that encourage critical thinking, collaboration, and a love for discovery.",
    highlights: [
      "Reading readiness and vocabulary building",
      "Mathematical concepts with manipulatives",
      "Science and nature exploration",
      "Group projects and presentations",
    ],
    image:
      "/images/programs/lkg.jpg",
  },
  {
    id: "ukg",
    title: "Upper Kindergarten (UKG)",
    ageGroup: "5 – 6 years",
    description:
      "UKG prepares children for primary grades through advanced Montessori work, strengthening academic foundations while preserving creativity and confidence.",
    highlights: [
      "Advanced literacy and writing skills",
      "Problem-solving and logical reasoning",
      "Cultural studies and Nepali heritage",
      "School readiness and leadership activities",
    ],
    image:
      "/images/programs/ukg.jpg",
  },
  {
    id: "grade-1-3",
    title: "Grade 1 – 3",
    ageGroup: "6 – 9 years",
    description:
      "Our primary grades blend Montessori principles with a structured curriculum, fostering academic excellence, character development, and lifelong learning habits.",
    highlights: [
      "Integrated subject-based learning",
      "Individualized progress tracking",
      "Extracurricular and sports activities",
      "Values education and community service",
    ],
    image:
      "/images/programs/1-3.jpg",
  },
];
