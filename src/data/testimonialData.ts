// testimonialData.ts
export interface Testimonial {
  id: number;
  name: string;
  designation: string;
  description: string;
  imageUrl: string;
}

export const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    description:
      "This app has transformed the way I work! The user experience is outstanding.",
    imageUrl: "/icons/user-profle-placeholder.png",
  },
  {
    id: 2,
    name: "Jane Smith",
    designation: "Product Manager",
    description:
      "I love the simplicity and speed of the app. It’s very intuitive!",
    imageUrl: "/icons/user-profle-placeholder.png",
  },
  {
    id: 3,
    name: "Michael Brown",
    designation: "Designer",
    description: "The design is clean and modern. Great job on the UI!",
    imageUrl: "/icons/user-profle-placeholder.png",
  },
  {
    id: 4,
    name: "Emily Johnson",
    designation: "CEO",
    description: "A game-changer for our business. I highly recommend it!",
    imageUrl: "/icons/user-profle-placeholder.png",
  },
];
