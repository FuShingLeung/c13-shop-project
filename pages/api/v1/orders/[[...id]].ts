// // import { Request, Response } from 'express';
// import type { NextApiRequest, NextApiResponse } from 'next';
// import { createRouter, expressWrapper } from 'next-connect';

// import nc from 'next-connect';

// // import {
// //   updateProduct,
// //   removeProduct,
// //   getProducts,
// //   addProduct,
// // } from '@/lib/api-functions/db';

// const handler = nc({
//   onError: (err, req, res, next) => {
//     console.error(err.stack);
//     res.status(500).end('Something broke!');
//   },
//   onNoMatch: (req, res) => {
//     res.status(404).end('Page is not found');
//   },
// })
//   .get((req, res) => {
//     res.send('GET');
//   })
//   .post((req, res) => {
//     res.json({ message: 'POST' });
//   })
//   .put((req, res) => {
//     res.send('PUT');
//   })
//   .delete((req, res) => {
//     res.send('DELETE');
//   });

// export default handler;
// // const router = createRouter<NextApiRequest, NextApiResponse>();

// // router
// //   .get((req, res) => {
// //     res.send('GET');
// //   })
// //   .post((req, res) => {
// //     res.json({ message: 'POST' });
// //   })
// //   .put((req, res) => {
// //     res.send('PUT');
// //   })
// //   .delete((req, res) => {
// //     res.send('DELETE');
// //   });

// // export const config = {
// //   runtime: 'edge',
// // };

// // export default router.handler();
