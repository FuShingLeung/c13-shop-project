import Product from '@/lib/api-functions/server/products/model';
import { ProductType } from '@/ts/interfaces/props.interfaces';

export const fetchProducts = async (query = {}) => {
  return await Product.find(query).exec();
};

export const fetchProduct = async (id: string) => {
  return await Product.findById(id).exec();
};

export const add = async (data: ProductType) => {
  const newProduct = new Product(data);
  const result = await newProduct.save();
  return result;
};

export const update = async (id: string, updates: ProductType) => {
  return await Product.updateOne({ _id: id }, updates);
};

export const remove = async (id: string) => {
  return await Product.deleteOne({ _id: id });
};
