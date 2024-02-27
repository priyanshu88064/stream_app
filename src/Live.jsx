import Panel from './Panel';
import { useEffect, useRef, useState } from 'react';
import {thumbArray} from "./ImageHandler";
import { getLive } from './api/getLive';

function Live(){

    const liveThumb = useRef([thumbArray[0],thumbArray[1],thumbArray[2],thumbArray[3],thumbArray[4],thumbArray[5],thumbArray[6],thumbArray[7],thumbArray[8],thumbArray[9],thumbArray[10],thumbArray[11]]);
    const [liveGallery,setLiveGallery] = useState([]);

    const handleGallery = async ()=>{
        const data = await getLive();
        setLiveGallery(data);
        console.log(data);
    }

    useEffect(()=>{
        handleGallery();
    },[]);

    return (
        <div className="live">
            <div className="livet">LIVE NOW</div>
            <div className="livecontainer">
                {liveGallery.map(live=>(
                    <div key={live.id} className='livepanel'>
                        <Panel 
                            bg={liveThumb.current[9]} 
                            zoom={19} 
                            isLive={true}
                            title={live.title}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Live;