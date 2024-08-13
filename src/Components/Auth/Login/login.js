import { Button, Form } from "react-bootstrap";
import { supabase } from "../../../Helpers/supabase";
import { useState, useEffect, useContext } from "react";
import { SessionContext } from "../../../Helpers/SessionProvider";

export default function Login() {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const {session, setSession} = useContext(SessionContext)

    async function signIn() {
        const {data, error} = await supabase.auth.signInWithPassword({
            email: email,
            password: pass,
        })

        if (data) {
            setSession(data.session)
        } else {
            console.log(error)
        }
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }

    const handlePassChange = (event) => {
        setPass(event.target.value)
    }


    return (<>
        <Form onSubmit={signIn}>
            <div>
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" onChange={handleEmailChange}/>
            </div>

            <div>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter your password" onChange={handlePassChange}/>
            </div>

            <Button type="submit" >
                Login
            </Button>
        </Form>
    </>)
}