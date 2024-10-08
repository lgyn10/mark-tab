import { Card, CardHeader, Heading, List } from '@chakra-ui/react';
import styled from 'styled-components';
import { bookmarkStore } from '../../store/bookmarkStore';
import Item from '../item/Item';

type TBoardProps = {
  boardId: string;
  boardTitle: string;
};

const Board = ({ boardTitle, boardId }: TBoardProps) => {
  const { bookmarkNode } = bookmarkStore();

  // bookmarkNode.children가 없으면 null 반환
  if (!bookmarkNode?.children) return null;

  const items = bookmarkNode.children.find((node) => node.id === boardId)?.children;
  return (
    <StyledCard>
      <StyledCardHeader>
        <StyledHeading textAlign='center'>{boardTitle}</StyledHeading>
      </StyledCardHeader>
      <StyledList>
        {items &&
          items.map(
            (node) => node.url && <Item key={node.id} itemTitle={node.title} itemUrl={node.url} itemId={node.id} />
          )}
      </StyledList>
    </StyledCard>
  );
};

export default Board;

const StyledCard = styled(Card)<{ boardCardBorderColor: string; boardCardBackgroundColor: string }>`
  &&& {
    height: max-content;
    border-radius: 8px;
    border: 1px solid ${(props) => props.theme.boardCardBorderColor};
    width: 30vw;
    min-width: 280px;
    background-color: ${(props) => props.theme.boardCardBackgroundColor};
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

const StyledHeading = styled(Heading)<{ boardCardDividerColor: string; boardHeadingColor: string }>`
  &&& {
    color: ${(props) => props.theme.boardHeadingColor};
    font-size: 18px;
    font-weight: bold;
    padding-top: 0.3rem;
    padding-bottom: 0.7rem;
    border-bottom: 1px solid ${(props) => props.theme.boardCardDividerColor};
  }
`;
