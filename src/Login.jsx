import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";


function Login(){

    const {user,isAuthenticated} = useAuth0();
    
    const [msg,setMsg] = useState("null");

    return (
        <>
            <div>Login</div>
            {isAuthenticated?user.name:"not logged in"}
            <h3>Message: </h3>
            {msg}
        </>
    );
}
export default Login;