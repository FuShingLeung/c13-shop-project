// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import sgMail from '@sendgrid/mail';
import { Request, Response } from 'express';

const { ADMIN_EMAIL, SENDGRID_API_KEY } = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

const handler = async (req: Request, res: Response) => {
  const { from, subject, message } = req.body;

  // interface Msg {
  //   to: string;
  //   cc: string;
  //   from: string;
  //   subject: string;
  //   text: string;
  //   html: string;
  // }

  const msg = {
    to: from,
    cc: ADMIN_EMAIL,
    from: ADMIN_EMAIL,
    subject,
    text: message,
    html: `<p>${message}<p>`,
  };
  console.log(req.body);
  console.log(msg);

  try {
    await sgMail.send(msg);
    res.status(200).end();
  } catch (err) {
    console.error(err);

    if (err.response) {
      console.error(err.response.body);
    }
    res.status(500).json(err);
  }
};

export default handler;
