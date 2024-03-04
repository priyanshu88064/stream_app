import Hframe from './Hframe';

function Videos({pad,all,videoGallery}){
    return (
        <div className="videos" style={{padding:pad?"0px":""}}>
            <div className="videost">VIDEOS</div>
            <div className="videocontainer">
                {
                    videoGallery.map(row=>(
                        <div key={row[0].id} className='videospanel'>
                            <Hframe thumb={row} all={all}/>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}
export default Videos;
