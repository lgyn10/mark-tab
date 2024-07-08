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
        <StyledHeading textAlign='center'>{boardTitle}</StyledHeading>
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
    border: 1px solid #c9cacf;
    width: 30vw;
    min-width: 280px;
    background-color: transparent;
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

const StyledHeading = styled(Heading)`
  &&& {
    color: #353535;
    font-size: 18px;
    font-weight: bold;
    padding-bottom: 5px;
    border-bottom: 1px solid #eaebef;
  }
`;
