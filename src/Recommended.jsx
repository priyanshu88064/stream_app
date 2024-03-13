import Hframe from "./Hframe";

function Recommended({title,thumb}){
    return (
        <div className="recommended">
            <hr/>
            <div className="ttle">{title}</div>
            <Hframe thumb={thumb}/>
        </div>
    );
}
export default Recommended;