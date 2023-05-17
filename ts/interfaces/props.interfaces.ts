import { ReactNode } from 'react';
import { Schema } from 'yup';
import Request from 'express';

export interface Props {
  children: ReactNode;
}

declare global {
  namespace Express {
    interface Request {
      user: Record<string, any>;
    }
  }
}

export interface ContactFormData {
  from: string;
  subject: string;
  message: string;
}

export interface ProductFormData {
  _id: string;
  title: string;
  description?: string;
  image: string;
  price: number;
  quantity: number;
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
  description?: string;
  image: string;
  price: number;
  quantity: number;
}

export interface ProductListType {
  deleteHandler: () => {};
  headingLevel: number;
  canUpdate: boolean;
  canRemove: boolean;
  canBuy: boolean;
}
