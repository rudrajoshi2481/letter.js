import { Box, ListItem, UnorderedList } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'remix'

function Navbar() {
  return (
    <Box background={"green.500"}>
        <UnorderedList display={"flex"}>
          <ListItem p="3" color={"white"}  listStyleType={"none"} ><Link to="/">Labs 🔬</Link></ListItem>
          <ListItem p="3" color={"white"} listStyleType={"none"} ><Link to="/dashboard">Dashboard</Link></ListItem>
          <ListItem p="3" color={"white"} listStyleType={"none"} ><Link to="/login">Login</Link></ListItem>
        </UnorderedList>
    </Box>  
  )
}

export default Navbar