import { useAuth0 } from "@auth0/auth0-react";
import HeaderUser from "./HeaderUser";
import { useNavigate } from "react-router-dom";

function Header({setIsCreateNewLive}){
    
    const {loginWithRedirect,user,isAuthenticated,logout} = useAuth0();

    const handleGoLive = ()=>{
        setIsCreateNewLive(curr=>!curr);
    }

    return (
        <div className="header">
            <div className="streamnet">Stream4U</div>
            <div className="searchbar">
                <input type="text" id="search" placeholder="Search for streamers,games,videos" autoComplete="off"/>
            </div>
            <div onClick={handleGoLive}>GoLive</div>
            <div className="hlast">
                {
                    isAuthenticated ?
                    <HeaderUser user={user} logoutAction={logout}/> : 
                    <div className="login" onClick={loginWithRedirect}>LOGIN</div>
                }
            </div>
        </div>
    );
}

export default Header;
