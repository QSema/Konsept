import { createContext, useState, useEffect } from "react";
import supabase from "../config/supabaseClient";

export const globalState = createContext()

export const GlobalProvider = ({children}) => {
    const [state, setState] = useState([])
    useEffect(() => {
        getData();
      }, []);
  
      async function getData() {
        const { data } = await supabase.from("products").select('*');
        setState(data);
        console.log(state);
      }
    return (
        <globalState.Provider value={{state, setState}}>
            {children}
        </globalState.Provider>
    )
}