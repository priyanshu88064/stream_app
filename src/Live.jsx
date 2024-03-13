import Panel from './Panel';

function Live({liveStreams}){

    return (
        <div className="live">
            <div className="livet">LIVE NOW</div>
            <div className="livecontainer">
                { 
                    liveStreams && liveStreams.length ? 

                        liveStreams.map(live=>(
                            <div key={live.id} className='livepanel'>
                                <Panel
                                    bg={live.image} 
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