import { Route, Routes } from "react-router-dom";
import FormPost from "../modules/post/FormPost"

const PrivateRouter = () => {
    return ( 
        <Routes>
            <Route path="/posts/new" element={<FormPost />} />
            <Route path="/posts/:id" element={<FormPost />} />
        </Routes>
     );
}
 
export default PrivateRouter;