import Hframe from "./Hframe";

function Recommended({title,thumb}){
    return (
        <div className="recommended">
            <hr/>
            <div>{title}</div>
            <Hframe thumb={thumb}/>
        </div>
    );
}
export default Recommended;