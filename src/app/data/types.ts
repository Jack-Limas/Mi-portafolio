export type Site = { title: string; year: number; };

export type Hero = {
  name: string;
  title: string;
  bio: string;
  photo: string;
  cta: { projectsAnchor: string; cv: string };
  skills: string[];
};

export type Hobby = { title: string; text: string; };

export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demo?: string;
  repo?: string;
};

export type Testimonial = { 
  id: string; 
  name: string; 
  role: string; 
  avatar?: string; 
  text: string; 
};

export type ExperienceItem = { year: string; title: string; desc: string; };

export type Contact = { email: string; phone: string; social: Record<string,string>; };

export type AppData = {
  site: Site;
  hero: Hero;
  about: { short: string; hobbies: Hobby[] };
  projects: Project[];
  testimonials: Testimonial[];
  experience: ExperienceItem[];
  contact: Contact;
  footer: { copy: string };
};
