import axios from 'axios';
import cheerio from 'cheerio';

export const fetchFavicon = async (url: string, setFaviconUrl: (url: string) => void) => {
  const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
  const actualUrl = proxyUrl + url;
  try {
    // const originUrl = new URL(url).origin; // cors 이슈로 proxy url 때문에 origin 속성을 사용하지 않음
    const response = await axios.get(actualUrl);
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
        const originUrl = new URL(actualUrl).origin;
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
