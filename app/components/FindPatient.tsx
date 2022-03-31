import { Box, Button } from '@chakra-ui/react'
import React from 'react'
import { Input } from '@chakra-ui/react'
function FindPatient() {
  return (
    <Box w="60">
             <Input my="1" type="number" placeholder='patient id'  />
             <Input my="1" type="number" placeholder='Name'  />
             <Input my="1" type="number" placeholder='Phone Number'  />
            
            <Button my="3"  >Search</Button>
    </Box>
  )
}

export default FindPatient