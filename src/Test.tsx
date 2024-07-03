import { Card } from '@chakra-ui/react';
import { useState } from 'react';
import styled from 'styled-components';

const Test = () => {
  const [stateSample] = useState('dd');

  // tree 형태로 데이터 가져옴
  const handleGetTreeAPI = () => {
    chrome.bookmarks.getTree().then((res) => {
      console.log(res[0]);
    });
  };

  // 객체 형태로 데이터 가져옴
  const handleGetAPI = () => {
    chrome.bookmarks.get('1').then((res) => {
      console.log(res[0]);
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
        <button onClick={handleGetTreeAPI}>api getTree 테스트</button>
      </div>
      <div>
        <button onClick={handleGetAPI}>api get 알아보기</button>
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
