import { useNavigate } from "react-router-dom";
import {followers, profile2,eye,userplus} from "./ImageHandler";

function Card({Name,profileImg}){

    const navigate = useNavigate();

    const handleChannel = ()=>{
        navigate("/channel");
    }

    return (
        <div className="card" onClick={handleChannel}>
            {
                Name && profileImg ?
                <>
                    <div className="cardimg"><img src={profileImg}/></div>
                    <div className="cardname">{Name}</div>
                    <div className="cardmeta"><img src={followers} alt="followers"/>500k <img src={eye} alt="eye"/>2.3M</div>
                    <hr/>
                    <div className="cardfollow"><img src={userplus} alt="userplus"/>FOLLOW</div>
                </>
                :
                <>
                    <div className="loadingskeleton cardimg"></div>
                    <div className="cardname loadingskeleton"></div>
                    <div className="cardmeta loadingskeleton"></div>
                </>
            }
        </div>
    );
}
export default Card;