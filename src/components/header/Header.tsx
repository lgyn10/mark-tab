import { Center, Image } from '@chakra-ui/react';
import styled from 'styled-components';
const Header = () => {
  return (
    <>
      <StyledCenter>
        <StyledA href='https://www.google.com'>
          <StyledImage src='/google-logo.png' />
        </StyledA>
      </StyledCenter>
    </>
  );
};

export default Header;

const StyledCenter = styled(Center)`
  min-height: 3rem;
  background-color: #bee3f8;
  height: 10vh;
`;

const StyledImage = styled(Image)`
  height: 10vh;
  min-height: 5rem;
  -moz-window-dragging: no-drag;
  -webkit-user-drag: none;
  transition: all 0.2s;
`;

const StyledA = styled.a`
  :hover {
    scale: 1.1;
  }
`;
