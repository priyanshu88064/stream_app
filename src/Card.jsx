import { useNavigate } from "react-router-dom";
import {followers, profile2,eye,userplus} from "./ImageHandler";

function Card(){

    const navigate = useNavigate();

    const handleChannel = ()=>{
        navigate("/channel");
    }

    return (
        <div className="card" onClick={handleChannel}>
            <div className="cardimg"><img src={profile2} alt="profile"/></div>
            <div className="cardname">Dynamo Gaming</div>
            <div className="cardmeta"><img src={followers} alt="followers"/>500k <img src={eye} alt="eye"/>2.3M</div>
            <hr/>
            <div className="cardfollow"><img src={userplus} alt="userplus"/>FOLLOW</div>
        </div>
    );
}
export default Card;