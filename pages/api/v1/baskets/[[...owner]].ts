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
    baskets: {
      create: createBaskets,
      read: readBaskets,
      update: updateBaskets,
      remove: removeBaskets,
    },
  },
} = permissions;

import {
  updateBasket,
  removeBasket,
  removeItemFromBasket,
  getBaskets,
  getOwnBasket,
  addBasket,
  addToUserBasket,
} from '@/lib/api-functions/server/baskets/controllers';

const baseRoute = '/api/v1/baskets/:owner?/:item?';

const handler = nc<NextApiRequest, NextApiResponse>({
  onError: (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).end('Internal Server Error');
  },
  onNoMatch: (req, res) => {
    res.status(404).end('Not Found');
  },
  attachParams: true,
})
  .use(async (req: Request, res: Response, next) => {
    try {
      const session = await getSession(req, res);
      const user = session ? session.user : null;
      next();
    } catch (err) {
      return handleUnauthorisedAPICall(res);
    }
  })
  .get(baseRoute, async (req: Request, res: Response) => {
    const { owner } = req.params;
    if (owner === 'own') {
      return getOwnBasket(req, res);
    }
    const isAdmin = checkRole(req.user, identifier, admin);

    if (!owner && !isAdmin) {
      return handleUnauthorisedAPICall(res);
    }
    getBaskets(req, res);
  })
  .post(baseRoute, async (req: Request, res: Response) => {
    const { owner } = req.params;
    if (owner === 'own') {
      return addToUserBasket(req, res);
    }
    if (!checkPermissions(req.user, identifier, createBaskets)) {
      return handleUnauthorisedAPICall(res);
    }
    addBasket(req, res);
  })
  .put(baseRoute, async (req: Request, res: Response) => {
    // const {owner} = req.params;
    // if(owner === 'own') {
    //   return getOwnBasket(req, res);
    // }
    if (!checkPermissions(req.user, identifier, updateBaskets)) {
      return handleUnauthorisedAPICall(res);
    }
    updateBasket(req, res);
  })
  .delete(baseRoute, async (req: Request, res: Response) => {
    const { owner } = req.params;
    if (owner === 'own') {
      return removeItemFromBasket(req, res);
    }
    if (!checkPermissions(req.user, identifier, removeBaskets)) {
      return handleUnauthorisedAPICall(res);
    }
    removeBasket(req, res);
  });

export default handler;
