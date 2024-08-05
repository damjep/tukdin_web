import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "./supabase";

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

const login = (email, password) =>
    supabase.auth.signInWithPassword({ email, password });

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [auth, setAuth] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const {data} = supabase.auth.onAuthStateChange((event, session) => {
            if (event === "SIGNED_IN") {
                setUser(session.user);
                setAuth(true);
            }
        });

        const getUser = async () => {
            const { data } = await supabase.auth.getUser();
            const { user: currentUser } = data;
            setUser(currentUser ?? null);
            setLoading(false);
        };

        getUser();

        return () => {
            data.subscription.unsubscribe();
        }
    }, [])

    return (
        <AuthContext.Provider value={{ user, login }}>
          {!loading && children}
        </AuthContext.Provider>
      );
}

export default AuthProvider;
