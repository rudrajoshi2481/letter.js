import {
  Box,
  Button,
  Container,
  Divider,
  Heading,
  HStack,
  ListItem,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { json, Link, Links, LoaderFunction, Outlet, redirect, useLoaderData } from "remix";
import { getSession } from "~/sessions";


export const loader:LoaderFunction = async ({request}) => {
  const session = await getSession(
    request.headers.get("Cookie")
  );
  if (session.has("userSession")) {
    // Redirect to the home page if they are already signed in.
    
    return {showPage:true}
  }
  return {showPage:false}

}



function Dashboard() {

  const {showPage} = useLoaderData() 

  return (
    <>
    {/* {
      JSON.stringify(showPage)
    } */}
    {
      true ?  <PrivatePage /> : <NotSignInPage />
    }

    </>
  );
}

const NotSignInPage = () => {
  return (
    <Box>
        <Heading>User Not Loged in</Heading>
        <Link to="/login">Login</Link>
    </Box>
  )
}


const PrivatePage = () => {
  return(
    <Container maxW="ontainer.lg">
    <Heading py="3">Doc 🩺</Heading>
    
      
      <Divider size={"3"} colorScheme="green" orientation='vertical' />
      <Outlet />
    
  </Container>
  )
}


export default Dashboard;
