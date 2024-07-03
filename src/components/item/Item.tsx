import { EditIcon, InfoOutlineIcon } from '@chakra-ui/icons';
import { Box, Button, ListIcon, ListItem } from '@chakra-ui/react';
import styled from 'styled-components';

const Item = (props: { item: string }) => {
  return (
    <StyledListItem>
      <StyledBox>
        <ListIcon as={InfoOutlineIcon} />
        {props.item}
      </StyledBox>
      <StyledBox>
        <StyledButton as={EditIcon}>...</StyledButton>
      </StyledBox>
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

const StyledBox = styled(Box)`
  display: flex;
  align-items: center;
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
