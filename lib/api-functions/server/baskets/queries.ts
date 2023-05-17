import Basket from '@/lib/api-functions/server/baskets/model';
import { BasketType } from '@/ts/interfaces/props.interfaces';

export const fetchBaskets = async (query = {}) => {
  return await Basket.find(query).exec();
};

export const fetchBasket = async (id: string) => {
  return await Basket.findById(id).exec();
};

export const add = async (data: BasketType) => {
  const newBasket = new Basket(data);
  const result = await newBasket.save();
  return result;
};

export const getUserBasketQuery = async (
  sub: any,
  createIfNotFound = false,
) => {
  const results = await Basket.findOne({ owner: sub }).populate('items').exec();

  if (!results && createIfNotFound) {
    return await add({ owner: sub });
  }
  return results;
};

export const update = async (id: string, updates: BasketType) => {
  return await Basket.updateOne({ _id: id }, updates);
};

export const remove = async (id: string) => {
  return await Basket.deleteOne({ _id: id });
};
