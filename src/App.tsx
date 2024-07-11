import { ChakraProvider } from '@chakra-ui/react';
import './App.css';

import styled, { ThemeProvider } from 'styled-components';
import BoardContainer from './components/boardContainer/BoardContainer';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import { useStyleStore } from './store/styleSore';
import { darkTheme, lightTheme } from './theme/theme';

function App() {
  const { isDarkTheme } = useStyleStore();

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <StyledContainer>
        <ChakraProvider>
          <Header />
          <BoardContainer />
          <Footer />
        </ChakraProvider>
      </StyledContainer>
    </ThemeProvider>
  );
}

export default App;

const StyledContainer = styled.div<{ mainBackgroundColor: string }>`
  background-color: ${(props) => props.theme.mainBackgroundColor};
`;
