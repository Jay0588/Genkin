export type Service = {
  title: string;
  description: string;
  highlights: string[];
};

export type Project = {
  id: string;
  name: string;
  location: string;
  category: "Residential" | "Commercial" | "Institutional" | "Renovation";
  description: string;
  year: string;
  imageUrl: string;
};

export const services: Service[] = [
  {
    title: "Civil & Structural Works",
    description:
      "End-to-end structural design and execution for villas, apartments, and institutional buildings.",
    highlights: [
      "Reinforced concrete structures",
      "Foundations & retaining walls",
      "Infrastructure & drainage works",
    ],
  },
  {
    title: "General Building Construction",
    description:
      "Turn-key building solutions from concept to handover for residential and commercial projects.",
    highlights: [
      "Design–build delivery",
      "Quality finishes & detailing",
      "Coordination with consultants",
    ],
  },
  {
    title: "Tiles, Granite & Finishing",
    description:
      "High-end tile and granite installation for premium interiors, hotels, and residences.",
    highlights: [
      "Precision cutting & leveling",
      "Wet areas & external cladding",
      "Hotel-grade finishing standards",
    ],
  },
  {
    title: "Renovations & Extensions",
    description:
      "Upgrading existing properties while maintaining structural integrity and aesthetics.",
    highlights: [
      "Structural assessment & retrofitting",
      "Extensions & reconfigurations",
      "Live-site work with minimal disruption",
    ],
  },
];

export const projects: Project[] = [
  {
    id: "coconut-villas",
    name: "Coconut Villas",
    location: "Fairdeal Properties",
    category: "Residential",
    description:
      "Luxury residential villas with premium finishes and coordinated MEP services.",
    year: "2023",
    imageUrl: "/images/projects/coconut-villas.jpg",
  },
  {
    id: "crawford-school",
    name: "Crawford International School",
    location: "Ark Construction",
    category: "Institutional",
    description:
      "Institutional facility with complex circulation and robust structural system.",
    year: "2022",
    imageUrl: "/images/projects/crawford-school.jpg",
  },
  {
    id: "rumaisa-residency",
    name: "Rumaisa Residency – Tiles & Granite",
    location: "Rumaisa Residency",
    category: "Residential",
    description:
      "High-spec tile and granite works for residential development including lobbies and common areas.",
    year: "2021",
    imageUrl: "/images/projects/rumaisa-residency.jpg",
  },
  {
    id: "redhill-brooks",
    name: "Redhill Brooks – 43 Villas",
    location: "Limuru Road",
    category: "Residential",
    description:
      "Large-scale villa community with coordinated site works and boundary treatments.",
    year: "2020",
    imageUrl: "/images/projects/redhill-brooks.jpg",
  },
];
