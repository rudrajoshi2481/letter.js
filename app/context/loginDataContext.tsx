import { createContext, useState } from "react";

export const LoginContext = createContext<any>(null);
// import uuid from "uuid";

export const LoginContextProvider = (props: any) => {
  

  const mainData = [{
      nameDrug:"paracetamol",
      dosageForm:"syrup",
      mg:"16",
      duration :"101",
  },{
      nameDrug:"warfarin",
      dosageForm:"lotion",
      mg:"16",
      duration :"111"
  }]

//   const [data, setData] = useState(mainData)
  const [data, setData] = useState({
      email:"",
      displayName:""
  });

  return (
    <LoginContext.Provider value={[data, setData]}>
      {props.children}
    </LoginContext.Provider>
  );
};
