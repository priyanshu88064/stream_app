import { useEffect, useRef, useState } from 'react';
import Hframe from './Hframe';
import {thumbArray} from "./ImageHandler";
import { getVideos } from './api/getVideos';

function Videos({pad,all}){

    const r1 = useRef([thumbArray[0],thumbArray[1],thumbArray[2],thumbArray[3]]);
    const r2 = useRef([thumbArray[4],thumbArray[7],thumbArray[10],thumbArray[1]]);
    const r3 = useRef([thumbArray[5],thumbArray[8],thumbArray[11],thumbArray[2]]);
    const r4 = useRef([thumbArray[6],thumbArray[9],thumbArray[0],thumbArray[3]]);

    const [videoGallery,setVideoGallery] = useState([]);

    const handleGallery = async ()=>{
        const data = await getVideos();
        let newdata = [];

        for(let i=0;i<data.length;i+=4){
            if(i+3<data.length){
                newdata[i/4] = data.slice(i,i+4);
            }else{
                break;
            }
        }

        setVideoGallery(newdata);
    }

    useEffect(()=>{
        handleGallery();
    },[]);

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

// Shuffle Array
// function shuffleArray(array) {
//     for (let i = array.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [array[i], array[j]] = [array[j], array[i]];
//     }
// }
