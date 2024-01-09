import Panel from "./Panel";
import Frame from './Frame';

function BodyContent(){
    return (
        <div className="bcontent">
            <div className="framecontainer">
                <div className="frameleft">&#x276E;</div>
                <Frame/>
                <div className="frameright">&#x276F;</div>
            </div>

            <hr/>
        </div>
    );
}
export default BodyContent;