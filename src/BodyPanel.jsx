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
                <Item Name={"HOME"} font={"13px"} icon={homeicon} activeItem={activeItem} setActiveItem={setActiveItem} isCol={isCol}/>
                <Item Name={"LIVE NOW"} font={"13px"} icon={liveicon} activeItem={activeItem} setActiveItem={setActiveItem} isCol={isCol}/>
                <Item Name={"VIDEOS"} font={"13px"} icon={videoicon} activeItem={activeItem} setActiveItem={setActiveItem} isCol={isCol}/>
                <Item Name={"GAMES"} font={"13px"} icon={gameicon} activeItem={activeItem} setActiveItem={setActiveItem} isCol={isCol}/>
                <Item Name={"STREAMERS"} font={"13px"} icon={streamer} activeItem={activeItem} setActiveItem={setActiveItem} isCol={isCol}/>
            </div>
            <div className="bpaneldown">
                {!isCol && <div className="label">
                    <div className="li"><img src={recicon} alt="Icon"/></div>
                    <div className="mi">RECOMMENDED</div>
                </div>}
                {
                    liveMerged.map(live=>(
                        <Item 
                            key={live.id}
                            Name={live.publisher.name}
                            watching={live.viewers}
                            font={"12px"}
                            icon={jonnyicon}
                            isCol={isCol}
                        />
                    ))
                }
            </div>
        </div>
    );
}
export default BodyPanel;