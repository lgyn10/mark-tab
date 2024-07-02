import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import Test from './Test';
import HeaderOne from './components/header/HeaderOne';

function App() {
  return (
    <ChakraProvider>
      <HeaderOne />
      <Test />
    </ChakraProvider>
  );
}

export default App;
