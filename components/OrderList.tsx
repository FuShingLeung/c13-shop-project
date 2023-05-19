import { useOrders } from '@/lib/tq/orders/queries';
import { List, ListItem } from '@/components/mui';
import Order from '@/components/Order';
import Paragraph from '@/components/Paragraph';
import { OrderType, ProductFormData } from '@/ts/interfaces/props.interfaces';

const OrderList = ({
  deleteHandler = (id: string) => {},
  headingLevel = 2,
}) => {
  const { data: orders } = useOrders();
  if (!orders.length) return <Paragraph>No orders to show</Paragraph>;
  return (
    <List
      component="ol"
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(400px,1fr))',
      }}
    >
      {orders.map((order: OrderType) => (
        <ListItem key={order._id} component="li">
          <Order
            product={order}
            deleteHandler={deleteHandler}
            headingLevel={headingLevel}
          />
        </ListItem>
      ))}
    </List>
  );
};

export default OrderList;
