import Panel from './Panel';
import { useRef } from 'react';
import {thumbArray} from "./ImageHandler";

function Live(){

    const liveThumb = useRef([thumbArray[0],thumbArray[1],thumbArray[2],thumbArray[3],thumbArray[4],thumbArray[5],thumbArray[6],thumbArray[7],thumbArray[8],thumbArray[9],thumbArray[10],thumbArray[11]]);

    return (
        <div className="live">
            <div className="livet">LIVE NOW</div>
            <div className="livecontainer">
                <div className='livepanel'><Panel bg={liveThumb.current[0]} zoom={19} isLive={true}/></div>
                <div className='livepanel'><Panel bg={liveThumb.current[1]} zoom={19} isLive={true}/></div>
                <div className='livepanel'><Panel bg={liveThumb.current[2]} zoom={19} isLive={true}/></div>
                <div className='livepanel'><Panel bg={liveThumb.current[3]} zoom={19} isLive={true}/></div>
                <hr/>
                <div className='livepanel'><Panel bg={liveThumb.current[4]} zoom={19} isLive={true}/></div>
                <div className='livepanel'><Panel bg={liveThumb.current[5]} zoom={19} isLive={true}/></div>
                <div className='livepanel'><Panel bg={liveThumb.current[6]} zoom={19} isLive={true}/></div>
                <div className='livepanel'><Panel bg={liveThumb.current[7]} zoom={19} isLive={true}/></div>
                <hr/>
                <div className='livepanel'><Panel bg={liveThumb.current[8]} zoom={19} isLive={true}/></div>
                <div className='livepanel'><Panel bg={liveThumb.current[9]} zoom={19} isLive={true}/></div>
                <div className='livepanel'><Panel bg={liveThumb.current[10]} zoom={19} isLive={true}/></div>
                <div className='livepanel'><Panel bg={liveThumb.current[11]} zoom={19} isLive={true}/></div>
                <hr/>
                <div className='livepanel'><Panel bg={liveThumb.current[0]} zoom={19} isLive={true}/></div>
                <div className='livepanel'><Panel bg={liveThumb.current[2]} zoom={19} isLive={true}/></div>
                <div className='livepanel'><Panel bg={liveThumb.current[3]} zoom={19} isLive={true}/></div>
                <div className='livepanel'><Panel bg={liveThumb.current[4]} zoom={19} isLive={true}/></div>
            </div>
        </div>
    );
}
export default Live;