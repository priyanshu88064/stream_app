import { useRef } from 'react';
import Hframe from './Hframe';
import {thumbArray} from "./ImageHandler";

function Videos({pad,all}){

    const r1 = useRef([thumbArray[0],thumbArray[1],thumbArray[2],thumbArray[3]]);
    const r2 = useRef([thumbArray[4],thumbArray[7],thumbArray[10],thumbArray[1]]);
    const r3 = useRef([thumbArray[5],thumbArray[8],thumbArray[11],thumbArray[2]]);
    const r4 = useRef([thumbArray[6],thumbArray[9],thumbArray[0],thumbArray[3]]);

    return (
        <div className="videos" style={{padding:pad?"0px":""}}>
            <div className="videost">VIDEOS</div>
            <div className="videocontainer">
                <div className="videospanel"><Hframe thumb={r3} all={all}/></div><hr/>
                <div className="videospanel"><Hframe thumb={r2} all={all}/></div><hr/>
                <div className="videospanel"><Hframe thumb={r1} all={all}/></div><hr/>
                <div className="videospanel"><Hframe thumb={r4} all={all}/></div>
            </div>
        </div>
    );
}
export default Videos;