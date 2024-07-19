import 'sanitize.css';
import { createGlobalStyle } from 'styled-components';
import { ThemeName } from './theme';

interface Props {
  themeName: ThemeName;
}
export const GlobalStyle = createGlobalStyle<Props>`
  /* @font-face {
    font-family: 'Pretendard Regular';
    font-style: normal;
    font-weight: 400;
    src: local('Pretendard-Regular'), url('./fonts/Pretendard-Regular.woff2') format('woff2');
  }  */

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    //font-family: 'Pretendard Regular' !important;
    font-size: 14px;

  }
  html,
body {
  background-color: ${(props) => (props.themeName === 'light' ? '#f7f8fb' : '#1C2128')};
}
`;
