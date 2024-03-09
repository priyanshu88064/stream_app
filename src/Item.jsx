import { useNavigate } from "react-router-dom";

function Item({liveId,Name,watching,font,icon,activeItem,setActiveItem,isCol}){

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
        else if(liveId){
            navigate("/vi/"+liveId);
        }
    }

    return (
        <div className={`item ${Name===activeItem?"activeitem":""} ${isCol?"itemt":"itemf"}`} style={{fontSize:font}} onClick={handleClick}>
            {
                icon ?
                <div className={`icon ${isCol?"icont":"iconf"}`}><img className={`${isCol?"iconimgt":"iconimgf"}`} src={icon}/></div> :
                <div className={`icon ${isCol?"icont":"iconf"}`}><div className="tmm"></div></div>
            }
            {
                !isCol && Name ?
                <div className="itemname" style={{fontSize:font}} >{Name}</div> :
                !isCol ?
                <div className="itemname loadingskeleton" style={{fontSize:font}} ></div> : <></>
            }
            {!isCol && watching >= 0 && <div className="itemlive">● <span>{watching}</span></div>}
        </div>
    );
}
export default Item;