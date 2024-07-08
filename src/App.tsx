import { ChakraProvider } from '@chakra-ui/react';
import './App.css';

import Header from './components/header/Header';

// @ts-ignore
import BoardContainer from './components/boardContainer/BoardContainer';

function App() {
  return (
    <ChakraProvider>
      <Header />
      <BoardContainer />
      {/* <Test /> */}
      {/* <TestFavicon /> */}
      {/* <TestFavicon2 /> */}
    </ChakraProvider>
  );
}

export default App;
