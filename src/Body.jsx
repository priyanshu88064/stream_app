import { BrowserRouter, Route, Routes } from "react-router-dom";
import BodyContent from "./BodyContent";
import BodyPanel from "./BodyPanel";
import Live from './Live';
import Videos from './Videos';
import Games from './Games';
import Channel from "./Channel";
import Viewer from "./Viewer";
import Streamers from "./Streamers";
import { createContext, useEffect, useState } from "react";
import { getStreamers } from "./api/getStreamers";
import { getVideos } from "./api/getVideos";
import { getLive } from "./api/getLive";
import { Merge } from "./service/MergeStreamer";
import Login from "./Login";

export const ColContext = createContext();
export const DataContext = createContext();

function Body(){

    const [isCol,setIsCol] = useState(false);
    const [streamers,setStreamers] = useState([]);
    const [videoGallery,setVideoGallery] = useState([]);
    const [liveMerged,setLiveMerged] = useState([]);

    const fetchData = async () => {
        
        const sData = await getStreamers();
        setStreamers(sData);

        let vData = await getVideos();
        vData = Merge(sData,vData);
        let newVData = [];

        for(let i=0;i<vData.length;i+=4){
            if(i+3<vData.length){
                newVData[i/4] = vData.slice(i,i+4);
            }else{
                break;
            }
        }

        setVideoGallery(newVData);

        const lData = await getLive();
        setLiveMerged(Merge(sData,lData));
    }

    useEffect(()=>{
        fetchData();
    },[]);

    return (
        <BrowserRouter>
            <div className="body">
                <BodyPanel isCol={isCol} setIsCol={setIsCol} liveMerged={liveMerged}/>
                <ColContext.Provider value={isCol}>
                    <DataContext.Provider value={{videoGallery,liveMerged}}>
                        <Routes>
                            <Route path="/" element={<BodyContent liveMerged={liveMerged} videoGallery={videoGallery}/>}/>
                            <Route path="/live" element={<Live liveStreams={liveMerged}/>}/>
                            <Route path="/videos" element={<Videos videoGallery={videoGallery}/>}/>
                            <Route path="/games" element={<Games/>}/>
                            <Route path="/channel" element={<Channel/>}/>
                            <Route path="/vi/:liveId" element={<Viewer/>}/>
                            <Route path="/streamers" element={<Streamers streamers={streamers}/>}/>
                            <Route path="/login" element={<Login/>}/>
                        </Routes>
                    </DataContext.Provider>
                </ColContext.Provider>
            </div>
        </BrowserRouter>
        
    );
}

export default Body;