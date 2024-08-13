import { useContext, useEffect } from "react"
import { SessionContext } from "../../Helpers/SessionProvider"
import { Rota } from "../Rota/rota"
import { useNavigate } from "react-router-dom"
import { supabase } from "../../Helpers/supabase"
import { useAuth } from "../../Helpers/AuthProvider"

export const Home = () => {
    const {user} = useAuth();

    return (<>
    <div>
        <h1>Welcome to Home Page {user.email}</h1>
        <Rota />
    </div>
    </>)
}