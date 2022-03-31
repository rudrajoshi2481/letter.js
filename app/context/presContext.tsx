import { createContext, useState } from "react";

export const PresContext = createContext<any>(null);
import uuid from "uuid";

export const PresContextProvider = (props: any) => {
  

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
  const [data, setData] = useState([
    {
      nameDrug: "",
      dosageForm: "",
      mg: "",
      duration: "",
      id:uuid.v4()
    },
  ]);

  return (
    <PresContext.Provider value={[data, setData]}>
      {props.children}
    </PresContext.Provider>
  );
};
