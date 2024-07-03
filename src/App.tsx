import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import Test from './Test';
import BoardContainer from './components/boardContainer/BoardContainer';
import Header from './components/header/Header';

function App() {
  return (
    <ChakraProvider>
      <Header />
      <BoardContainer />
      <Test />
    </ChakraProvider>
  );
}

export default App;
