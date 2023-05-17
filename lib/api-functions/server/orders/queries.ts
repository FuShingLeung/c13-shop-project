import Order from '@/lib/api-functions/server/orders/model';
import { OrderType } from '@/ts/interfaces/props.interfaces';

export const fetchOrders = async (query = {}) => {
  return await Order.find(query).exec();
};

export const fetchOrder = async (id: string) => {
  return await Order.findById(id).exec();
};

export const add = async (data: OrderType) => {
  const newOrder = new Order(data);
  const result = await newOrder.save();
  return result;
};

export const update = async (id: string, updates: OrderType) => {
  return await Order.updateOne({ _id: id }, updates);
};

export const remove = async (id: string) => {
  return await Order.deleteOne({ _id: id });
};
