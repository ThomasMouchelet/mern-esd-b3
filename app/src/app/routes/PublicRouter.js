import { Route, Routes } from "react-router-dom";
import PostsList from "../pages/post/PostsList";
import FormSignin from "../modules/auth/FormSignin";

const PublicRouter = () => {
    return ( 
        <Routes>
            <Route path="/" element={<PostsList />} />
            <Route path="/auth/signin" element={<FormSignin />} />
        </Routes>
     );
}
 
export default PublicRouter;