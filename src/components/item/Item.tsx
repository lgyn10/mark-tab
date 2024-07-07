import { Box, ListItem, useDisclosure } from '@chakra-ui/react';
import React, { ChangeEvent, useEffect, useState } from 'react';
import styled from 'styled-components';
import ItemEditModal from './editModal/ItemEditModal';

type TItemProps = {
  itemTitle: string;
  itemUrl: string;
  itemId: string;
};

const Item = ({ itemTitle, itemUrl, itemId }: TItemProps) => {
  const [faviconUrl, setFaviconUrl] = useState('');
  const [editTitle, setEditTitle] = useState(itemTitle);

  useEffect(() => {
    const hostUrl = new URL(itemUrl).host;
    const faviconURL = `https://api.faviconkit.com/${hostUrl}`;
    setFaviconUrl(faviconURL);
  }, []);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);

  const handleEditTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setEditTitle(e.target.value);
  };

  return (
    <StyledListItem>
      <StyledTitleBox>
        <StyledImg src={faviconUrl} />
        <StyledA href={itemUrl}>
          <StyledTitle>{itemTitle}</StyledTitle>
        </StyledA>
      </StyledTitleBox>
      <StyledButtonBox onClick={onOpen}>
        <StyledImg src='/dots.png' />
      </StyledButtonBox>
      <ItemEditModal
        isOpen={isOpen}
        onClose={onClose}
        initialRef={initialRef}
        itemId={itemId}
        itemTitle={itemTitle}
        editTitle={editTitle}
        handleEditTitle={handleEditTitle}
      />
    </StyledListItem>
  );
};

export default Item;

const StyledListItem = styled(ListItem)`
  &&& {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-inline: 0.5rem;
    width: 100%;
    margin-bottom: 3px;
  }
`;

const StyledTitleBox = styled(Box)`
  &&& {
    width: 100%;
    display: flex;
    align-items: center;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const StyledTitle = styled.div`
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  background-color: #d6ffd6;
`;

const StyledA = styled.a`
  &&& {
    margin-left: 3px;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    :hover {
      cursor: pointer;
      color: red;
      font-weight: bold;
    }
  }
`;

const StyledButtonBox = styled(Box)`
  &&& {
    display: flex;
    align-items: center;
    border-radius: 3px;
    margin-left: 5px;
    transition: all 150ms;
  }
  :hover {
    cursor: pointer;
    background-color: green;
    transition: all 150ms;
  }
`;

const StyledImg = styled.img`
  width: 16px;
  height: 16px;
  margin-inline: 0px;
  border-radius: 3px;
  background-color: transparent;
  -webkit-user-drag: none;
  -moz-window-dragging: no-drag;
  transition: all 150ms;
`;
