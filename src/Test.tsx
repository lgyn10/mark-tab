import { Card } from '@chakra-ui/react';
import { useState } from 'react';
import styled from 'styled-components';

const Test = () => {
  const [stateSample] = useState('dd');

  const handleGetTreeAPI = () => {
    chrome.bookmarks.getTree().then((res) => {
      console.log(res[0]);
    });
  };

  // 북마크바 데이터 트리 조회
  const handleGetSubTreeAPI = (id: string) => {
    chrome.bookmarks.getSubTree(id).then((res) => {
      console.log(res[0]);
    });
  };

  const handleGetAPI = (id: string) => {
    chrome.bookmarks.get(id).then((res) => {
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
        <button onClick={() => handleGetSubTreeAPI('1')}>api getSubTree 테스트</button>
      </div>
      <div>
        <button onClick={() => handleGetSubTreeAPI('1')}>북마크바 트리 조회</button>
      </div>
      <div>
        <button onClick={() => handleGetSubTreeAPI('2')}>기타 북마크 트리 조회</button>
      </div>
      <div>
        <button onClick={() => handleGetAPI('1')}>api get 알아보기</button>
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
