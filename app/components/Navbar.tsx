import { Box, HStack, ListItem, UnorderedList, WrapItem ,Text, Button} from '@chakra-ui/react'
import React, { useContext } from 'react'
import { Link } from 'remix'
import { LoginContext } from '~/context/loginDataContext'
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from '@chakra-ui/react'
import e from 'express'
function Navbar() {

  const [d,setD] = useContext(LoginContext)

  return (
    <Box>
      <HStack py="1" justifyContent={"space-between"} background={"green.500"}>
        <UnorderedList display={"flex"}>
          <ListItem p="3" color={"white"}  listStyleType={"none"} ><Link to="/">Labs 🔬</Link></ListItem>
          <ListItem p="3" color={"white"} listStyleType={"none"} ><Link to="/dashboard">Dashboard</Link></ListItem>
          <ListItem p="3" color={"white"} listStyleType={"none"} ><Link to="/login">Login</Link></ListItem>
        </UnorderedList>
        <UnorderedList display={"flex"}>
        <Popover>
  <PopoverTrigger>
  <WrapItem>
    <HStack mr="3" justifyContent={"flex-start"} alignItems="baseline">
         {
      d.email != "" ? <Avatar  name={d.displayName}  /> : null 
    }
    <Text>{d.email}</Text>
    </HStack>
  </WrapItem>
    
  </PopoverTrigger>
  <PopoverContent>
    <PopoverArrow />
    <PopoverCloseButton />
    <PopoverHeader>Confirmation!</PopoverHeader>
    <PopoverBody>Are you sure you want to have that paracetamol ?</PopoverBody>
  </PopoverContent>
</Popover>
      
        </UnorderedList>
    </HStack>  
    </Box>
  )
}

export default Navbar