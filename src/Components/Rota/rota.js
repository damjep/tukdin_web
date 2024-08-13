import { Form, Button } from "react-bootstrap"
import { useAuth } from "../../Helpers/AuthProvider"
import { supabase } from "../../Helpers/supabase";
import { useState } from "react";

export const Rota = () => {
    const {user} = useAuth();
    const [day, setDay] = useState('');
    const [shift, setShift] = useState('');
    const [res, setRes] = useState([]);

    const [loading, setLoading] = useState(false);


    const handleChange = (day, shift) => {
        setRes(prevRes => {
            // Remove the existing entry for the same day
            const updatedRes = prevRes.filter(item => item.day !== day);
            // Add the new entry
            updatedRes.push({ day, shift });
            return updatedRes;
        });

        console.log(res);
    };

    const submitForm = async (e) => {
        e.preventDefault();
        

        try {
            setLoading(true);
            const {data, error } = await supabase.from('Rota').insert([
                {user_id: user.email, dates_available: res}
            ]).select();
            if (data) {
                alert('Rota upload successful');
            }
        } catch(e) {
            console.log(e.message);
            alert('Error uploading rota');
        } finally {
            setLoading(false);
        }

    }

    return (<>
    <div id="rota" >
        <Form  className="d-flex flex-row" onSubmit={submitForm}>
            {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday'].map((day, i) => (
                    <div key={i}>
                        <h3>{day}</h3>
                        {['Am', 'PM', 'Both', 'Not Available'].map((shift, index) => (
                            <Form.Check key={index}
                                type="radio"
                                name={day}
                                label={shift}
                                onChange={() => handleChange(day, shift)}
                            />
                        ))}
                    </div>
                    
            ))}

            <Button type="submit" >
                Login
            </Button>
        </Form>
    </div>
    </>)
}