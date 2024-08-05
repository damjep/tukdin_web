import {createContext, useEffect, useState } from "react";
import { supabase } from "./supabase";

export const SessionContext = createContext();

export const SessionProvider = ({children}) => {
    const [session, setSession] = useState(null);

    useEffect(() => {
        const {data: { subscription }} = supabase.auth.onAuthStateChange(
          (event, session) => {
            if (event === 'SIGNED_OUT') {
                setSession(null)
            } else if (session) {
                sessionStorage.setItem("session", session)
                setSession(session)
            }
          })
    
        return () => {
          subscription.unsubscribe()
        }
      }, [])

    return (<>
        <SessionContext.Provider value={{session, setSession}}>
            {children}
        </SessionContext.Provider>
    </>)
}


