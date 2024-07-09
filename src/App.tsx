import { ChakraProvider } from '@chakra-ui/react';
import './App.css';

import { useEffect, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import BoardContainer from './components/boardContainer/BoardContainer';
import Header from './components/header/Header';
import { useStyleStore } from './store/styleSore';
import { darkTheme, lightTheme } from './theme/theme';

function App() {
  const { isDarkTheme } = useStyleStore();
  const [themeToggle, setThemeToggle] = useState(isDarkTheme);

  useEffect(() => {
    console.log('App.tsx');
  }, [themeToggle]);

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <StyledContainer>
        <ChakraProvider>
          <Header themeToggle={themeToggle} setThemeToggle={setThemeToggle} />
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
