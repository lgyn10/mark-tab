import { Center, Image, useDisclosure } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useLaguageStore } from '../../store/laguageStore';
import { useStyleStore } from '../../store/styleSore';
import SettingModal from './SettingModal';
const Header = () => {
  const { isDarkTheme } = useStyleStore();
  const { lang } = useLaguageStore();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);

  useEffect(() => {
    window.localStorage.setItem('marktab-theme', String(isDarkTheme));
    // console.log('changeThemeToggle: ', window.localStorage.getItem('marktab-theme'));
  }, [isDarkTheme]);

  useEffect(() => {
    window.localStorage.setItem('mark-tab-lang', lang);
  }, [lang]);

  return (
    <>
      <StyledCenter>
        <StyledA href='https://www.google.com'>
          <StyledImage src='/google-logo.png' />
        </StyledA>
      </StyledCenter>
      <SettingImgStyle>
        <Image src='/setting.png' onClick={onOpen} />
      </SettingImgStyle>
      <SettingModal isOpen={isOpen} onClose={onClose} initialRef={initialRef} />
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
const SettingImgStyle = styled.div`
  position: absolute;
  text-align: right;
  top: 0.5rem;
  right: 0.5rem;
  width: 24px;

  scale: 1;
  :hover {
    scale: 1.1;
    cursor: pointer;
  }
  img {
    transition: all 0.2s;
  }
`;
