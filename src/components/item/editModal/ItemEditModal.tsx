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
import { bookmarkStore } from '../../../store';

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
  const { editBookmarkTitle } = bookmarkStore((state) => ({
    editBookmarkTitle: state.editBookmarkTitle,
  }));

  const editItemTitle = (id: string, editTitle: string) => {
    console.log(editTitle);
    editBookmarkTitle(id, editTitle);
    onClose();
  };
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>, id: string, editTitle: string) => {
    if (event.key === 'Enter') {
      editBookmarkTitle(id, editTitle);
      onClose();
    }
  };
  return (
    <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>북마크 수정</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel>북마크 이름</FormLabel>
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
            저장
          </Button>
          <Button colorScheme='red' onClick={onClose}>
            삭제
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ItemEditModal;
