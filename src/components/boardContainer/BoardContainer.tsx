import { Container } from '@chakra-ui/react';
import { MasonryGrid } from '@egjs/react-grid';
import { useEffect } from 'react';
import styled from 'styled-components';
import { bookmarkStore } from '../../store';
import Board from '../board/Board';

const BoardContainer = () => {
  const { bookmarkNode, fetchBookmarkTreeNode } = bookmarkStore();

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
        {bookmarkNode?.children!.map(({ id, title }) => (
          <Board boardTitle={title} boardId={id} key={id} />
        ))}
      </StyledMasonryGrid>
    </StyledContainer>
  );
};

export default BoardContainer;

const StyledContainer = styled(Container)`
  padding: 0.8rem !important;
  margin-top: 2vh;
  height: max-content;
  max-width: calc(90vw + 55.6px) !important;
  min-width: 40rem;
  border-radius: 1rem;
  box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
  display: flex;
  justify-content: space-around;
`;

const StyledMasonryGrid = styled(MasonryGrid)`
  &&& {
    width: 100%;
  }
`;
