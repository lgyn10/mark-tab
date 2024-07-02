import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import Test from './Test';
function App() {
  return (
    <ChakraProvider>
      <Test />
    </ChakraProvider>
  );
}

export default App;
