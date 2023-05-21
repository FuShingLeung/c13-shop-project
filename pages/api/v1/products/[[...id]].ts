import nc from 'next-connect';
import { NextApiRequest, NextApiResponse } from 'next';
import { Request, Response } from 'express';

import { getSession } from '@auth0/nextjs-auth0';

import {
  handleUnauthorisedAPICall,
  checkPermissions,
} from '@/lib/api-functions/server/utils';

import permissions from '@/lib/api-functions/server/permissions';

const {
  identifier,
  permissions: {
    products: {
      create: createProducts,
      update: updateProducts,
      remove: removeProducts,
    },
  },
} = permissions;

import {
  updateProduct,
  removeProduct,
  getProducts,
  addProduct,
} from '@/lib/api-functions/server/products/controllers';

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
  .use(async (req: Request, res: Response, next) => {
    if (req.method === 'GET') {
      return next();
    }
    try {
      const session = await getSession(req, res);
      const user = session ? session.user : null;
      console.log(user);
      next();
    } catch (err) {
      console.log('err', err);
      return handleUnauthorisedAPICall(res);
    }
  })
  .get(baseRoute, async (req: Request, res: Response) => {
    getProducts(req, res);
  })
  .post(baseRoute, async (req: Request, res: Response) => {
    if (!checkPermissions(req.user, identifier, createProducts)) {
      return handleUnauthorisedAPICall(res);
    }
    addProduct(req, res);
  })
  .put(baseRoute, async (req: Request, res: Response) => {
    if (!checkPermissions(req.user, identifier, updateProducts)) {
      return handleUnauthorisedAPICall(res);
    }
    updateProduct(req, res);
  })
  .delete(baseRoute, async (req: Request, res: Response) => {
    if (!checkPermissions(req.user, identifier, removeProducts)) {
      return handleUnauthorisedAPICall(res);
    }
    removeProduct(req, res);
  });

export default handler;
