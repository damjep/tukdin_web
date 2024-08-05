import './App.css';
import { useContext, useEffect } from 'react';
import { supabase } from './Helpers/supabase';
import Login from './Components/Auth/Login/login';
import { Home } from './Components/Home/Home';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { SessionContext } from './Helpers/SessionProvider';

function App() {
  const { session, setSession } = useContext(SessionContext);

  async function getSession() {
    const { data, error } = await supabase.auth.getSession();
    if (error) {
      console.error('Error getting session:', error.message);
      return;
    }
    if (data) {
      setSession(data.session);
    }
  }

  useEffect(() => {
    getSession()

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => subscription.unsubscribe()
  }, []);

  return (<>
  <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/home" element={<Home />} />
  </Routes>
  </>)

}

export default App;
