import { ReactNode } from 'react';
import { Schema } from 'yup';

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
export interface BasketType {
  owner: string;
  // items: Schema.Types.ObjectID;
}
export interface OrderType {
  owner: string;
  // items:  Schema.Types.ObjectID,
  receiptURL: string;
}

export interface ProductType {
  _id: string;
  title: string;
  image: string;
  price: number;
  quantity: number;
}
