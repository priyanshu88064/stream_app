import { useNavigate } from "react-router-dom";
import icon from "./icons/jonathan.jpg"

function HeleStats({thumb}){

    const navigate = useNavigate();

    const handleChannel = ()=>{
        navigate("/channel");
    }

    return (
        <div className="helestats">
            <div className="heleimg">
                {
                    thumb?.thumbnail ? <img src={icon} alt="icon" onClick={handleChannel}/> : <div className="hiconskeleton"></div>
                }
            </div>
            <div className="c2">
                <div className="heletitle">
                    {
                        thumb?.title ? thumb?.title : <div className="loadingskeleton"></div>
                    }
                </div>
                <div className="heleacccount" onClick={handleChannel}>
                    {
                        thumb?.publisher?.name ? thumb?.publisher?.name : <div className="loadingskeleton"></div>
                    }
                </div>
                <div className="helemeta">{thumb?.title && "7 hours ago"}</div>
            </div>
        </div>
    );
}
export default HeleStats;