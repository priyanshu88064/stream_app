import Item from "./Item";
import homeicon from "./icons/home.svg"
import liveicon from "./icons/live.svg"
import videoicon from "./icons/videos.svg"
import gameicon from "./icons/game.svg"
import jonnyicon from "./icons/jonathan.jpg"
import recicon from "./icons/recommended.svg"
import { Link } from "react-router-dom";

function BodyPanel(){
    return (
        <div className="bpanel">
            <div className="bpanelup">
                <Item Name={"HOME"} font={"13px"} icon={homeicon}/>
                <Item Name={"LIVE NOW"} font={"13px"} icon={liveicon}/>
                <Item Name={"VIDEOS"} font={"13px"} icon={videoicon}/>
                <Item Name={"GAMES"} font={"13px"} icon={gameicon}/>
            </div>
            <div className="bpaneldown">
                <div className="label">
                    <div className="li"><img src={recicon} alt="Icon"/></div>
                    <div className="mi">RECOMMENDED</div>
                </div>
                <Item Name={"Jonathan Gaming"} watching={1123}  font={"12px"} icon={jonnyicon}/>
                <Item Name={"DynamoIsLive"} watching={12000} font={"12px"} icon={jonnyicon}/>
                <Item Name={"Mortal"} watching={230} font={"12px"} icon={jonnyicon}/>
                <Item Name={"BlindxSpower"} watching={4500} font={"12px"} icon={jonnyicon}/>
                <Item Name={"CarryIsLive"} watching={901} font={"12px"} icon={jonnyicon}/>
                <Item Name={"PewDiePie"} watching={1290} font={"12px"} icon={jonnyicon}/>
                <Item Name={"Levinho"} watching={43000} font={"12px"} icon={jonnyicon}/>
                <Item Name={"Scout"} watching={120} font={"12px"} icon={jonnyicon}/>
            </div>
        </div>
    );
}
export default BodyPanel;