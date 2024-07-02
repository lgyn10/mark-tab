import { Card } from '@chakra-ui/react';
import { useState } from 'react';
import styled from 'styled-components';

const Test = () => {
  const [stateSample] = useState('dd');

  const handleAPI = () => {
    const bookmarks = chrome.bookmarks.getTree().then((res) => {
      return res[0].children?.at(0)?.children;
    });
    bookmarks.then((data) => {
      const bookmarksArr: (BookmarkTreeNode | undefined)[] = data!
        .map((item) => {
          if (!item.children) {
            return {
              id: item.id,
              title: item.title,
            };
          } else {
            return undefined;
          }
        })
        .filter((v) => v !== undefined);
      console.log(bookmarksArr);
    });
  };

  const showChromeAPI = () => {
    const chromeAPI = chrome.bookmarks;
    console.log(chromeAPI);
  };
  return (
    <StyledCard>
      <h1>API 테스트</h1>
      <a href='https://www.google.com'>구글 홈으로</a>
      <div>{stateSample}</div>
      <div>
        <button onClick={handleAPI}>api test</button>
      </div>
      <div>
        <button onClick={showChromeAPI}>api 알아보기</button>
      </div>
    </StyledCard>
  );
};

export default Test;

const StyledCard = styled(Card)`
  margin-top: 40px;
  margin-inline: 30%;
`;
