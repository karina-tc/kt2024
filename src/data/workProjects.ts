// src/data/workProjects.ts

export interface Project {
    year: string;
    brow_text: string;
    title: string;
    body: string;
    image?: string;
    alt_text?: string;
    href?: string;
  }
  
  export const workProjects: Project[] = [
    {
      year: "2024",
      brow_text: "Tropic",
      title: "Building a product-led insights platform for finance and procurement teams",
      body: "FinTech · 2023 - Current",
      image: "https://placehold.co/400X200",
      alt_text: "Project image",
      href: "#"
    },
    {
      year: "2023",
      brow_text: "Mystery + Glue",
      title: "Pouring data into workplace interactions for HR teams to build a sense of community in their employees",
      body: "Events & HR · 2023 - 2022",
      image: "https://placehold.co/400X200",
      alt_text: "Project image",
      href: "#"
    },
    {
      year: "2022",
      brow_text: "Teikametrics",
      title: "Restructuring PPC advertising through empathy for medium and small size businesses",
      body: "AdTech · 2020 - 2022",
      image: "https://placehold.co/400X200",
      alt_text: "Project image",
      href: "#"
    },
    {
      year: "2020",
      brow_text: "Rejoiner",
      title: "Making foundational changes to email marketing through rule based, fluid and intuitive workflows",
      body: "MarTech · 2015 - 2020",
      image: "https://placehold.co/400X200",
      alt_text: "Project image",
      href: "#"
    },
  ];