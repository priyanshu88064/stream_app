function Gamepanel({name,gameimg}){
    return (
        <div className="gamepanel">
            {
                name ? 
                <>
                    <img className="gst" src={gameimg} alt="Game"/>
                    <div className="gpname">{name}</div>
                </>
                :
                <>
                    <div className="loadingskeleton gst"></div>
                    <div className="gpname loadingskeleton"></div>
                </>
            }
        </div>
    );
}
export default Gamepanel;