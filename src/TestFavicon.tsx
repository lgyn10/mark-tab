import axios from 'axios';
import cheerio from 'cheerio';
import { useState } from 'react';

//! 프로그래머스는 cors 에러 안 남
// const initialUrl = 'https://school.programmers.co.kr/learn/challenges/beginner?order=acceptance_desc&page=5';

//! github - cors에러로 proxyUrl 추가
const initialUrl = 'https://github.com/lgyn10?tab=repositories';
const proxyUrl = 'https://cors-anywhere.herokuapp.com/';

const TestFavicon = () => {
  const [faviconUrl, setFaviconUrl] = useState(initialUrl);

  const handleFavicon = () => {
    fetchFavicon(proxyUrl + faviconUrl);
  };

  const fetchFavicon = async (url: string) => {
    try {
      // const originUrl = new URL(url).origin; // cors 이슈로 proxy url 때문에 origin 속성을 사용하지 않음
      const response = await axios.get(url);
      const html = response.data;
      const $ = cheerio.load(html);

      // 파비콘 URL을 추출
      let favicon =
        $('link[rel="icon"]').attr('href') ||
        $('link[rel="shortcut icon"]').attr('href') ||
        $('link[rel="apple-touch-icon"]').attr('href') ||
        $('meta[name="msapplication-TileImage"]').attr('content') ||
        $('link[rel="icon"][type="image/png"]').attr('href') ||
        $('link[rel="icon"][type="image/svg+xml"]').attr('href');

      if (favicon) {
        // 상대 경로일 경우 절대 경로로 변환
        if (!favicon.startsWith('http')) {
          const originUrl = new URL(url).origin;
          favicon = originUrl + favicon;
          setFaviconUrl(favicon);
        } else {
          setFaviconUrl(favicon);
        }
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <h1>favicon</h1>
      <img src={faviconUrl} alt='favicon' />
      <button onClick={handleFavicon}>favicon call</button>
    </div>
  );
};

export default TestFavicon;
