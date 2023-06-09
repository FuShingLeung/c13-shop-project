import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { dehydrate, QueryClient } from '@tanstack/react-query';
import {
  fetchProducts,
  fetchProduct,
} from '@/lib/api-functions/server/products/queries';
import { STORAGE_KEY } from '@/lib/tq/products/settings';

import { Button, EditIcon } from '@/components/mui';

import Layout from '@/components/Layout';
import Heading from '@/components/Heading';
import QueryBoundaries from '@/components/QueryBoundaries';
import ProductList from '@/components/ProductList';
import ProductForm from '@/components/forms/ProductForm';

import { useUpdate } from '@/lib/tq/products/mutations';
import { ProductFormData, ProductType } from '@/ts/interfaces/props.interfaces';

export default function UpdateProduct({ ssd }: { ssd: ProductType }) {
  const router = useRouter();
  const updateMutation = useUpdate();

  const submitHandler = (data: ProductFormData) => {
    updateMutation.mutate(data);
    router.push('/admin/products/');
  };

  return (
    <>
      <Head>
        <title>Admin Update Product</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <pre>{JSON.stringify(ssd, null, 2)}</pre>
        <Heading component="h2" variant="h4">
          Edit Product
        </Heading>
        <ProductForm submitHandler={submitHandler} product={ssd} />
      </Layout>
    </>
  );
}

export const getServerSideProps = async ({ params }: any) => {
  const product = await fetchProduct(params.id).catch((err) =>
    console.log(err),
  );
  console.log('product', product);
  return { props: { ssd: JSON.parse(JSON.stringify(product)) } };
};
