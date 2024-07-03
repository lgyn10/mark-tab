import { Card, CardHeader, Heading, List } from '@chakra-ui/react';
import styled from 'styled-components';
import Item from '../item/Item';

const Board = (props: { title: string }) => {
  const itemArr = ['item1', '아이템2', 'item3', 'item4', 'item', 'item', 'item', 'item', 'item'];
  return (
    <Card borderRadius='8px' bg='#dddddd'>
      <StyledCardHeader>
        <Heading size='xm' textAlign='center'>
          {props.title}
        </Heading>
      </StyledCardHeader>
      <StyledList>
        {itemArr.map((item, idx) => (
          <Item item={item} key={idx} />
        ))}
      </StyledList>
    </Card>
  );
};

export default Board;

const StyledCardHeader = styled(CardHeader)`
  &&& {
    padding: 0.5rem;
  }
`;

const StyledList = styled(List)`
  margin-bottom: 0.5rem;
`;
