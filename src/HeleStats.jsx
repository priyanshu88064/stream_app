import icon from "./icons/jonathan.jpg"

function HeleStats(){
    return (
        <div className="helestats">
            <div className="heleimg"><img src={icon} alt="icon"/></div>
            <div className="c2">
                <div className="heletitle">🔥Live Grind | Solo Vs Squad Gameplay</div>
                <div className="heleacccount">JONATHAN GAMING</div>
                <div className="helemeta">7 hours ago</div>
            </div>
        </div>
    );
}
export default HeleStats;