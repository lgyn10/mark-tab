import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import React, { ChangeEvent } from 'react';
import { ENGLISH, KOREAN } from '../../../language/laguage';
import { bookmarkStore } from '../../../store/bookmarkStore';
import { useLaguageStore } from '../../../store/laguageStore';

type TItemEditModalProps = {
  isOpen: boolean;
  onClose: () => void;
  initialRef: React.RefObject<HTMLInputElement>;
  itemId: string;
  itemTitle: string;
  editTitle: string;
  handleEditTitle: (e: ChangeEvent<HTMLInputElement>) => void;
};

const ItemEditModal = ({
  isOpen,
  onClose,
  initialRef,
  itemTitle,
  editTitle,
  handleEditTitle,
  itemId,
}: TItemEditModalProps) => {
  const { editBookmarkNodeTitle, deleteBookmarkNode } = bookmarkStore();

  //! 언어 설정
  const { lang } = useLaguageStore();

  const editItemTitle = (id: string, editTitle: string) => {
    console.log(editTitle);
    editBookmarkNodeTitle(id, editTitle);
    onClose();
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>, id: string, editTitle: string) => {
    if (event.key === 'Enter') {
      editBookmarkNodeTitle(id, editTitle);
      onClose();
    }
  };

  const deleteItem = (id: string) => {
    deleteBookmarkNode(id);
    onClose();
  };

  return (
    <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{lang === 'en' ? ENGLISH.EDIT_BOOKMARK : KOREAN.EDIT_BOOKMARK}</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel>{lang === 'en' ? ENGLISH.BOOKMARK_TITLE : KOREAN.BOOKMARK_TITLE}</FormLabel>
            <Input
              ref={initialRef}
              placeholder={itemTitle}
              value={editTitle}
              onChange={handleEditTitle}
              onKeyDown={(event) => handleKeyPress(event, itemId, editTitle)}
            />
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme='blue' mr={3} onClick={() => editItemTitle(itemId, editTitle)}>
            {lang === 'en' ? ENGLISH.SAVE : KOREAN.SAVE}
          </Button>
          <Button colorScheme='red' onClick={() => deleteItem(itemId)}>
            {lang === 'en' ? ENGLISH.DELETE : KOREAN.DELETE}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ItemEditModal;
