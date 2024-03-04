import { useState } from "react";
import Body from "./Body";
import Header from "./Header";
import GoLive from "./GoLive";

function Home(){

    const [isCreateNewLive,setIsCreateNewLive] = useState(false); 

    return (
        <div className="home">
            <Header setIsCreateNewLive={setIsCreateNewLive}/>
            {
                isCreateNewLive?<GoLive/>:<Body/>
            }
        </div>
    );
}

export default Home;