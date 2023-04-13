import { Box, Button, Flex, Select, Text } from '@chakra-ui/react'
import React from 'react'
import { CloseIcon } from '@chakra-ui/icons'


const Populate = () => {



  return (
    <>   
  

   <Box shadow={'md'} w={'712px'} h={'425px'} marginInline={'auto'} marginTop={'40px'}>

    <Flex justifyContent={'space-between'} marginInline={'20px'} height={'-webkit-fit-content'} > 
        <Text  fontWeight={'600px'} fontSize={'24px'} fontFamily={'inter'} backgroundColor={'white'}>Populate</Text>
        <Button width={'24px'} height={'24px'} marginTop={'10px'} backgroundColor={'white'}> <CloseIcon width={'12px'} h={'12px'}/></Button>
    </Flex>

    <Flex flexDirection={'row'} marginTop={'2'}>
    <Box width={'full'} marginInline={'5'}>
    <Text fontWeight={'400'} fontFamily={'inter'}>Full Time/Part Time</Text>   
    <Select placeholder='Select'>
    <option value='option1'>Option 1</option>
    <option value='option2'>Option 2</option>
    <option value='option3'>Option 3</option>
    </Select>
    </Box>
    
    <Box width={'full'} marginInline={'5'}>
    <Text fontWeight={'400'} fontFamily={'inter'}>Full Time/Part Time</Text>   
    <Select placeholder='Select'>
    <option value='option1'>Option 1</option>
    <option value='option2'>Option 2</option>
    <option value='option3'>Option 3</option>
    </Select>
    </Box>
    
    </Flex>

    <Flex flexDirection={'row'} marginBlock={'10'}>
    <Box width={'full'} marginInline={'5'}>
    <Text fontWeight={'400'} fontFamily={'inter'}>Full Time/Part Time</Text>   
    <Select placeholder='Select'>
    <option value='option1'>Option 1</option>
    <option value='option2'>Option 2</option>
    <option value='option3'>Option 3</option>
    </Select>
    </Box>
    
    <Box width={'full'} marginInline={'5'}>
    <Text fontWeight={'400'} fontFamily={'inter'}>Full Time/Part Time</Text>   
    <Select placeholder='Select'>
    <option value='option1'>Option 1</option>
    <option value='option2'>Option 2</option>
    <option value='option3'>Option 3</option>
    </Select>
    </Box>
    
    </Flex>

    <Flex flexDirection={'row'}>
    <Box width={'full'} marginInline={'5'}>
    <Text fontWeight={'400'} fontFamily={'inter'}>Full Time/Part Time</Text>   
    <Select placeholder='Select'>
    <option value='option1'>Option 1</option>
    <option value='option2'>Option 2</option>
    <option value='option3'>Option 3</option>
    </Select>
    </Box>
    
    <Box width={'full'} marginInline={'5'}>
    <Text fontWeight={'400'} fontFamily={'inter'}>Full Time/Part Time</Text>   
    <Select placeholder='Select'>
    <option value='option1'>Option 1</option>
    <option value='option2'>Option 2</option>
    <option value='option3'>Option 3</option>
    </Select>
    </Box>
    
    </Flex>
    <Flex justifyContent={'center'}>
    <Button backgroundColor={'yellow.400'} marginTop={'30px'} width={'355px'}> <Text> Apply </Text></Button>
    </Flex>

    </Box>
        </>

  )
}

export default Populate