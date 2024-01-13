import gameimg from "./icons/thumbnail.jpeg";

function Gamepanel({isStat}){
    return (
        <div className="gamepanel">
            <img src={gameimg} alt="Game" style={{width:"150px",height:"150px"}}/>
            <div className="gpname">BGMI</div>
            {isStat && <div className="gpstat">129.4K 500M</div>}
        </div>
    );
}
export default Gamepanel;