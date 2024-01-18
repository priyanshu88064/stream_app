import { useState } from "react";
import {profile, tick} from "./ImageHandler";
import Tags from "./Tags";
import Videos from './Videos';

function Channel({all}){

    const [activeItem,setActiveItem] = useState("Live");

    const handleItem = item=>{
        setActiveItem(item);
    }

    return (
        <div className="channel">
            <div className="channelhead">
               <div className="cchead">
                    <div className="cpfpimg"><img src={profile} alt="Profile"/></div>
                    <div className="cinfo">
                        <div className="ctitle"><div>JONATHAN GAMING</div> <img src={tick} alt="tick"/></div>
                        <div className="cmeta"><span>1.8M</span> Followers <span>3</span> Following</div>
                    </div>
               </div>
               <div className="tagscont">
                    <Tags Name={"BGMI"}/>
                    <Tags Name={"Valorant"}/>
                    <Tags Name={"Gaming"}/>
               </div>
            </div>
            <div className="channelfoot">
                <div className="channelnavbar">
                    <div className={`cnavitem ${activeItem==="Live"?"cniactive":""}`} onClick={()=>handleItem("Live")}>Live</div>
                    <div className={`cnavitem ${activeItem==="Videos"?"cniactive":""}`} onClick={()=>handleItem("Videos")}>Videos</div>
                    <div className={`cnavitem ${activeItem==="Clips"?"cniactive":""}`} onClick={()=>handleItem("Clips")}>Clips</div>
                </div>
                <hr/>
                <div className="channelbody">
                    <Videos pad={true} all={all}/>
                </div>
            </div>
        </div>
    );
}
export default Channel;