import { useBaskets } from '@/lib/tq/baskets/queries';
import { List, ListItem } from '@/components/mui';
import Basket from '@/components/Basket';
import Paragraph from '@/components/Paragraph';
import { BasketType } from '@/ts/interfaces/props.interfaces';

const BasketList = ({
  deleteHandler = (id: string) => {},
  headingLevel = 2,
}) => {
  const { data: baskets } = useBaskets();
  if (!baskets.length) return <Paragraph>No baskets to show</Paragraph>;
  return (
    <List
      component="ol"
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(400px,1fr))',
      }}
    >
      {baskets.map((basket: BasketType) => (
        <ListItem key={basket._id} component="li">
          <Basket
            product={basket}
            deleteHandler={deleteHandler}
            headingLevel={headingLevel}
          />
        </ListItem>
      ))}
    </List>
  );
};

export default BasketList;
