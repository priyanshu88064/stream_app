import { useNavigate } from "react-router-dom";

function Item({Name,watching,font,icon,activeItem,setActiveItem}){

    const navigate = useNavigate();

    const handleClick = ()=>{
        if(Name === "HOME") {
            setActiveItem("HOME");
            navigate("/");
        }
        else if(Name === "LIVE NOW"){
            setActiveItem("LIVE NOW");
            navigate("/live");
        }
        else if(Name === "VIDEOS") {
            setActiveItem("VIDEOS");
            navigate("/videos");
        }
        else if(Name === "GAMES") {
            setActiveItem("GAMES");
            navigate("/games");
        }
        else if(Name === "STREAMERS"){
            setActiveItem("STREAMERS");
            navigate("/streamers");
        }
        else{
            navigate("/vi");
        }
    }

    return (
        <div className={`item ${Name===activeItem?"activeitem":""}`} style={{fontSize:font}} onClick={handleClick}>
            <div className="icon"><img src={icon} alt="Home"/></div>
            <div className="itemname" style={{fontSize:font}} >{Name}</div>
            {watching >= 0 && <div className="itemlive">● <span>{watching}</span></div>}
        </div>
    );
}
export default Item;