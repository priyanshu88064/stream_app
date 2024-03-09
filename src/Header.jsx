import { useAuth0 } from "@auth0/auth0-react";
import HeaderUser from "./HeaderUser";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { createvideo, logo } from "./ImageHandler";

function Header({setIsCreateNewLive,setUserObject}){
    
    
    const {loginWithRedirect,user,isAuthenticated,logout} = useAuth0();
    const [btnText,setBtnText] = useState("LIVE");
    const [btnBack,setBtnBack] = useState("rgb(92,0,205)");

    const handleGoLive = ()=>{
        setIsCreateNewLive(curr=>!curr);
        setBtnText(text=>{
            if(text==="LIVE")return "HOME";
            else return "LIVE";
        });
    }

    useEffect(()=>{
        setInterval(() => {
           
            setBtnBack("linear-gradient(101deg, rgba(92,0,205,1) 40%, rgba(255,255,255,1) 49%, rgba(92,0,205,1) 58%)")

            setTimeout(() => {
                setBtnBack("rgb(92, 0, 205)")
            }, 1500);

        },7000);
    },[]);

    return (
        <div className="header">
            <div className="streamnet"><img src={logo}/>Stream4U</div>
            <div className="searchbar">
                <input type="text" id="search" placeholder="Search for streamers,games,videos" autoComplete="off"/>
            </div>
            <div className="hlast">
                {
                    isAuthenticated ?
                    <>
                        <div className={`btngolive ${btnBack.length>15?"setanim":""}`} style={{background:btnBack}} onClick={handleGoLive}><img src={createvideo}/>{btnText}</div>
                        <HeaderUser user={user} logoutAction={logout} setUserObject={setUserObject}/>
                    </> :
                    <div className="login" onClick={loginWithRedirect}>LOGIN</div>
                }
            </div>
        </div>
    );
}

export default Header;
