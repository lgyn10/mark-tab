import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import Test from './Test';
import TestFavicon from './TestFavicon';
import Header from './components/header/Header';

function App() {
  return (
    <ChakraProvider>
      <Header />
      {/* <BoardContainer /> */}
      <Test />
      <TestFavicon />
    </ChakraProvider>
  );
}

export default App;
