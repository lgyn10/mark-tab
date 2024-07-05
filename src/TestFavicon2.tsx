//! 프로그래머스는 cors 에러 안 남
// const initialUrl = 'https://school.programmers.co.kr/learn/challenges/beginner?order=acceptance_desc&page=5';

import { Box, Card, Center, Heading, Image } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

//! github - cors에러로 proxyUrl 추가

const TestFavicon2 = () => {
  // const initialUrl = 'https://github.com/lgyn10?tab=repositories';
  // const initialUrl = 'https://www.coupangplay.com/home';
  //const initialUrl = 'https://velog.io/@pastelblue0721/프론트엔드-입문자들에게-좋은-링크-모음-React-위주';
  // const [faviconUrl, setFaviconUrl] = useState(initialUrl);

  //! 1. arr
  // const fetchFaviconUrl = async (url: string) => {
  //   const hostUrl = new URL(url).host;
  //   const apis = [
  //     `https://icons.duckduckgo.com/ip3/${hostUrl}.ico`,
  //     `https://logo.clearbit.com/${hostUrl}`,
  //     `http://www.google.com/s2/favicons?domain=${hostUrl}`,
  //   ];
  //   for (const api of apis) {
  //     try {
  //       console.log('=== for문 도는 중 ===');
  //       // const response = await axios.get(api, { responseType: 'blob' });
  //       const response = api;
  //       setFaviconUrl(response);
  //       return;
  //     } catch (error) {
  //       console.error(`Error fetching favicon from ${api}`, error);
  //       continue;
  //     }
  //   }
  //   // 모든 API가 실패한 경우 기본 파비콘 URL 또는 빈 문자열을 반환합니다.
  //   setFaviconUrl('');
  // };

  //! 2. 하나의 API만

  const initArr = [
    `https://transform.tools/typescript-to-javascript`,
    'https://www.coupangplay.com/home',
    'https://github.com/lgyn10?tab=repositories',
    'https://velog.io/@pastelblue0721/프론트엔드-입문자들에게-좋은-링크-모음-React-위주',
    `https://sunnycero.com/wp/`,
    `https://school.programmers.co.kr/learn/courses/18636/18636-%EB%B0%95%ED%8C%80%EC%9E%A5%EC%9D%98-%EC%97%85%EB%AC%B4-%EC%B9%98%ED%8A%B8%ED%82%A4-notion-%ED%8E%B8`,
    `https://pc.coffeechat.kr`,
  ];
  const [faviconUrl, setFaviconUrl] = useState<string[]>(initArr);

  // 1. `https://icons.duckduckgo.com/ip3/${hostUrl}.ico` - coupang 오류
  // 2. `https://logo.clearbit.com/${hostUrl}` - velog 오류
  // 3. `http://www.google.com/s2/favicons?domain=${hostUrl}`
  // 5. `https://api.faviconkit.com/${hostUrl}` - 케로 블로그만 오류, 나머지 다 좋음, 깃헙 아이콘이 좀 다름
  // 6. `https://favicongrabber.com/api/grab/${hostUrl}` -x
  // 7. `https://besticon-demo.herokuapp.com/allicons.json?url=${hostUrl}` -x
  // 8. `https://faviconfinder.com/api/?url=${hostUrl}` -x
  // 9. `https://favicon-api.minimalwebsite.dev/${hostUrl}` -x
  //10. `https://favicon.yandex.net/favicon/${hostUrl}` -x

  const fetchFaviconUrlArray = async (urls: string[]) => {
    const tempArr = urls.map((v) => {
      const hostUrl = new URL(v).host;
      console.log(hostUrl);
      return `https://api.faviconkit.com/${hostUrl}`;
    });
    setFaviconUrl(tempArr);
  };

  useEffect(() => {
    fetchFaviconUrlArray(faviconUrl);
  }, []);

  return (
    <Card>
      <Center>
        <Heading>favicon</Heading>
      </Center>
      <Center>
        {/* <Image w={50} h={50} src={faviconUrl} alt='favicon' /> */}
        <Box>
          {faviconUrl.map((v: string) => (
            <Image w={50} h={50} src={v} alt='favicon' />
          ))}
        </Box>
      </Center>
    </Card>
  );
};

export default TestFavicon2;
