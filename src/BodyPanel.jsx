import Item from "./Item";
import homeicon from "./icons/home.svg"
import liveicon from "./icons/live.svg"
import videoicon from "./icons/videos.svg"
import gameicon from "./icons/game.svg"
import jonnyicon from "./icons/jonathan.jpg"
import recicon from "./icons/recommended.svg"
import {collapse, streamer} from "./ImageHandler"
import { useState } from "react";

function BodyPanel({isCol,setIsCol,liveMerged}){

    const [activeItem,setActiveItem] = useState("HOME");
   
    const handleCollapse = ()=>{
        setIsCol(val=>!val);
    }

    return (
        <div className="bpanel">
            <div className="bpanelup">
                <div className={`collapse ${isCol?"colt":"colf"}`} onClick={handleCollapse}><img src={collapse} alt="collapse"/></div>
                {
                    [...Array(
                        {title:"HOME",icon:homeicon},
                        {title:"LIVE NOW",icon:liveicon},
                        {title:"VIDEOS",icon:videoicon},
                        {title:"GAMES",icon:gameicon},
                        {title:"STREAMERS",icon:streamer}
                    )].map((item,index)=>(
                        <Item
                            key={index}
                            Name={item.title} 
                            font={"13px"} 
                            icon={item.icon} 
                            activeItem={activeItem} 
                            setActiveItem={setActiveItem} 
                            isCol={isCol}
                        />
                    ))
                }
            </div>
            <div className="bpaneldown">
                {!isCol && <div className="label">
                    <div className="li"><img src={recicon} alt="Icon"/></div>
                    <div className="mi">RECOMMENDED</div>
                </div>}
                {
                    liveMerged && liveMerged.length ?
                    
                    liveMerged.map(live=>(
                        <Item 
                            key={live.id}
                            Name={live.publisher.name}
                            watching={live.viewers}
                            font={"12px"}
                            icon={jonnyicon}
                            isCol={isCol}
                            liveId={live.id}
                        />
                    ))
                    :
                    [...Array(5)].map((_,index)=>(
                        <Item
                            Name={""}
                            key={index}
                            font={"12px"}
                            isCol={isCol}
                        />
                    ))
                }
            </div>
        </div>
    );
}
export default BodyPanel;