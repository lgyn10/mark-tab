import { Button } from '@chakra-ui/react';
import { styled } from 'styled-components';

const Favicon = () => {
  const bookmark = 'https://blog.toss.im/';
  const FaviconUrl = async (url: string) => {
    const newUrl = new URL(chrome.runtime.getURL('/_favicon/'));
    newUrl.searchParams.set('pageUrl', url);
    newUrl.searchParams.set('size', '64');
    console.log(newUrl.toString());
    return newUrl.toString();
  };

  return (
    <FaviconStyled>
      <Button onClick={() => FaviconUrl(bookmark)}>Favicon</Button>
    </FaviconStyled>
  );
};

export default Favicon;

const FaviconStyled = styled.div`
  width: 100vw;
  color: white;
  text-align: center;
`;
