export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sunita Sharma",
    role: "Parent of UKG Student",
    content:
      "Prerana Gyan Batika has been a wonderful choice for our family. The Montessori environment has helped our daughter become more confident, curious, and independent. The teachers truly care about each child.",
    rating: 5,
  },
  {
    id: "2",
    name: "Rajesh Thapa",
    role: "Parent of Grade 2 Student",
    content:
      "We appreciate the individual attention our son receives and the strong values the school instills. The blend of academic excellence and creative learning is exactly what we were looking for in Kathmandu.",
    rating: 5,
  },
  {
    id: "3",
    name: "Anita Gurung",
    role: "Parent of Nursery Student",
    content:
      "From the very first day, our child felt welcomed and happy. The campus is safe, clean, and beautifully designed for young learners. We highly recommend this school to other parents.",
    rating: 5,
  },
  {
    id: "4",
    name: "Bikash K.C.",
    role: "Parent of LKG Student",
    content:
      "The school's commitment to Montessori principles is evident in everything they do. Our daughter loves going to school every day, and we can see remarkable growth in her social and academic skills.",
    rating: 5,
  },
];
