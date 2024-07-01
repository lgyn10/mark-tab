import { useState } from 'react';

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
    <>
      <h1>API 테스트</h1>
      <div>{stateSample}</div>
      <div>
        <button onClick={handleAPI}>api test</button>
      </div>
      <div>
        <button onClick={showChromeAPI}>api 알아보기</button>
      </div>
    </>
  );
};

export default Test;
