import Panel from './Panel';
import { useEffect, useRef, useState } from 'react';
import {thumbArray} from "./ImageHandler";
import { getLive } from './api/getLive';

function Live({liveStreams}){

    const liveThumb = useRef([thumbArray[0],thumbArray[1],thumbArray[2],thumbArray[3],thumbArray[4],thumbArray[5],thumbArray[6],thumbArray[7],thumbArray[8],thumbArray[9],thumbArray[10],thumbArray[11]]);
    
    return (
        <div className="live">
            <div className="livet">LIVE NOW</div>
            <div className="livecontainer">
                { 
                    liveStreams && liveStreams.length ? 

                        liveStreams.map(live=>(
                            <div key={live.id} className='livepanel'>
                                <Panel
                                    bg={liveThumb.current[9]} 
                                    zoom={19} 
                                    isLive={true}
                                    title={live.title}
                                    publisher={live.publisher}
                                    viewers={live.viewers}
                                    liveId={live.id}
                                />
                            </div>
                        )):

                        [...Array(12)].map((_,index)=>(
                            <div key={index} className='livepanel'><Panel zoom={19} isLive={true}/></div>
                        ))
                }
            </div>
        </div>
    );
}
export default Live;