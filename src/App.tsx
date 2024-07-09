import { ChakraProvider } from '@chakra-ui/react';
import './App.css';

import styled, { ThemeProvider } from 'styled-components';
import BoardContainer from './components/boardContainer/BoardContainer';
import Header from './components/header/Header';
import { darkTheme } from './theme/theme';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <StyledContainer>
        <ChakraProvider>
          <Header />
          <BoardContainer />
          {/* <Test /> */}
          {/* <TestFavicon /> */}
          {/* <TestFavicon2 /> */}
        </ChakraProvider>
      </StyledContainer>
    </ThemeProvider>
  );
}

export default App;

const StyledContainer = styled.div<{ mainBackgroundColor: string }>`
  background-color: ${(props) => props.theme.mainBackgroundColor};
`;
