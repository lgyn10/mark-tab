import { Card } from '@chakra-ui/react';
import { MasonryGrid } from '@egjs/react-grid';
import React from 'react';
import styled from 'styled-components';

export default function App() {
  return (
    <MasonryGrid
      className='container'
      gap={5}
      defaultDirection={'end'}
      align={'justify'}
      column={3}
      columnSize={0}
      columnSizeRatio={0}
      onRenderComplete={(e) => {
        console.log(e);
      }}
    >
      <StyledCard>1</StyledCard>
      <StyledCard>2</StyledCard>
      <StyledCard>3</StyledCard>
      <StyledCard>4</StyledCard>
      <StyledCard>5</StyledCard>
      <StyledCard>6</StyledCard>
      <StyledCard>7</StyledCard>
      <StyledCard>8</StyledCard>
      <StyledCard>9</StyledCard>
      <StyledCard>10</StyledCard>
    </MasonryGrid>
  );
}

const StyledCard = styled(Card)`
  position: absolute;
  width: 100px;
  height: 200px;
  color: white;
  text-align: center;
`;
