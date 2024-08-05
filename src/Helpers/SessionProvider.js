import {createContext, useEffect, useState } from "react";
import { supabase } from "./supabase";

export const SessionContext = createContext();

export const SessionProvider = ({children}) => {
    const [session, setSession] = useState(null);
    return (<>
        <SessionContext.Provider value={{session, setSession}}>
            {children}
        </SessionContext.Provider>
    </>)
}


