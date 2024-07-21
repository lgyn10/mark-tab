import {
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Switch,
} from '@chakra-ui/react';
import React from 'react';
import { styled } from 'styled-components';
import { ENGLISH, KOREAN } from '../../language/laguage';
import { useLaguageStore } from '../../store/laguageStore';
import { useStyleStore } from '../../store/styleSore';

type TSettingModalProps = {
  isOpen: boolean;
  onClose: () => void;
  initialRef: React.RefObject<HTMLInputElement>;
};

const SettingModal = ({ isOpen, onClose, initialRef }: TSettingModalProps) => {
  const { lang, setLang } = useLaguageStore();
  const { isDarkTheme, setStyles } = useStyleStore();
  const changeThemeToggle = async () => {
    setStyles(!isDarkTheme);
  };

  const changeLangToggle = async () => {
    setLang(lang === 'en' ? 'ko' : 'en');
  };
  return (
    <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose} size='xs'>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{lang === 'en' ? ENGLISH.SETTING : KOREAN.SETTING}</ModalHeader>
        <ModalCloseButton />
        <StyledModalBody pb={3}>
          <div className='item'>
            <Heading size='sm'>{lang === 'en' ? ENGLISH.THEME : KOREAN.THEME}</Heading>
            <StyledSwitch size='md' colorScheme='blue' onChange={changeThemeToggle} isChecked={isDarkTheme} />
          </div>
          <div className='item'>
            <Heading size='sm'>{ENGLISH.LANG}</Heading>
            <StyledSwitch
              size='md'
              colorScheme='blue'
              onChange={changeLangToggle}
              isChecked={lang === 'en' ? false : true}
            />
          </div>
        </StyledModalBody>
      </ModalContent>
    </Modal>
  );
};

export default SettingModal;

const StyledSwitch = styled(Switch)``;

const StyledModalBody = styled(ModalBody)`
  .item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }
`;
