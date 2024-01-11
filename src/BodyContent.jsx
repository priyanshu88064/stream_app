import { useEffect, useRef, useState } from 'react';
import Frame from './Frame';
import Recommended from "./Recommended";
import Categories from "./Categories";
import {thumbArray} from "./ImageHandler";

function BodyContent(){

    const [thumbCurrent,setThumbCurrent] = useState([thumbArray[0],thumbArray[1],thumbArray[2],thumbArray[3],thumbArray[4]]);
    const r1 = useRef([thumbArray[2],thumbArray[1],thumbArray[0],thumbArray[10]]);
    const r2 = useRef([thumbArray[0],thumbArray[3],thumbArray[5],thumbArray[7]]);
    const r3 = useRef([thumbArray[11],thumbArray[6],thumbArray[8],thumbArray[4]]);
    const currPos = useRef(1);
    const [isFramAnim,setFrameAnim] = useState('');

    useEffect(()=>{

        const rightAnimInterval = setInterval(()=>{

            setThumbCurrent([thumbArray[(currPos.current)%12],thumbArray[(currPos.current+1)%12],thumbArray[(currPos.current+2)%12],thumbArray[(currPos.current+3)%12],thumbArray[(currPos.current+4)%12]]);
            currPos.current += 1;
            
            setFrameAnim('rightAnim');
            setTimeout(() => {
                setFrameAnim('');
            }, 400);

        },5000);

        return ()=>clearInterval(rightAnimInterval);

    },[currPos]);

    const handleRight = ()=>{
        setThumbCurrent([thumbArray[(currPos.current)%12],thumbArray[(currPos.current+1)%12],thumbArray[(currPos.current+2)%12],thumbArray[(currPos.current+3)%12],thumbArray[(currPos.current+4)%12]]);
        currPos.current+=1;
        
        setFrameAnim('rightAnim');
        setTimeout(() => {
            setFrameAnim('');
        }, 400);
    }
    const handleLeft = ()=>{
        setThumbCurrent([thumbArray[(currPos.current)%12],thumbArray[(currPos.current+1)%12],thumbArray[(currPos.current+2)%12],thumbArray[(currPos.current+3)%12],thumbArray[(currPos.current+4)%12]]);
        currPos.current+=1;

        setFrameAnim('leftAnim');
        setTimeout(() => {
            setFrameAnim('');
        }, 400);
    }

    return (
        <div className="bcontent">
            <div className="framecontainer">
                <div className="frameleft" onClick={handleLeft}>&#x276E;</div>
                <Frame thumbCurrent={thumbCurrent} animClass={isFramAnim}/>
                <div className="frameright" onClick={handleRight}>&#x276F;</div>
            </div>

            <Recommended title={"RECOMMENDED"} thumb={r1}/>
            <Recommended title={"TRENDING"} thumb={r2}/>
            <Recommended title={"MOST WATCHED"} thumb={r3} />
            <Categories/>
        </div>
    );
}
export default BodyContent;