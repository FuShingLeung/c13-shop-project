// import { addOrderSchema, updateOrderSchema } from '@/lib/validation/';
import {
  fetchOrder,
  fetchOrders,
  add,
  update,
  remove,
} from '@/lib/api-functions/server/orders/queries';
import { Request, Response } from 'express';

const getOrders = async (req: Request, res: Response) => {
  const { owner } = req.params;
  const { id } = req.params;
  console.log('🚀 ~ file: controllers.js:9 ~ getOrders ~ id:', id);

  try {
    let data = [];
    if (id) {
      data = await fetchOrder(id);
    } else {
      data = await fetchOrders();
    }
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

const addOrder = async (req: Request, res: Response) => {
  let orderData = { ...req.body };

  if (orderData.image === '') {
    delete orderData.image;
  }
  console.info(orderData);

  // try {
  // orderData = await addOrderSchema.validate(orderData);
  // } catch (err) {
  //   console.log(err);
  //   return res.status(400).json(err);
  // }

  try {
    const result = await add(orderData);
    res.status(201).json(result);
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
};

const updateOrder = async (req: Request, res: Response) => {
  const { id } = req.params;
  console.log(id);

  if (!id) {
    return res.status(400).json({ message: 'No id provided to update' });
  }

  let updates = { ...req.body };

  // try {s

  try {
    const result: any = await update(id, updates);
    if (result.n === 0) return res.status(404).send({ message: 'Not Found' });
    return res.status(200).send({ message: 'Updated' });
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
};

const removeOrder = async (req: Request, res: Response) => {
  const { id } = req.params;
  console.log('🚀 ~ file: controllers.js:99 ~ removeOrder ~ id:', id);

  if (!id) {
    return res.status(400).json({ message: 'No id provided to delete' });
  }

  const query = {
    _id: id,
  };

  // if (!isAdmin) {
  //   query.owner = req.user.sub;
  // }

  try {
    const result: any = await remove(id);
    if (result.n === 0) return res.status(404).send({ message: 'Not Found' });
    res.status(204).send();
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
};

export { getOrders, addOrder, updateOrder, removeOrder };
