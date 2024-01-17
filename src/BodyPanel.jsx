import Item from "./Item";
import homeicon from "./icons/home.svg"
import liveicon from "./icons/live.svg"
import videoicon from "./icons/videos.svg"
import gameicon from "./icons/game.svg"
import jonnyicon from "./icons/jonathan.jpg"
import recicon from "./icons/recommended.svg"
import {collapse, streamer} from "./ImageHandler"
import { useState } from "react";

function BodyPanel({isCol,setIsCol}){

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
                <Item Name={"Jonathan Gaming"} watching={1123}  font={"12px"} icon={jonnyicon} isCol={isCol}/>
                <Item Name={"DynamoIsLive"} watching={12000} font={"12px"} icon={jonnyicon} isCol={isCol}/>
                <Item Name={"Mortal"} watching={230} font={"12px"} icon={jonnyicon} isCol={isCol}/>
                <Item Name={"BlindxSpower"} watching={4500} font={"12px"} icon={jonnyicon} isCol={isCol}/>
                <Item Name={"CarryIsLive"} watching={901} font={"12px"} icon={jonnyicon} isCol={isCol}/>
                <Item Name={"PewDiePie"} watching={1290} font={"12px"} icon={jonnyicon} isCol={isCol}/>
                <Item Name={"Levinho"} watching={43000} font={"12px"} icon={jonnyicon} isCol={isCol}/>
                <Item Name={"Scout"} watching={120} font={"12px"} icon={jonnyicon} isCol={isCol}/>
            </div>
        </div>
    );
}
export default BodyPanel;