import { Container, SimpleGrid } from '@chakra-ui/react';
import styled from 'styled-components';
import Board from '../board/Board';

const BoardContainer = () => {
  const arr = [
    'title1',
    'title12',
    'title13',
    'title14',
    'title15',
    'title16',
    'title17',
    'title18',
    'title19',
    'title10',
    'title11',
    'title12',
    'title13',
    'title14',
  ];
  return (
    <StyledContainer bg='white'>
      <StyledSimpleGrid columns={{ base: 2, md: 3, lg: 3 }} spacing={3}>
        {arr.map((v, idx) => (
          <Board title={v} key={idx} />
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
