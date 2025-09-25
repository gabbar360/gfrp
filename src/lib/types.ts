export type Material = {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  longDescription: string; // HTML or markdown
  category: string;
  application: string[];
  images: string[];
  datasheetUrl?: string;
  properties: Record<string, number | string | null>;
  certifications?: string[];
  downloads?: { label: string; url: string }[];
  reviews?: { author: string; rating: number; text: string; date: string }[];
  relatedSlugs?: string[];
  createdAt: string;
  updatedAt: string;
};

export type CaseStudy = {
  id: string;
  slug: string;
  title: string;
  summary: string;
  content: string;
  date: string;
  category: string;
  materials: string[]; // material slugs
  images: string[];
  tags: string[];
  author: string;
};

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
  featuredImage?: string;
  readTime: number;
};

export type ContactFormData = {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  subject: string;
  message: string;
  materialInterest?: string[];
};
