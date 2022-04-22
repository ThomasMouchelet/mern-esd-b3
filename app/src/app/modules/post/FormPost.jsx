import { useEffect, useState } from "react";
import { create, getPost } from "../../../services/post.service";
import { Link, useNavigate, useParams } from "react-router-dom";

const FormPost = () => {
    const [credentials, setcredentials] = useState({});
    const navigate = useNavigate()
    const { id } = useParams()

    useEffect(()=>{
        console.log("id from param : ", id)
        
    },[])

    const fetchPost = async () => {
        try {
            const data = await getPost(id)
            console.log(data)
        } catch (error) {
            console.log(error);
        }
    }
    
    const handleChange = (e) => {
        setcredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await create(credentials);
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    }

    return ( 
        <div>
            <Link to="/">Retour</Link>

            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    onChange={handleChange} 
                    placeholder="title" 
                    name="title"
                />
                <input 
                    type="text" 
                    onChange={handleChange} 
                    placeholder="content" 
                    name="content"
                />
                <input type="submit" value="ajouter" />
            </form>
        </div>
     );
}
 
export default FormPost;