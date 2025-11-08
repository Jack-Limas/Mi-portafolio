export type Locale = "en" | "es";

export type AppData = {
  site: { title: string; year: number };
  hero: {
    name: string;
    title: string;
    bio: string;
    photo: string;
    cta: { projectsAnchor: string; cv: string };
    skills: string[];
  };
  about: {
    short: string;
    hobbies: { title: string; text: string }[];
  };
  projects: {
    id: string;
    title: string;
    description: string;
    image: string;
    tags: string[];
    demo: string;
    repo: string;
  }[];
  testimonials: {
    id: string;
    name: string;
    role: string;
    avatar: string;
    text: string;
  }[];
  experience: { year: string; title: string; desc: string }[];
  contact: {
    email: string;
    phone: string;
    social: { github: string; linkedin: string; instagram: string };
  };
  footer: { copy: string };
};

export type Dictionary = Record<Locale, AppData>;
