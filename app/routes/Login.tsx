import {
  Box,
  Button,
  Container,
  FormHelperText,
  FormLabel,
  Heading,
  HStack,
  Input,
  Spacer,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useToast,
} from "@chakra-ui/react";
import { json } from "express";
import { getAuth } from "firebase-admin/auth";

import React, { useEffect } from "react";
import {
  ActionFunction,
  Form,
  redirect,
  useActionData,
  useSubmit,
  useTransition,
} from "remix";
import { createAndSaveSession } from "~/logic/sessionAutrhLogic";
import { commitSession } from "~/sessions";
import { createCustormToken, createUser } from "~/utils/auth.server";
import { fireAuth, firestore } from "~/utils/fire.server";

// export const action: ActionFunction = async ({ request }: any) => {
//   const form = await request.formData();
//   let formAction = form.get("_action");
//   let email = form.get("email");
//   let password = form.get("password");
//   let profileName = form.get("profileName");

//   const col = firestore.collection("users");
//   let res : any;
//   if (formAction === "createuser") {
//     if (email && password && profileName) {
//       await createUser({
//         email,
//         password,
//         displayName: profileName,
//       }).then(async (userRecord) => {
//         res = { status: true, id: userRecord.uid };
//         await createAndSaveSession(userRecord.uid,request)
//       });
//     }
//   }

//   return res.status ? redirect("/dashboard") : res
// };

export const action: ActionFunction = async ({ request }: any) => {
  const form = await request.formData();
  let formAction = form.get("_action");
  let email = form.get("email");
  let password = form.get("password");
  let displayName = form.get("profileName");
  let centerName = form.get("centerName");

  const col = firestore.collection("rxlabsUsers");

  let msg: any = "";
  const collectionUser = firestore.collection("RxlabsUsers");
let res;

  switch (formAction) {
    case "createUser":

       res = await collectionUser
        .doc()
        .set({ email, displayName, password });
      msg = { status: true, res };

      break;
    case "loginUser":
      
    // res = await collectionUser.
      // let res = await collectionUser.get

      break;
  }

  return msg.status ? redirect("/dashboard") : msg;
};

function Login() {
  const ActionData = useActionData();
  const toast = useToast();

  useEffect(() => {
    ActionData
      ? ActionData.status === "true"
        ? redirect("/dashboard")
        : null
      : null;
  }, []);

  if (ActionData) {
  }

  return (
    <Container maxH="container.lg">
      {JSON.stringify(ActionData)}

      <Box
        display={"flex"}
        justifyContent="center"
        mt="30"
        alignItems={"center"}
      >
        <Box style={{ width: "60vw" }}>
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
        </Box>
      </Box>
    </Container>
  );
}

const LoginUser = () => {
  return (
    <Box>
      <Form method="post">
        <FormLabel>Center</FormLabel>
        <Input
          name="center"
          type="center"
          required
          placeholder="Digital Labs"
        ></Input>

        <Spacer />
        {/* All Old inputs Down*/}
        <FormLabel>Email</FormLabel>
        <Input
          name="email"
          type="email"
          required
          placeholder="jhon@gmail.com"
        ></Input>
        <FormHelperText>We'll never share your email.</FormHelperText>
        <FormLabel>Password</FormLabel>
        <Input
          name="password"
          required
          placeholder="password"
          type="password"
        ></Input>
        <Spacer />
        <HStack mt="6" justifyContent={"center"} alignItems="center">
          <Button
            name="_action"
            value={"loginUser"}
            type="submit"
            colorScheme={"green"}
          >
            Login
          </Button>
          <Spacer />
        </HStack>
      </Form>
    </Box>
  );
};

const CreateNewUser = () => {
  const ActionData = useActionData();

  return (
    <Box>
      <Form method="post">
        <FormLabel>Profile Name</FormLabel>
        <Input
          type="text"
          required
          name="profileName"
          placeholder="Jhon Doe"
        ></Input>
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          required
          name="email"
          placeholder="jhon@gmail.com"
        ></Input>
        <FormHelperText>We'll never share your email.</FormHelperText>
        <FormLabel>Password</FormLabel>
        <Input
          required
          placeholder="password"
          name="password"
          type="password"
        ></Input>
        <FormLabel>Centre Name</FormLabel>
        <Input
          type="text"
          required
          name="centerName"
          placeholder="Center Name"
        ></Input>
        {/* <FormLabel>Licence</FormLabel>
        <Input
          type="file"
          required
          // name="licence"
          // placeholder="Jhon Doe"
        ></Input> */}
        <Spacer />
        <HStack mt="6" justifyContent={"center"} alignItems="center">
          <Button
            name="_action"
            value={"createUser"}
            type="submit"
            colorScheme={"green"}
          >
            Create Profile
          </Button>
          <Spacer />
        </HStack>
      </Form>
    </Box>
  );
};

// prescription

export default Login;
