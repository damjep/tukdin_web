import './App.css';
import { useContext, useEffect } from 'react';
import { supabase } from './Helpers/supabase';
import {Login} from './Components/Auth/Login/login';
import { Home } from './Components/Home/Home';
import { Routes, Route } from 'react-router-dom';
import { SessionContext } from './Helpers/SessionProvider';
import AuthRoute from './Components/Auth/Login/AuthRoute';

function App() {
    
  return (<>
  
  <Routes>
    <Route element={<AuthRoute />} >
      <Route path="/" element={<Home />} />
      <Route path="/" element={<Home />} />
    </Route>

    <Route path="/login" element={<Login />} />
  </Routes>
  </>)
}

export default App;
