import Panel from "./Panel";
import Frame from './Frame';
import Recommended from "./Recommended";
import Categories from "./Categories";

function BodyContent(){
    return (
        <div className="bcontent">
            <div className="framecontainer">
                <div className="frameleft">&#x276E;</div>
                <Frame/>
                <div className="frameright">&#x276F;</div>
            </div>

            <Recommended/>
            <Recommended/>
            <Recommended/>
            <Categories/>
        </div>
    );
}
export default BodyContent;