import { Center, Heading } from '@chakra-ui/react';
const Header = () => {
  return (
    <>
      <Center bg='tomato' h='100px' color='white'>
        <Heading as='h1'>This is the Center</Heading>
      </Center>
    </>
  );
};

export default Header;
