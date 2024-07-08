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
    <StyledCard>
      <StyledCardHeader>
        <Heading size='xm' textAlign='center'>
          {boardTitle}
        </Heading>
      </StyledCardHeader>
      <StyledList>
        {board.map((node) => (
          <Item key={node.id} itemTitle={node.title} itemUrl={node.url!} itemId={node.id} />
        ))}
      </StyledList>
    </StyledCard>
  );
};

export default Board;

const StyledCard = styled(Card)`
  &&& {
    height: max-content;
    border-radius: 8px;
    background-color: #dcedff;
    width: 30vw;
    min-width: 280px;
  }
`;

const StyledCardHeader = styled(CardHeader)`
  &&& {
    padding: 0.5rem;
  }
`;

const StyledList = styled(List)`
  margin-bottom: 0.5rem;
`;
