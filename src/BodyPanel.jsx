import Item from "./Item";
import homeicon from "./icons/home.svg"

function BodyPanel(){
    return (
        <div className="bpanel">
            <div className="bpanelup">
                <Item Name={"HOME"} watching={-1} font={"15px"} homeicon={homeicon}/>
                <Item Name={"LIVE NOW"} watching={-1} font={"15px"}/>
                <Item Name={"VIDEOS"} watching={-1} font={"15px"}/>
                <Item Name={"GAMES"} watching={-1} font={"15px"}/>
            </div>
            <div className="bpaneldown">
                <Item Name={"Jonathan Gaming"} watching={123}  font={"13px"}/>
                <Item Name={"DynamoIsLive"} watching={123} font={"13px"}/>
                <Item Name={"Mortal"} watching={123} font={"13px"}/>
                <Item Name={"BlindxSpower"} watching={123} font={"13px"}/>
                <Item Name={"CarryIsLive"} watching={123} font={"13px"}/>
                <Item Name={"PewDiePie"} watching={123} font={"13px"}/>
                <Item Name={"Levinho"} watching={123} font={"13px"}/>
                <Item Name={"Scout"} watching={123} font={"13px"}/>
            </div>
        </div>
    );
}
export default BodyPanel;