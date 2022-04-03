import {
  Box,
  Button,
  FormLabel,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Input } from "@chakra-ui/react";
import { ActionFunction, useActionData } from "remix";
import { fireAuth ,firestore} from "~/utils/fire.server";

export const action: ActionFunction = async ({ request }: any) => {
  const form = await request.formData();
  let formAction = form.get("_action");
  let email = form.get("email");
console.log(email);

  const col = firestore.collection("rxpat");
let msg;
  switch (formAction) {
    case "createPat":
      col.get().then((snap) => {
        snap.forEach(m => {
          if(m.data().email === email){
            msg = { status: true, login:true ,data:m.data()};
          }
        })
      }).catch(err => {
        msg = { status: true, login:false ,data:err};
      })
      break;
  }
  console.log(msg);

  return msg
};

const FindSavedPat = () => {
  return (
    <Box
      pt="3"
      border={"3px"}
      style={{ width: "30vw", minHeight: "40vh" }}
      p="3"
      mt="3"
      w="60"
    >
      <FormLabel>Patient Id</FormLabel>
      <Input mb="1" my="1" type="number" placeholder="patient id" />

      <FormLabel>Patient Name</FormLabel>
      <Input my="1" mb="1" type="number" placeholder="Name" />
      <FormLabel>Patient PhoneNumber</FormLabel>
      <Input mb="1" my="1" type="number" placeholder="Phone Number" />

      <Button my="3">Search</Button>
    </Box>
  );
};

const CreateNewPatient = () => {
  const [e, setE] = useState("");

  return (
    <Box
      pt="3"
      border={"3px"}
      style={{ width: "30vw", minHeight: "40vh" }}
      p="3"
      mt="3"
      w="60"
    >
      <FormLabel>Patient Email Id</FormLabel>
      <Input
        mb="1"
        name="email"
        type="email"
        my="1"
        onChange={(e) => setE(e.target.value)}
        value={e}
        
        placeholder="patient Email"
      />
   
      <Button
        m="3"
        name="_action"
        value={"createPat"}
        type="submit"
        colorScheme={"green"}
      >
        create Patient
      </Button>
    </Box>
  );
};

const GetAllPatient = () => {
  return <Text>Get all Patient</Text>;
};

function FindPatient() {
  const ActionData = useActionData();
  useEffect(() => {
    console.log(ActionData);
    
    if(ActionData){
      // setD(ActionData.data)
    }
  },[ActionData])


  return (
    <Box style={{ width: "60vw" }}>
      <Tabs>
        <TabList>
          <Tab>Login</Tab>
          <Tab>Create New Patient</Tab>
          <Tab>Get all Patient</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <FindSavedPat />
          </TabPanel>
          <TabPanel>
            <CreateNewPatient />
          </TabPanel>
          <TabPanel>
            <GetAllPatient />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}

{
  /* <Box style={{ width: "60vw" }}>
<Tabs>
  <TabList>
    <Tab>Login</Tab>
    <Tab>Create New User</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
      <LoginUser />
    </TabPanel>
    <TabPanel>
      <CreateNewUser />
    </TabPanel>
  </TabPanels>
</Tabs>
</Box> */
}

export default FindPatient;
