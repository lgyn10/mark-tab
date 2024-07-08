import { ChakraProvider } from '@chakra-ui/react';
import './App.css';

import BoardContainer from './components/boardContainer/BoardContainer';
import Header from './components/header/Header';

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
