import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import BoardContainer from './components/boardContainer/BoardContainer';
import Header from './components/header/Header';
import Test from './Test';

// @ts-ignore
import TestMasonry from './TestMasonry';

function App() {
  return (
    <ChakraProvider>
      <Header />
      <BoardContainer />
      <Test />
      {/* <TestFavicon /> */}
      {/* <TestFavicon2 /> */}
      <TestMasonry />
    </ChakraProvider>
  );
}

export default App;
