import Head from 'next/head';
import Image from 'next/image';

import { Button, EditIcon } from '@/components/mui';

import Layout from '@/components/Layout';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <h1>Contact Us</h1>
        <Button variant="contained">
          Button <EditIcon />
        </Button>
      </Layout>
    </>
  );
}
