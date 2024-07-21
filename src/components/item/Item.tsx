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
    //! 1. google s2 favicon api
    // const hostUrl_1 = new URL(itemUrl).host;
    // const faviconURL_1 = `https://www.google.com/s2/favicons?domain=${hostUrl_1}&sz=64`;
    // setFaviconUrl(faviconURL_1);

    //! 2. faviconkit api
    // const hostUrl_2 = new URL(itemUrl).host;
    // const faviconURL_2 = `https://api.faviconkit.com/${hostUrl_2}`;
    // setFaviconUrl(faviconURL_2);

    //! 3. faviconkit api 에러 메세지 처리 - cors 오류
    // const fetchFaviconUrl = async (url: string) => {
    //   try {
    //     const response = await axios.get(`https://api.faviconkit.com/${new URL(url).host}`, {
    //       headers: {
    //         'Access-Control-Allow-Origin': '*',
    //         'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    //       },
    //     });
    //     // console.log(response);
    //     setFaviconUrl(response.data);
    //   } catch (error) {
    //     // console.log(error);
    //   }
    //   setFaviconUrl('');
    // };
    // fetchFaviconUrl(itemUrl);

    //! 4. chrome extension api
    const faviconUrl = (url: string) => {
      const newUrl = new URL(chrome.runtime.getURL('/_favicon/'));
      newUrl.searchParams.set('pageUrl', url);
      newUrl.searchParams.set('size', '64');
      return newUrl.toString();
    };
    const faviconURL = faviconUrl(itemUrl);
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
        <StyledImgDot src='/dots.png' />
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
  font-size: 14px;
  font-weight: 400;
  transition: 150ms;
`;

const StyledA = styled.a<{ itemTextColor: string; itemHoverTextColor: string; itemHoverTextShadow: string }>`
  &&& {
    margin-left: 3px;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: ${(props) => props.theme.itemTextColor};
    padding-block: 1.5px;
    :hover {
      cursor: pointer;
      color: ${(props) => props.theme.itemHoverTextColor};
      /* font-weight: bold; */
      text-shadow: 0 0 1.5px ${(props) => props.theme.itemHoverTextShadow};
      transition: 150ms;
      /* font-size: 14.5px; */
    }
  }
`;

const StyledImg = styled.img`
  width: 16px;
  height: 16px;
  border-radius: 3px;
  background-color: transparent;
  -webkit-user-drag: none;
  -moz-window-dragging: no-drag;
  opacity: 0.9;
`;

const StyledButtonBox = styled(Box)<{ buttonBoxBackgroundColor: string }>`
  &&& {
    display: flex;
    align-items: center;
    border-radius: 3px;
    margin-left: 5px;
    transition: all 150ms;
  }
  :hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.buttonBoxBackgroundColor};
    transition: all 150ms;
  }
`;

const StyledImgDot = styled.img<{ itemButtonFilterValue: number }>`
  width: 20px;
  height: 20px;
  padding: 2px;
  margin-inline: 0px;
  border-radius: 5px;
  background-color: transparent;
  -webkit-user-drag: none;
  -moz-window-dragging: no-drag;
  transition: all 150ms;
  opacity: 0.6;
  filter: invert(${(props) => props.theme.itemButtonFilterValue});
`;
