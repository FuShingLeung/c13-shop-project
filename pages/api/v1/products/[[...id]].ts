import nc from 'next-connect';
import { NextApiRequest, NextApiResponse } from 'next';

import {
  updateProduct,
  removeProduct,
  getProducts,
  addProduct,
} from '@/lib/api-functions/server/products/controllers';
import { Request, Response } from 'express';

const baseRoute = '/api/v1/products/:id?';

const handler = nc<NextApiRequest, NextApiResponse>({
  onError: (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).end('Something broke!');
  },
  onNoMatch: (req, res) => {
    res.status(404).end('Page is not found');
  },
  attachParams: true,
})
  // .use(someMiddleware())
  .get(baseRoute, async (req: Request, res: Response) => {
    getProducts(req, res);
  })
  .post(baseRoute, async (req: Request, res: Response) => {
    addProduct(req, res);
  })
  .put(baseRoute, async (req: Request, res: Response) => {
    updateProduct(req, res);
  })
  .delete(baseRoute, async (req: Request, res: Response) => {
    removeProduct(req, res);
  });

export default handler;
