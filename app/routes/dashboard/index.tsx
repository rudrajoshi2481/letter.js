import {
  Box,
  Button,
  Divider,
  Heading,
  HeadingProps,
  HStack,
  ListItem,
  OmitCommonProps,
  OrderedList,
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
      <Viewer />
      <Divider orientation='vertical' />
      <OldPrescriptions />
      </HStack>
    </>
  );
}


const OldPrescriptions = () => {
  
  return (
    <VStack pl="9" pt="3" alignItems={"flex-start"}>
        <Heading fontSize="2xl">Old Prescriptions</Heading>
        <UnorderedList>
          <ListItem>date 17-15-87</ListItem>
        </UnorderedList>
    </VStack>
  );
};

const Viewer = () => {
  return(
    <Box >
      <Box pt="5">
        
      <SlateEditor />
      </Box>
    </Box>
  )
}


export default Index;
