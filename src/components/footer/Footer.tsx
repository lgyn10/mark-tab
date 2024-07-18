import { Center } from '@chakra-ui/react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <StyledCenter>
      <StyledA href='https://www.flaticon.com/free-icons/bookmark' title='bookmark icons'>
        Bookmark icons created by inkubators - Flaticon
      </StyledA>
    </StyledCenter>
  );
};

export default Footer;

const StyledCenter = styled(Center)<{ mainBackgroundColor: string; boardHeadingColor: string }>`
  background-color: ${(props) => props.mainBackgroundColor};
  height: 1.5rem;
`;

const StyledA = styled.a`
  color: #778491;
`;
