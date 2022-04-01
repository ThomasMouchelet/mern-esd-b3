import { useEffect, useState } from "react";
import { deletePost, getPosts } from "../services/post.service";
import {Link} from 'react-router-dom'

const PostsList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchPosts()
    },[])

    const fetchPosts = async () => {
        try {
            const data = await getPosts()
            setPosts(data)
        } catch (error) {
            console.log(error)
        }
    }

    const handleDelete = async (id) => {
        try {
            await deletePost(id)
            fetchPosts()
        } catch (error) {
            console.log(error)
        }
    }

    return ( 
        <div>
            <h1>PostsList</h1>

            <Link to="/posts/new">Add new post</Link>

            <ul>
                {posts.map(post => (
                    <li key={post._id}>
                        <Link to={`/posts/${post._id}`}>{post.title}</Link>
                        <button onClick={()=>handleDelete(post._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
     );
}
 
export default PostsList;