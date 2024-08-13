import { Button, Form } from "react-bootstrap";
import { supabase } from "../../../Helpers/supabase";
import { useState, useEffect, useContext, useRef } from "react";
import { SessionContext } from "../../../Helpers/SessionProvider";
import {useNavigate } from "react-router-dom";
import { useAuth } from "../../../Helpers/AuthProvider";

export const Login = () =>  {
    const emailRef = useRef(null)
    const passRef = useRef(null)
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const {setSession} = useContext(SessionContext)
    const navigate = useNavigate()
    const {login} = useAuth();
    const[loading, setLoading] = useState(false);

    const signIn = async(e) => {
        e.preventDefault();

        try {
            setLoading(true);
            const{
                data: {user, session},
                error
            } = await login(emailRef.current.value, passRef.current.value);
            if (error) console.log(error.message);
            if (user && session) navigate('/');
        } catch (e) {
            console.log(e.message);
        }

        setLoading(false);
    }

    const handleEmailChange = (event) => {
        setEmail(event.target?.value)
    }

    const handlePassChange = (event) => {
        setPass(event.target?.value)
    }

    useEffect(() => {
        
    })
    return (<>
        <Form onSubmit={signIn}>
            <div>
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" ref={emailRef} onChange={handleEmailChange}/>
            </div>

            <div>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter your password" ref={passRef} onChange={handlePassChange}/>
            </div>

            <Button type="submit" >
                Login
            </Button>
        </Form>
    </>)
}