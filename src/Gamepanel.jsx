import gameimg from "./icons/thumbnail.jpeg";

function Gamepanel(){
    return (
        <div className="gamepanel">
            <img src={gameimg} alt="Game" style={{width:"160px",height:"160px"}}/>
            <div className="gpname">BGMI</div>
            <div className="gpstat">129.4K 500M</div>
        </div>
    );
}
export default Gamepanel;