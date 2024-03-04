import gameimg from "./icons/thumbnail.jpeg";

function Gamepanel({isStat,name}){
    return (
        <div className="gamepanel">
            <img src={gameimg} alt="Game" style={{width:"150px",height:"150px"}}/>
            <div className="gpname">{name}</div>
            {isStat && <div className="gpstat">129.4K 500M</div>}
        </div>
    );
}
export default Gamepanel;