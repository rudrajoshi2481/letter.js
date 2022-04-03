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
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@chakra-ui/react";
import FindPatient from "~/components/FindPatient";
import MapFinder from "~/components/MapFinder";
import {BiArrowBack} from "react-icons/bi"
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

  const [showPage, setShowPage] = useState(1);

  return (
    <>
      <PresContextProvider>
        <Button my="3" mb="3">
          Create New{" "}
        </Button>
        <Divider />
        <Box>
          <Breadcrumb py="3">
            <BreadcrumbItem>
              <BreadcrumbLink color="green" onClick={(e) => setShowPage(0)}>
             <HStack>  <BiArrowBack />  <Text> Find Patient</Text></HStack>
              </BreadcrumbLink>
            </BreadcrumbItem>
            {showPage === 1 ? (
              <BreadcrumbItem>
                <BreadcrumbLink href="#">name of Patient</BreadcrumbLink>
              </BreadcrumbItem>
            ) : null}
          </Breadcrumb>
          {/* <MapFinder /> */}
        </Box>
        {showPage === 1 ? (
          <VStack justifyContent={"flex-start"} alignItems="flex-start">
            <HStack
              w="full"
              justifyContent={"space-between"}
              alignItems="flex-start"
            >
              <Viewer />

              <OldPrescriptions />
            </HStack>
<HStack  justifyContent={"space-between"} alignItems="flex-end">
  
<Button
              onClick={(e) => {
                window.print();
                console.log("print");
              }}
            >
              🖨️
            </Button>
            {/* <Button>Search Nearest Store</Button> */}

            <Button colorScheme={"green"}>Save Prescription </Button>
</HStack>
          </VStack>
        ) : (
          <FindPatient />
        )}
      </PresContextProvider>
    </>
  );
}

const OldPrescriptions = () => {
  return (
    <VStack pl="9" pt="3" mr="15" alignItems={"flex-start"}>
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
    let oldData = [];

    d.map((oldD: any) => {
      oldData.push(oldD);
    });

    oldData.push({
      nameDrug: "",
      dosageForm: "",
      mg: "",
      duration: "",
      id: new Date().getTime(),
    });

    setD(oldData);

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
<HStack>
</HStack>
      {d.map((r: any) => {
        return <PresStack data={r} />;
      })}
    </Box>
  );
};

const PresStack = ({ data }: any) => {
  const [preCon, setPreCon] = useContext(PresContext);

  const updateData = (e: any, id: any, type: any) => {
    let oldD = preCon;
    let newList: any = [];
    oldD.map((oldd: any) => {
      if (oldd.id === id) {
        switch (type) {
          case "nameDrug":
            let tmpData = {
              nameDrug: e.target.value,
              dosageForm: oldd.dosageForm,
              mg: oldd.md,
              duration: oldd.duration,
              id: oldd.id,
            };

            newList.push(tmpData);
            break;
            case "dosageForm":
              let tmpDataDose = {
                nameDrug: oldd.nameDrug,
                dosageForm: e,
                mg: oldd.md,
                duration: oldd.duration,
                id: oldd.id,
              };
  
              newList.push(tmpDataDose);
              break;

        }
      } else {
        newList.push(oldd);
      }



    });

    console.log(newList,"NEW LIST");
    console.log(oldD,"OLD LIST");
    setPreCon(newList)
  };

  return (
    <Box py="3" w="full" display="flex" justifyContent="space-around">
      {/* <Text color="red  "><AiFillWarning /></Text> */}
      {/* {JSON.stringify(preCon)} */}
      <VStack>
        <Text>Drug</Text>
        <Input
          mx="1"
          type="text"
          placeholder="name of Drug"
          value={data.nameDrug}
          onChange={(e) => updateData(e, data.id, "nameDrug")}
        />
      </VStack>
      <Spacer />
      <VStack mx="2">
        <Text> Dosage Form</Text>
        <Menu
          
        >
          <MenuButton
            value={data.dosageForm}
            as={Button}
            rightIcon={<AiOutlineDown />}
          >
            {data.dosageForm}
          </MenuButton>
          <MenuList>
            <MenuItem onClick={e => updateData("ointments", data.id, "dosageForm")}>Ointments</MenuItem>
            <MenuItem onClick={e => updateData("syrup", data.id, "dosageForm")}>syrup</MenuItem>
            <MenuItem onClick={e => updateData("tablets", data.id, "dosageForm")}>Tablet</MenuItem>
            <MenuItem onClick={e => updateData("powder", data.id, "dosageForm")}>Powder</MenuItem>
            <MenuItem onClick={e => updateData("pills", data.id, "dosageForm")}>Pills</MenuItem>
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
