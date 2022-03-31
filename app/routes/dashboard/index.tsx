import {
  Box,
  Button,
  Divider,
  Heading,
  HeadingProps,
  HStack,
  Input,
  ListItem,
  OmitCommonProps,
  OrderedList,
  Spacer,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import SlateEditor from "~/components/SlateEditor";

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import { AiOutlineDown, AiFillWarning } from "react-icons/ai";

import { PinInput, PinInputField } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { PresContext, PresContextProvider } from "~/context/presContext";

function Index() {
  // const [d,setD] = useContext(PresContext)

  // const addMainData = (e:any) => {
  // const o = {
  //   nameDrug: "",
  //   dosageForm: "",
  //   mg: "",
  //   duration: "",
  // }

  // let last = d

  // last.push(o)

  // setD(last)

  // }

  return (
    <>
      <PresContextProvider>
        <Button my="3" mb="3">
          Create New{" "}
        </Button>
        <Divider />
        <VStack justifyContent={"flex-start"} alignItems="flex-start">
          <HStack justifyContent={"flex-start"} alignItems="flex-start">
            <Viewer />

            <OldPrescriptions />
          </HStack>

          <Button
            onClick={(e) => {
              window.print();
              console.log("print");
            }}
          >
            Print 🖨️
          </Button>

          <Button>Save Prescription </Button>
        </VStack>
      </PresContextProvider>
    </>
  );
}

const OldPrescriptions = () => {
  return (
    <VStack pl="9" pt="3" alignItems={"flex-start"}>
      <Heading fontSize="2xl">Old Prescriptions</Heading>
      <UnorderedList>
        <ListItem listStyleType="none">date 17-15-87</ListItem>
      </UnorderedList>
    </VStack>
  );
};

const Viewer = () => {
  const [d, setD] = useContext(PresContext);
  const addRow = (e: any) => {

    let oldData = []

    d.map((oldD:any) => {
      oldData.push(oldD)
    })

    oldData.push({
      nameDrug: "",
      dosageForm: "",
      mg: "",
      duration: "",
      
    })


    setD(oldData)

    console.log(d);
    

  };

  return (
    <Box>
      <Box>
        <PresBox />
        <Button
          onClick={(e) => {
            addRow(e);
            
          }}
        >
          Add +
        </Button>
      </Box>
    </Box>
  );
};

const PresBox = () => {
  const [d, setD] = useContext(PresContext);

  return (
    <Box>
      {/* <PresStack />
      <PresStack />
      <PresStack /> */}

      {d.map((r: any) => {
        return <PresStack data={r} />;
      })}
    </Box>
  );
};

const PresStack = ({ data }: any) => {
  const [preCon, setPreCon] = useContext(PresContext);

  const changeUpdate = (data: any) => {};

  return (
    <Box py="3" w="full" display="flex" justifyContent="space-around">
      {/* <Text color="red  "><AiFillWarning /></Text> */}
      <VStack>
        <Text>Drug</Text>
        <Input
          mx="1"
          type="text"
          placeholder="name of Drug"
          value={data.nameDrug}
          onChange={(e) => changeUpdate(e)}
        />
      </VStack>
      <Spacer />
      <VStack mx="2">
        <Text>Dosage Form</Text>
        <Menu>
          <MenuButton
            value={data.dosageForm}
            as={Button}
            rightIcon={<AiOutlineDown />}
          >
            {data.dosageForm}
          </MenuButton>
          <MenuList>
            <MenuItem>Ointments</MenuItem>
            <MenuItem>syrup</MenuItem>
            <MenuItem>Tablet</MenuItem>
            <MenuItem>Powder</MenuItem>
            <MenuItem>Pills</MenuItem>
          </MenuList>
        </Menu>
      </VStack>
      <Spacer />
      <VStack mx="2">
        <Text>Dose mg</Text>
        <NumberInput
          mx="3"
          defaultValue={15}
          value={data.mg}
          precision={2}
          step={0.2}
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </VStack>

      {/* Pin Input */}
      <VStack mx="2">
        <Text>Duration</Text>
        <HStack>
          <PinInput defaultValue={data.duration}>
            <PinInputField />
            <PinInputField />
            <PinInputField />
          </PinInput>
        </HStack>
      </VStack>
    </Box>
  );
};

export default Index;
