import { useEffect, useRef, useState } from 'react';
import Frame from './Frame';
import Recommended from "./Recommended";

function BodyContent({liveMerged,videoGallery}){

    const [thumbCurrent,setThumbCurrent] = useState([
        liveMerged[0],
        liveMerged[1],
        liveMerged[2],
        liveMerged[3],
        liveMerged[4]
    ]);
    const currPos = useRef(1);
    const [isFramAnim,setFrameAnim] = useState('');

    useEffect(()=>{

        const rightAnimInterval = setInterval(()=>{

            setThumbCurrent([
                liveMerged[(currPos.current)%liveMerged.length],
                liveMerged[(currPos.current+1)%liveMerged.length],
                liveMerged[(currPos.current+2)%liveMerged.length],
                liveMerged[(currPos.current+3)%liveMerged.length],
                liveMerged[(currPos.current+4)%liveMerged.length]
            ]);
            currPos.current += 1;
            
            setFrameAnim('rightAnim');
            setTimeout(() => {
                setFrameAnim('');
            }, 400);

        },5000);

        return ()=>clearInterval(rightAnimInterval);

    },[currPos,liveMerged]);

    const handleRight = ()=>{
        setThumbCurrent([
            liveMerged[(currPos.current)%liveMerged.length],
            liveMerged[(currPos.current+1)%liveMerged.length],
            liveMerged[(currPos.current+2)%liveMerged.length],
            liveMerged[(currPos.current+3)%liveMerged.length],
            liveMerged[(currPos.current+4)%liveMerged.length]
        ]);
        currPos.current+=1;
        
        setFrameAnim('rightAnim');
        setTimeout(() => {
            setFrameAnim('');
        }, 400);
    }
    const handleLeft = ()=>{
        setThumbCurrent([
            liveMerged[(currPos.current)%liveMerged.length],
            liveMerged[(currPos.current+1)%liveMerged.length],
            liveMerged[(currPos.current+2)%liveMerged.length],
            liveMerged[(currPos.current+3)%liveMerged.length],
            liveMerged[(currPos.current+4)%liveMerged.length]
        ]);
        currPos.current+=1;

        setFrameAnim('leftAnim');
        setTimeout(() => {
            setFrameAnim('');
        }, 400);
    }

    return (
        <div className="bcontent pbb">
            <div className="framecontainer">
                <div className="frameleft" onClick={handleLeft}>&#x276E;</div>
                <Frame thumbCurrent={thumbCurrent} animClass={isFramAnim}/>
                <div className="frameright" onClick={handleRight}>&#x276F;</div>
            </div>
            {
                [...Array("RECOMMENDED","TRENDING","MOST WATCHED")].map((heading,index)=>(
                    <Recommended key={index} title={heading} thumb={videoGallery[index]}/>
                ))
            }
        </div>
    );
}
export default BodyContent;

// Shuffle Array
// function shuffleArray(array) {
//     for (let i = array.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [array[i], array[j]] = [array[j], array[i]];
//     }
// }