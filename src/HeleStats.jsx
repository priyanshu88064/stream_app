import { useNavigate } from "react-router-dom";
import icon from "./icons/jonathan.jpg"

function HeleStats(){

    const navigate = useNavigate();

    const handleChannel = ()=>{
        navigate("/channel");
    }

    return (
        <div className="helestats">
            <div className="heleimg"><img src={icon} alt="icon" onClick={handleChannel}/></div>
            <div className="c2">
                <div className="heletitle">🔥Live Grind | Solo Vs Squad Gameplay</div>
                <div className="heleacccount" onClick={handleChannel}>JONATHAN GAMING</div>
                <div className="helemeta">7 hours ago</div>
            </div>
        </div>
    );
}
export default HeleStats;