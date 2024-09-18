import { createContext } from "react"
import { doctors } from "../assets/assets"

export const AppContext = createContext()

const AppContextProvider =(props)=>{

   const cuuencySymbol = '$'

    const vlaue ={
        doctors,
        cuuencySymbol
    }
    return (
        <AppContext.Provider value={vlaue}>
            {props.children}
        </AppContext.Provider>
    )
}
export default AppContextProvider;
