import { Container, SimpleGrid } from '@chakra-ui/react';
import styled from 'styled-components';
import { bookmarkStore } from '../../store';
import Board from '../board/Board';

const BoardContainer = () => {
  const { bookmarkNode } = bookmarkStore();
  return (
    <StyledContainer bg='white'>
      <StyledSimpleGrid columns={{ base: 2, md: 3, lg: 3 }} spacing={3}>
        {bookmarkNode?.children!.map(({ id, title }) => (
          <Board boardTitle={title} boardId={id} key={id} />
        ))}
      </StyledSimpleGrid>
    </StyledContainer>
  );
};

export default BoardContainer;

const StyledContainer = styled(Container)`
  padding: 0.8rem !important;
  margin-top: 2vh;
  height: max-content;
  max-width: 90vw !important;
  min-width: 40rem;
  border-radius: 1rem;
  box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
  display: flex;
  justify-content: space-around;
`;

const StyledSimpleGrid = styled(SimpleGrid)`
  padding: 0;
  margin: 0;
  width: 100%; /* 추가된 부분 */
`;
