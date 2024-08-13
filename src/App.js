import './App.css';
import { useContext, useEffect } from 'react';
import { supabase } from './Helpers/supabase';
import {Login} from './Components/Auth/Login/login';
import { Home } from './Components/Home/Home';
import { Routes, Route } from 'react-router-dom';
import { SessionContext } from './Helpers/SessionProvider';
import AuthRoute from './Components/Auth/Login/AuthRoute';

function App() {
  const {session, setSession} = useContext(SessionContext);
  console.log(session)

  async function signOut() {
    const {error} = await supabase.auth.signOut();
    if (!error) {
      setSession(null)
    }
  }

  if (!session) {
    return (
      <Login />
    )
  }

  else {
    return (<>
      <div>Logged in !</div>
      <button onClick={signOut}>S</button>
    </>)
  }
}

export default App;
