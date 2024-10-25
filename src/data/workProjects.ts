// src/data/workProjects.ts

export interface Project {
    year: string;
    brow_text: string;
    title: string;
    body: string;
    image?: string;
    alt_text?: string;
  }
  
  export const workProjects: Project[] = [
    {
      year: "2024",
      brow_text: "Tropic",
      title: "Another project title",
      body: "Description of another project...",
      image: "https://placehold.co/400",
      alt_text: "Project image"
    },
    {
      year: "2024",
      brow_text: "Tropic",
      title: "Another project title",
      body: "Description of another project...",
      image: "https://placehold.co/400",
      alt_text: "Project image"
    },
    {
      year: "2023",
      brow_text: "OldCo",
      title: "Past project title",
      body: "Description of a past project...",
      image: "https://placehold.co/400",
      alt_text: "Project image"
    },
    // Add more projects as needed
  ];