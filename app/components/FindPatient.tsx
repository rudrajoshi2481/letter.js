import { Box, Button } from '@chakra-ui/react'
import React from 'react'
import { Input } from '@chakra-ui/react'
function FindPatient() {
  return (
    <Box pt="3" border={"3px"} borderWidth="2px"  borderStyle={"dashed"} style={{width:'70vw',minHeight:"40vh"}} p="3" mt="3" w="60">
             <Input my="1"  type="number" placeholder='patient id'  />
             <Input my="1" type="number" placeholder='Name'  />
             <Input my="1" type="number" placeholder='Phone Number'  />
            
            <Button my="3"  >Search</Button>
    </Box>
  )
}

export default FindPatient