import nc from 'next-connect';
import { NextApiRequest, NextApiResponse } from 'next';
import { Request, Response, request } from 'express';

import { getSession } from '@auth0/nextjs-auth0';

import {
  handleUnauthorisedAPICall,
  checkPermissions,
  checkRole,
} from '@/lib/api-functions/server/utils';

import permissions from '@/lib/api-functions/server/permissions';

const {
  identifier,
  roles: { admin },
  permissions: {
    orders: {
      create: createOrders,
      read: readOrders,
      update: updateOrders,
      remove: removeOrders,
    },
  },
} = permissions;

import {
  updateOrder,
  removeOrder,
  getOrders,
  addOrder,
} from '@/lib/api-functions/server/orders/controllers';

const baseRoute = '/api/v1/orders/:owner?';

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
    getOrders(req, res);
  })
  .post(baseRoute, async (req: Request, res: Response) => {
    if (!checkPermissions(req.user, identifier, createOrders)) {
      return handleUnauthorisedAPICall(res);
    }
    addOrder(req, res);
  })
  .put(baseRoute, async (req: Request, res: Response) => {
    if (!checkPermissions(req.user, identifier, updateOrders)) {
      return handleUnauthorisedAPICall(res);
    }
    updateOrder(req, res);
  })
  .delete(baseRoute, async (req: Request, res: Response) => {
    if (!checkPermissions(req.user, identifier, removeOrders)) {
      return handleUnauthorisedAPICall(res);
    }
    removeOrder(req, res);
  });

export default handler;
