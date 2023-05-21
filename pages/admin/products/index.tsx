import Head from 'next/head';
import Link from 'next/link';

import { getSession, withPageAuthRequired } from '@auth0/nextjs-auth0';

import { dehydrate, QueryClient } from '@tanstack/react-query';
import { fetchProducts } from '@/lib/api-functions/server/products/queries';
import { STORAGE_KEY } from '@/lib/tq/products/settings';
import { useDelete } from '@/lib/tq/products/mutations';

import { checkPermissions } from '@/lib/api-functions/server/utils';
import settings from '@/lib/api-functions/server/permissions';

import { Button, EditIcon } from '@/components/mui';

import Layout from '@/components/Layout';
import Heading from '@/components/Heading';
import QueryBoundaries from '@/components/QueryBoundaries';
import ProductList from '@/components/ProductList';

export default function AdminProductList({ user }: Record<string, any>) {
  const removeMutation = useDelete();

  const canAdd = checkPermissions(
    user,
    settings.identifier,
    settings.permissions.products.create,
  );

  const canUpdate = checkPermissions(
    user,
    settings.identifier,
    settings.permissions.products.update,
  );

  const canRemove = checkPermissions(
    user,
    settings.identifier,
    settings.permissions.products.remove,
  );

  const removeHandler = (id: string) => {
    removeMutation.mutate(id);
  };

  return (
    <>
      <Head>
        <title>Admin Add Product</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Heading component="h2" variant="h4">
          Products
        </Heading>
        {canAdd && (
          <Button
            variant="contained"
            component={Link}
            href={`/admin/products/add`}
          >
            Add Product
          </Button>
        )}
        <QueryBoundaries>
          <ProductList
            deleteHandler={removeHandler}
            canUpdate={canUpdate}
            canRemove={canRemove}
            canBuy={false}
          />
        </QueryBoundaries>
      </Layout>
    </>
  );
}

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(context) {
    // Getting user data from Auth0
    const session: any = await getSession(context.req, context.res);

    const products = await fetchProducts().catch((err) => console.log(err));

    const queryClient = new QueryClient();
    // If this was remote we'd use 'prefetchQuery' but as we know it we use 'setQueryData'
    await queryClient.setQueryData(
      [STORAGE_KEY],
      JSON.parse(JSON.stringify(products)),
    );

    return {
      props: {
        dehydratedState: dehydrate(queryClient),
        user: session.user,
      },
    };
  },
});
