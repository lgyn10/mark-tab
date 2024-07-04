import { EditIcon, InfoOutlineIcon } from '@chakra-ui/icons';
import { Box, Button, ListIcon, ListItem } from '@chakra-ui/react';
// import axios from 'axios';
// import cheerio from 'cheerio';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

type TItemProps = {
  itemTitle: string;
  itemUrl: string;
};

const Item = ({ itemTitle, itemUrl }: TItemProps) => {
  const [faviconUrl, setFaviconUrl] = useState('');

  useEffect(() => {
    try {
      const originUrl = new URL(itemUrl).host;
      //! 1.
      const faviconURL = `http://www.google.com/s2/favicons?domain=${originUrl}`;
      setFaviconUrl(faviconURL);
      console.log(faviconURL);
    } catch (err) {
      // 일로 안넘어옴
      console.log(err);
      setFaviconUrl('');
    }
  }, []);

  return (
    <StyledListItem>
      <StyledTitleBox>
        {faviconUrl !== '' ? <StyledImg src={faviconUrl} /> : <ListIcon as={InfoOutlineIcon} />}
        <StyledTitle>
          <StyledA href={itemUrl}>{itemTitle}</StyledA>
        </StyledTitle>
      </StyledTitleBox>
      <StyledButtonBox>
        <StyledButton as={EditIcon}>...</StyledButton>
      </StyledButtonBox>
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
    width: 90%;
    display: flex;
    align-items: center;
    cursor: pointer; /* 마우스 커서 변경 */
  }
  :hover {
    color: red; /* 호버 시 텍스트 색상 변경 */
  }
`;

const StyledButtonBox = styled(Box)`
  &&& {
    text-align: right;
    display: flex;
    align-items: center;
  }
`;

const StyledA = styled.a`
  width: 100%;
  color: inherit; /* 부모 요소의 색상 상속 */
`;

const StyledTitle = styled.div`
  &&& {
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  :hover {
    color: red;
  }
`;

const StyledButton = styled(Button)`
  &&& {
    height: max-content;
    margin: 0;
  }
  :hover {
    color: red;
  }
`;

const StyledImg = styled.img`
  background-color: transparent;
`;
