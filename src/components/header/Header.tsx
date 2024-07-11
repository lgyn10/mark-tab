import { Center, Image, Switch } from '@chakra-ui/react';
import { useEffect } from 'react';
import styled from 'styled-components';
import { useStyleStore } from '../../store/styleSore';
const Header = () => {
  const { isDarkTheme, setStyles } = useStyleStore();

  const changeThemeToggle = async () => {
    setStyles(!isDarkTheme);
  };

  useEffect(() => {
    window.localStorage.setItem('marktab-theme', String(isDarkTheme));
    // console.log('changeThemeToggle: ', window.localStorage.getItem('marktab-theme'));
  }, [isDarkTheme]);

  return (
    <>
      <StyledCenter>
        <StyledA href='https://www.google.com'>
          <StyledImage src='/google-logo.png' />
        </StyledA>
      </StyledCenter>
      <StyledDiv>
        <StyledSwitch size='md' colorScheme='gray' onChange={changeThemeToggle} isChecked={isDarkTheme} />
      </StyledDiv>
    </>
  );
};

export default Header;

const StyledCenter = styled(Center)`
  min-height: 3rem;
  height: 5rem;
  background-color: transparent;
`;

const StyledImage = styled(Image)`
  height: 5rem;
  min-height: 3rem;
  -moz-window-dragging: no-drag;
  -webkit-user-drag: none;
  transition: all 0.2s;
`;

const StyledA = styled.a`
  :hover {
    scale: 1.1;
  }
`;
const StyledDiv = styled.div`
  position: absolute;
  text-align: right;
  top: 2rem;
  right: 3rem;
`;
const StyledSwitch = styled(Switch)``;
