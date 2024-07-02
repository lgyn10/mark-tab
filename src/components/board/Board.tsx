import { InfoOutlineIcon } from '@chakra-ui/icons';
import { Card, CardHeader, Heading, List, ListIcon, ListItem } from '@chakra-ui/react';

const Board = (props: { title: string }) => {
  const itemArr = ['item1', '아이템2', 'item3', 'item4', 'item', 'item', 'item', 'item', 'item'];
  return (
    <Card borderRadius='8px' bg='#dddddd'>
      <CardHeader>
        <Heading size='xm' textAlign='center'>
          {props.title}
        </Heading>
      </CardHeader>
      <List>
        {itemArr.map((item, idx) => (
          <ListItem key={idx}>
            <ListIcon as={InfoOutlineIcon} />
            {item}
          </ListItem>
        ))}
      </List>
    </Card>
  );
};

export default Board;
