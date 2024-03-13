import { useContext } from 'react';
import Hframe from './Hframe';
import { DataContext } from './Body';

function Videos({pad,all}){

    const {videoGallery} = useContext(DataContext);

    return (
        <div className="videos" style={{padding:pad?"0px":""}}>
            <div className="videost">VIDEOS</div>
            <div className="videocontainer">
                {
                    videoGallery && videoGallery.length ? videoGallery.map(row=>(
                        <div key={row[0].id} className='videospanel'>
                            <Hframe thumb={row} all={all}/>
                        </div>
                    ))
                    :
                    [...Array(3)].map((_,index)=>(
                        <div key={index} className='videospanel'>
                            <Hframe/>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}
export default Videos;
