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
    console.log('changeThemeToggle: ', window.localStorage.getItem('marktab-theme'));
  }, [isDarkTheme]);

  return (
    <>
      <StyledCenter>
        <StyledA href='https://www.google.com'>
          <StyledImage src='/google-logo.png' />
        </StyledA>
      </StyledCenter>
      <StyledSwitch size='md' colorScheme='gray' onChange={changeThemeToggle} isChecked={isDarkTheme} />
    </>
  );
};

export default Header;

const StyledCenter = styled(Center)`
  min-height: 3rem;
  height: 10vh;
  background-color: transparent;
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

const StyledSwitch = styled(Switch)`
  top: -3rem;
  left: 95vw;
`;
