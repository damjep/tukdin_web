import { Form } from "react-bootstrap"

export const Rota = () => {
    return (<>
    <div id="rota" >
        <Form  className="d-flex flex-row" >
            {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday'].map((day, i) => (
                    <div key={i}>
                        <h3>{day}</h3>
                        {['Am', 'PM', 'Both', 'Not Available'].map((shift, index) => (
                            <Form.Check key={index}
                                type="radio"
                                name={i}
                                label={shift}
                            />
                        ))}
                    </div>
                    
            ))}
        </Form>
    </div>
    </>)
}