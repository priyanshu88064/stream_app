import gameimg from "./icons/thumbnail.jpeg";

function Gamepanel({name,gameimg}){
    return (
        <div className="gamepanel">
            {
                name ? 
                <>
                    <img src={gameimg} alt="Game" style={{width:"150px",height:"150px"}}/>
                    <div className="gpname">{name}</div>
                </>
                :
                <>
                    <div className="loadingskeleton" style={{width:"150px",height:"150px"}}></div>
                    <div className="gpname loadingskeleton"></div>
                </>
            }
        </div>
    );
}
export default Gamepanel;