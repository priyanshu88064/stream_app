import { useNavigate } from "react-router-dom";

function Item({Name,watching,font,icon}){

    const navigate = useNavigate();

    const handleClick = ()=>{
        if(Name === "HOME") navigate("/");
        else if(Name === "LIVE NOW") navigate("/live");
        else if(Name === "VIDEOS") navigate("/videos");
        else if(Name === "GAMES") navigate("/games");
    }

    return (
        <div className="item" style={{fontSize:font}} onClick={handleClick}>
            <div className="icon"><img src={icon} alt="Home"/></div>
            <div className="itemname" style={{fontSize:font}} >{Name}</div>
            {watching >= 0 && <div className="itemlive">● <span>{watching}</span></div>}
        </div>
    );
}
export default Item;