import {profile, tick} from "./ImageHandler";
import Tags from "./Tags";
import Videos from './Videos';

function Channel(){
    return (
        <div className="channel">
            <div className="channelhead">
               <div className="cchead">
                    <div className="cpfpimg"><img src={profile} alt="Profile"/></div>
                    <div className="cinfo">
                        <div className="ctitle"><div>JONATHAN GAMING</div> <img src={tick} alt="tick"/></div>
                        <div className="cmeta"><span>1.8M</span> Followers <span>3</span> Following</div>
                    </div>
               </div>
               <div className="tagscont">
                    <Tags Name={"BGMI"}/>
                    <Tags Name={"Valorant"}/>
                    <Tags Name={"Gaming"}/>
               </div>
            </div>
            <div className="channelfoot">
                <div className="channelnavbar">
                    <div className="cnavitem">Live</div>
                    <div className="cnavitem">Videos</div>
                    <div className="cnavitem">Clips</div>
                </div>
                <hr/>
                <div className="channelbody">
                    <Videos pad={true}/>
                </div>
            </div>
        </div>
    );
}
export default Channel;