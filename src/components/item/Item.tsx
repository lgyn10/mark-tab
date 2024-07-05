import { EditIcon } from '@chakra-ui/icons';
import { Box, Button, ListItem } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

type TItemProps = {
  itemTitle: string;
  itemUrl: string;
};

const Item = ({ itemTitle, itemUrl }: TItemProps) => {
  const [faviconUrl, setFaviconUrl] = useState('');
  useEffect(() => {
    const hostUrl = new URL(itemUrl).host;
    const faviconURL = `https://api.faviconkit.com/${hostUrl}`;
    // const faviconURL = `https://www.google.com/s2/favicons?domain=${hostUrl}&sz=${256}`;
    setFaviconUrl(faviconURL);
  }, []);

  return (
    <StyledListItem>
      <StyledTitleBox>
        <StyledImg src={faviconUrl} />
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
  width: 16px;
  height: 16px;
  margin-right: 0.5rem;
  background-color: transparent;
  -webkit-user-drag: none;
  -moz-window-dragging: no-drag;
`;
