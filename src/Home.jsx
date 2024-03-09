import { useState } from "react";
import Body from "./Body";
import Header from "./Header";
import GoLive from "./GoLive";
import GoLiveContainer from "./GoLiveContainer";

function Home(){

    const [userObject,setUserObject] = useState(null);
    const [isCreateNewLive,setIsCreateNewLive] = useState(false); 

    return (
        <div className="home">
            <Header setIsCreateNewLive={setIsCreateNewLive} setUserObject={setUserObject}/>
            {
                isCreateNewLive?<GoLiveContainer userObject={userObject}/>:<Body/>
            }
        </div>
    );
}

export default Home;