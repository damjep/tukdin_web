import './App.css';
import { useContext, useEffect} from 'react';
import { supabase } from './Helpers/supabase';
import Login from './Components/Auth/Login/login';
import { SessionContext } from './Helpers/SessionProvider';

function App() {
  const {session, setSession} = useContext(SessionContext);
  console.log(session)

  async function signOut() {
    const {error} = await supabase.auth.signOut();
    if (!error) {
      setSession(null)
    }
  }

  useEffect(()=> {
    supabase.auth.getSession().then(({data: {session}}) => {
      setSession(session);
    })

    const {
      data: {subscription},
    } = supabase.auth.onAuthStateChange((_event , session) => {
      setSession(session)
    })

    return () => subscription.unsubscribe()
  }, [])
  
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
