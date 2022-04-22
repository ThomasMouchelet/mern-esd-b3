import { useState } from "react";

const FormSignin = () => {
    const [credentials, setCredentials] = useState({})

    const handleChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(credentials)
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