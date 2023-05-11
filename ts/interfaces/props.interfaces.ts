import { ReactNode } from 'react';

export interface Props {
  children: ReactNode;
}

export interface ContactFormData {
  from: string;
  subject: string;
  message: string;
}

export interface SingleBlogPost {
  body: string;
  createdAt: string;
  title: string;
  id: string;
  slug: string;
  updatedAt: string;
  heroImage: {
    url: string;
    width: number;
    height: number;
  };
}
