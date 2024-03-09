import { useNavigate } from "react-router-dom";
import Mtitle from "./Mtitle";
import { useContext } from "react";
import { ColContext } from "./Body";

function Panel({isFrame,zoom,bg,isLive,title,viewers,publisher,liveId,duration}){

    const isCol = useContext(ColContext);
    const add = isCol?3:0;

    let width = (zoom+add) * 16;
    let height = (zoom+add) * 9;

    const navigate = useNavigate();

    const handlePanel = ()=>{
        if(isLive && liveId) navigate("/vi/"+liveId);
    }

    return (
        <div className="panel" style={{width:width,height:height,backgroundImage:`url(${bg})`}} onClick={handlePanel}>
            <div className={`opacity ${isLive || duration ?"":"loadingskeleton psk"}`}></div>
            {isLive && viewers!==undefined && <div className="as plive">● {viewers}</div>}
            {isLive && <Mtitle zoom={zoom} titlex={title} publisher={publisher} />}
            {!isLive && duration && <div className="duration">{duration}</div>}
        </div>
    );
}
export default Panel;