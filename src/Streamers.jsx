import { useEffect, useState } from "react";
import Card from "./Card";
import { getStreamers } from "./api/getStreamers";

function Streamers({streamers}){
    return (
        <div className="streamers">
            <div className="stitle">TOP STREAMERS</div>
            <div className="scont">
                {
                    streamers.map(streamer=>(
                        <Card key={streamer.id} Name={streamer.name} profileImg={streamer.profileImg}/>
                    ))
                }
            </div>
        </div>
    );
}
export default Streamers;