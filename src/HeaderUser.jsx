import { useEffect, useState } from "react";
import {logout} from "./ImageHandler";
import { createStreamer } from "./api/streamerAccount";

function HeaderUser({user,logoutAction,setUserObject}){

    const [headUserPopup,setHeadUserPopup] = useState(false);

    const handlePopup = ()=>{
        setHeadUserPopup(x=>!x);
    }

    const handleStreamer = async ()=>{
        const response = await createStreamer({
            name:user.name,
            email:user.email,
            profileImg:user.picture
        });
        setUserObject(response);
    }

    useEffect(()=>{
        handleStreamer();
    },[user]);

    return (
        <div className="headeruser">
            <div className="huserimg" onClick={handlePopup}><img src={user.picture} alt="User"/></div>
            {headUserPopup && <div className="huserpopup">
                <div className="huserpopuphead">
                    <div><img src={user.picture} alt="User"/></div>
                    <div>{user.name}</div>
                    <div className="huseremail">{user.email}</div>
                </div>
                <div className="huserlogout" onClick={logoutAction}><img src={logout} alt="Logout"/>Logout</div>
            </div>}
        </div>
    );
}

export default HeaderUser;