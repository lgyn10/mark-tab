import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import Test from './Test';
import Header from './components/header/Header';

function App() {
  return (
    <ChakraProvider>
      <Header />
      <Test />
    </ChakraProvider>
  );
}

export default App;
