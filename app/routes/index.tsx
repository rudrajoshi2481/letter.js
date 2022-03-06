import { Heading } from "@chakra-ui/react";
import React from "react";
import { LoaderFunction, useLoaderData } from "remix";
import { firestore } from "~/utils/fire.server"

export const loader: LoaderFunction = async () => {
  const collectionUser = firestore.collection("users");

  let res = await collectionUser
    .doc()
    .set({ first: "Jhson", last: "Doe", email: "rudra@gmial.com" });


  

  return {msg:"saved data",res}

};

function Index() {

  const post = useLoaderData()

  return (
    <>
      <Heading>Home Page</Heading>
      {
        JSON.stringify(post)
      }
    </>
  );
}

export default Index;
