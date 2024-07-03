import { EditIcon, InfoOutlineIcon } from '@chakra-ui/icons';
import { Box, Button, ListIcon, ListItem } from '@chakra-ui/react';
import styled from 'styled-components';

type TItemProps = {
  itemTitle: string;
  itemUrl: string;
};

const Item = ({ itemTitle, itemUrl }: TItemProps) => {
  return (
    <StyledListItem>
      <StyledTitleBox>
        <ListIcon as={InfoOutlineIcon} />
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
