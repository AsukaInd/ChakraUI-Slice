import { ChakraProvider, Container } from '@chakra-ui/react'
import React from 'react'
import Populate from './Components/Populate'
import Filter from './Components/Filter'

const App = () => {
  return (
    <ChakraProvider>
      <Filter/>

      <Populate/>
    </ChakraProvider>
  )
}

export default App