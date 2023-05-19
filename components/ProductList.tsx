import { useUser } from '@auth0/nextjs-auth0/client';
import { useProducts } from '@/lib/tq/products/queries';
import { useAddToBasket } from '@/lib/tq/baskets/mutations';
import { List, ListItem } from '@/components/mui';
import Product from '@/components/Product';
import Paragraph from '@/components/Paragraph';

import { ProductFormData } from '@/ts/interfaces/props.interfaces';

const ProductList = ({
  deleteHandler = (id: string) => {},
  headingLevel = 2,
  canUpdate = false,
  canRemove = false,
  canBuy = true,
}) => {
  // const { user } = useUser();
  const mutation = useAddToBasket();

  const { data: products } = useProducts();
  if (!products.length) return <Paragraph>No products to show</Paragraph>;
  return (
    <List
      component="ol"
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(400px,1fr))',
      }}
    >
      {products.map((product: ProductFormData) => (
        <ListItem key={product._id} component="li">
          <Product
            product={product}
            deleteHandler={deleteHandler}
            headingLevel={headingLevel}
            canUpdate={canUpdate}
            canRemove={canRemove}
            // canBuy={!!user && canBuy}
            addToBasket={() => mutation.mutate(product._id)}
          />
        </ListItem>
      ))}
      Test
    </List>
  );
};

export default ProductList;
