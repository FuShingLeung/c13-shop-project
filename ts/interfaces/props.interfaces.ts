import { ReactNode } from 'react';
import { Schema } from 'yup';
import Request from 'express';
import { ObjectId } from 'mongoose';

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
  image: string;
  title: string;
  description?: string;
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
  items: ObjectId;
  receiptURL: string;
  _id?: string;
  product?:
    | {
        _id?: string;
        title?: string;
        image?: string;
        price?: number;
        quantity?: number;
      }
    | undefined;
  deleteHandler?: (id: string) => void;
  headingLevel?: number;
}
export interface OrderType {
  owner: string;
  items: ObjectId;
  receiptURL: string;
  _id?: string;
  product?:
    | {
        _id?: string;
        title?: string;
        image?: string;
        price?: number;
        quantity?: number;
      }
    | undefined;
  deleteHandler?: (id: string) => void;
  headingLevel?: number;
}

export interface ProductType {
  image: '';
  title: '';
  description: '';
  price: '';
  quantity: '';
}

export interface ProductListType {
  deleteHandler: () => {};
  headingLevel: number;
  canUpdate: boolean;
  canRemove: boolean;
  canBuy: boolean;
}

export interface UserType {
  nickname: string;
  name: string;
  picture: string;
  email: string;
  sub: string;
}
