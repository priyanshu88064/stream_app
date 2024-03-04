import { useNavigate } from "react-router-dom";
import Mtitle from "./Mtitle";
import { useContext } from "react";
import { ColContext } from "./Body";

function Panel({zoom,bg,isLive,title,viewers,publisher,duration}){

    const isCol = useContext(ColContext);
    const add = isCol?3:0;

    let width = (zoom+add) * 16;
    let height = (zoom+add) * 9;

    const navigate = useNavigate();

    const handlePanel = ()=>{
        navigate("/vi");
    }

    return (
        <div className="panel" style={{width:width,height:height,backgroundImage:`url(${bg})`}} onClick={handlePanel}>
            <div className="opacity"></div>
            {isLive && viewers!==undefined && <div className="as plive">● {viewers}</div>}
            {isLive && <Mtitle zoom={zoom} titlex={title} publisher={publisher} />}
            {!isLive && duration && <div className="duration">{duration}</div>}
            {!isLive && duration && <div className="gametag">BGMI</div>}
        </div>
    );
}
export default Panel;