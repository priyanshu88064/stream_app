import Card from "./Card";

function Streamers({streamers}){
    return (
        <div className="streamers">
            <div className="stitle">TOP STREAMERS</div>
            <div className="scont">
                {
                    streamers && streamers.length ? 
                    streamers.map(streamer=>(
                        <Card key={streamer.id} Name={streamer.name} profileImg={streamer.profileImg}/>
                    )):
                    [...Array(12)].map((_,index)=>(
                        <Card key={index}/>
                    ))
                }
            </div>
        </div>
    );
}
export default Streamers;