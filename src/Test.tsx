import { Card } from '@chakra-ui/react';
import { useState } from 'react';
import styled from 'styled-components';
import { bookmarkStore } from './store/bookmarkStore';

const Test = () => {
  const [stateSample] = useState('dd');
  const { bookmarkNode, fetchBookmarkTreeNode } = bookmarkStore();

  const handleGetTreeAPI = () => {
    chrome.bookmarks.getTree().then((res) => {
      console.log(res[0]);
    });
  };

  // 북마크바 데이터 트리 조회
  const handleGetSubTreeAPI = async (id: string) => {
    try {
      const result = await chrome.bookmarks.getSubTree(id);
      console.log(result);
    } catch (err) {
      console.log('error', err);
    }
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

  const handleZustandAPI = async () => {
    fetchBookmarkTreeNode();
  };

  const barmarktab = async () => {
    try {
      const markTabId = await chrome.bookmarks.search({ title: 'Mark-Tab' || 'mark-tab' }).then((res) => {
        return res[0].id;
      });
      const result2 = await chrome.bookmarks.getChildren(markTabId).then((res) => res);
      console.log(result2);
    } catch (err) {
      console.log('err: ', err);
      alert('cannot find the ‘mark-tab’ folder in the bookmarks bar');
      console.log('Cannot find the ‘mark-tab’ folder in the bookmarks bar.');
    }
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
      <div>
        <button onClick={handleZustandAPI}>zustand API 사용</button>
      </div>
      <div>
        <button
          onClick={() => {
            console.log(bookmarkNode);
          }}
        >
          zustand API 사용 콘솔 확인
        </button>
      </div>
      <div>
        <button onClick={barmarktab}>북마크바 mark-tab 확인</button>
      </div>
    </StyledCard>
  );
};

export default Test;

const StyledCard = styled(Card)`
  margin-top: 40px;
  margin-inline: 30%;
`;
