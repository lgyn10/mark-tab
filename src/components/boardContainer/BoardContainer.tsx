import { Container } from '@chakra-ui/react';
import { MasonryGrid } from '@egjs/react-grid';
import { useEffect } from 'react';
import styled from 'styled-components';
import { bookmarkStore } from '../../store';
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
        {boards && boards.map(({ id, title }) => <Board boardTitle={title} boardId={id} key={id} />)}
      </StyledMasonryGrid>
    </StyledContainer>
  );
};

export default BoardContainer;

const StyledContainer = styled(Container)`
  padding: 0.8rem !important;
  height: max-content;
  max-width: calc(90vw + 55.6px) !important;
  min-width: 40rem;
  border-radius: 1rem;
  border: 1.5px solid #e2e1ea;
  display: flex;
  justify-content: space-around;
  margin-bottom: 3vh;
`;

const StyledMasonryGrid = styled(MasonryGrid)`
  &&& {
    width: 100%;
  }
`;
