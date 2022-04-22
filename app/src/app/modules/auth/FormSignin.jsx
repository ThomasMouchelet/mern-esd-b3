import { useState } from "react";
import { signin } from "../../../services/auth.service";

const FormSignin = () => {
    const [credentials, setCredentials] = useState({})

    const handleChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await signin(credentials)
            // TODO :redirect to route admin
        } catch (error) {
            console.log(error)
        }
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <input 
                type="email"
                placeholder="Email"
                name="email"
                onChange={handleChange}
            />
            <input 
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleChange}
            />
            <input type="submit"  />
        </form>
     );
}
 
export default FormSignin;