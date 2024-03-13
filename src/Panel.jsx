import { useNavigate } from "react-router-dom";
import Mtitle from "./Mtitle";

function Panel({isFrame,zoom,bg,isLive,title,viewers,publisher,liveId,duration}){

    const navigate = useNavigate();

    const handlePanel = ()=>{
        if(isLive && liveId) navigate("/vi/"+liveId);
    }

    return (
        <div className="panel" style={{backgroundImage:`url(${bg})`}} onClick={handlePanel}>
            <div className={`${isLive || !duration?"opacity":""} ${isLive || duration ?"":"loadingskeleton psk"}`}></div>
            {isLive && viewers!==undefined && <div className="as plive">● {viewers}</div>}
            {isLive && <Mtitle zoom={zoom} titlex={title} publisher={publisher} />}
            {!isLive && duration && <div className="duration">{duration}</div>}
        </div>
    );
}
export default Panel;
//width:width,height:height