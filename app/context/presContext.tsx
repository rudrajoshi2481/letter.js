import {createContext, useState} from "react"

export const PresContext = createContext<any>(null)


export const PresContextProvider = (props:any) => {

    const mainData = [{
        nameDrug:"paracetamol",
        dosageForm:"syrup",
        mg:"16",
        duration :"101"
    },{
        nameDrug:"warfarin",
        dosageForm:"syrup",
        mg:"16",
        duration :"111"
    }]

    const [data,setData] = useState(mainData)


    return (
        <PresContext.Provider value={[data,setData]}>
            {props.children}
        </PresContext.Provider>
    )
}
