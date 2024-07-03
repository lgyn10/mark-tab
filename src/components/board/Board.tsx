import { Card, CardHeader, Heading, List } from '@chakra-ui/react';
import styled from 'styled-components';
import { bookmarkStore } from '../../store';
import Item from '../item/Item';

type TBoardProps = {
  boardId: string;
  boardTitle: string;
};

const Board = ({ boardTitle, boardId }: TBoardProps) => {
  const { bookmarkNode } = bookmarkStore();
  const board = bookmarkNode?.children!.find((node) => node.id === boardId)?.children!;
  return (
    <Card borderRadius='8px' bg='#dddddd'>
      <StyledCardHeader>
        <Heading size='xm' textAlign='center'>
          {boardTitle}
        </Heading>
      </StyledCardHeader>
      <StyledList>
        {board.map((node) => (
          <Item itemTitle={node.title} key={node.id} />
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
