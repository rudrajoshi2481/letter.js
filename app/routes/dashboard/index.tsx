import {
  Box,
  Button,
  Divider,
  Heading,
  HeadingProps,
  HStack,
  ListItem,
  OmitCommonProps,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import SlateEditor from "~/components/SlateEditor";



function Index() {

  
  return (
    <>

      <Button  my="3" mb="3" >Create Letter ❤</Button>
      <Divider />
      <HStack justifyContent={"flex-start"} alignItems="flex-start">
      <Sidebar />
      <Viewer />
      </HStack>
    </>
  );
}


const Sidebar = () => {
  
  return (
    <VStack alignItems={"flex-start"}>
      
      <Box style={{ minWidth: "15vw" }}>
        <UnorderedList>

        </UnorderedList>
      </Box>
    </VStack>
  );
};

const Viewer = () => {
  return(
    <Box>
      <Box pt="5">
        
      <SlateEditor />
      </Box>
    </Box>
  )
}


export default Index;
