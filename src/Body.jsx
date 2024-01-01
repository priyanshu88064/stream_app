import BodyContent from "./BodyContent";
import BodyPanel from "./BodyPanel";

function Body(){
    return (
        <div className="body">
            <BodyPanel/>
            <BodyContent/>
        </div>
    );
}

export default Body;