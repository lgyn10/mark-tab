import { Center, Image, Switch } from '@chakra-ui/react';
import { Dispatch, SetStateAction, useEffect } from 'react';
import styled from 'styled-components';
import { useStyleStore } from '../../store/styleSore';
const Header = (props: { themeToggle: boolean; setThemeToggle: Dispatch<SetStateAction<boolean>> }) => {
  const { setStyles } = useStyleStore();
  // const [themeToggle, setThemeToggle] = useState(isDarkTheme);

  const changeThemeToggle = async () => {
    props.setThemeToggle((prev) => !prev);
    setStyles(props.themeToggle);
  };

  useEffect(() => {
    window.localStorage.setItem('marktab-theme', String(props.themeToggle));
    console.log('changeThemeToggle: ', window.localStorage.getItem('marktab-theme'));
  }, [props.themeToggle]);

  return (
    <>
      <StyledCenter>
        <StyledA href='https://www.google.com'>
          <StyledImage src='/google-logo.png' />
        </StyledA>
      </StyledCenter>
      <StyledSwitch size='md' colorScheme='gray' onChange={changeThemeToggle} isChecked={props.themeToggle} />
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
