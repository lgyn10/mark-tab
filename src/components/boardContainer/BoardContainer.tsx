import { Container } from '@chakra-ui/react';
import { MasonryGrid } from '@egjs/react-grid';
import { useEffect } from 'react';
import styled from 'styled-components';
import { bookmarkStore } from '../../store/bookmarkStore';
import Board from '../board/Board';

const BoardContainer = () => {
  const { bookmarkNode, fetchBookmarkTreeNode } = bookmarkStore();
  const boards = bookmarkNode?.children;

  useEffect(() => {
    fetchBookmarkTreeNode();
    console.log('fetchBookmarkTreeNode activated');
  }, []);

  useEffect(() => {
    console.log('rerendering');
  }, [bookmarkNode]);

  return (
    <StyledContainer bg='white'>
      {/* @ts-ignore */}
      <StyledMasonryGrid
        gap={15}
        defaultDirection={'end'}
        align={'center'}
        column={0}
        columnSize={0}
        columnSizeRatio={0}
      >
        {boards &&
          boards.map((board) => {
            if (board.children) {
              return <Board boardTitle={board.title} boardId={board.id} key={board.id} />;
            }
          })}
      </StyledMasonryGrid>
    </StyledContainer>
  );
};

export default BoardContainer;

const StyledContainer = styled(Container)<{ containerBorderColor: string; containerBackgroundColor: string }>`
  padding: 0.8rem !important;
  height: max-content;
  max-width: calc(90vw + 55.6px) !important;
  min-width: 40rem;
  border-radius: 1rem;
  display: flex;
  justify-content: space-around;
  // border: 1.5px solid ${(props) => props.theme.containerBorderColor};
  // background-color: ${(props) => props.theme.containerBackgroundColor} !important;
  background-color: transparent !important;
`;

const StyledMasonryGrid = styled(MasonryGrid)`
  &&& {
    width: 100%;
  }
`;
