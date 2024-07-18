import { Center } from '@chakra-ui/react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <StyledCenter>
      <StyledA href='https://www.flaticon.com/free-icons/bookmark' title='bookmark icons'>
        Bookmark icons created by inkubators - Flaticon |&nbsp;
      </StyledA>
      <StyledA href='https://www.flaticon.com/free-icons/settings' title='settings icons'>
        Settings icons created by Freepik - Flaticon
      </StyledA>
    </StyledCenter>
  );
};

export default Footer;

const StyledCenter = styled(Center)<{ mainBackgroundColor: string; boardHeadingColor: string }>`
  background-color: ${(props) => props.mainBackgroundColor};
  height: 1.5rem;
  display: flex;
  flex-direction: row;
  gap: 0;
`;

const StyledA = styled.a`
  padding: 0;
  margin: 0;
  color: #778491;
`;
