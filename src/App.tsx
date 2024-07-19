import { ChakraProvider } from '@chakra-ui/react';

import styled, { ThemeProvider } from 'styled-components';
import ApiTest from './ApiTest';
import BoardContainer from './components/boardContainer/BoardContainer';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import { useStyleStore } from './store/styleSore';
import { GlobalStyle } from './style/global';
import { darkTheme, lightTheme } from './style/theme';

function App() {
  const { isDarkTheme } = useStyleStore();

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyle themeName={isDarkTheme ? 'dark' : 'light'} />
      <StyledContainer>
        <ChakraProvider>
          <div className='wapper'>
            <Header />
            <BoardContainer />
          </div>
          <ApiTest />
          <StyledFooter />
        </ChakraProvider>
      </StyledContainer>
    </ThemeProvider>
  );
}

export default App;

const StyledContainer = styled.div<{ mainBackgroundColor: string }>`
  background-color: ${(props) => props.theme.mainBackgroundColor};
  height: calc(100vh - 1.5rem);
  .wapper {
    height: auto;
    min-height: 100%;
  }
`;

const StyledFooter = styled(Footer)`
  height: 1.5rem;
  position: relative;
  transform: translateY(-100%);
`;
