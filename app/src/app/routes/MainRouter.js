import { useEffect } from "react";
import PrivateRouter from "./PrivateRouter"
import PublicRouter from "./PublicRouter"

const MainRouter = () => {
    // state user

    useEffect(() => {
        // get token from local storage
        // verify is valid token
        // setState
    },[])

    return ( 
        <>
         {/* if user */}
          <PrivateRouter />

          <PublicRouter />
        </> 
    );
}
 
export default MainRouter;