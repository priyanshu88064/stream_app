import Channel from './Channel';
import { bubble, send } from './ImageHandler';
import { useContext, useEffect, useRef, useState } from 'react';
import { DataContext } from './Body';
import { useNavigate, useParams } from 'react-router-dom';
import GoLive from './GoLive';
import JoinLive from './JoinLive';

function Viewer(){

    const {liveId} = useParams();
    const {liveMerged} = useContext(DataContext);

    const [currLive,setCurrLive] = useState(liveMerged.find(item=>item.id===liveId));

    const navigate = useNavigate();

    useEffect(()=>{
        if(currLive==undefined){
            navigate("/");
        }
    },[]);

    return (
        <div className="vi">
            <div className='vileft'>
                <div className='videoholder'>{<JoinLive meetingId={currLive?.meetingid}/>}</div>
                <div className='videotitle'>{currLive?.title}</div>
                <div className="videometa">an hour ago&nbsp;&nbsp; ●&nbsp;&nbsp; 1.4K Likes&nbsp;&nbsp; ●&nbsp;&nbsp; 671 Comments</div>
                <hr/>
                <div className='metaholder'>
                    <Channel all={true} currLive={currLive}/>
                </div>
            </div>
            <div className="viright">
                <div className="chathead">LIVE CHAT</div>
                <div className="chatbody">
                    <img src={bubble} alt='feeling empty'/>
                </div>
                <div className="chatinput">
                    <input type='text' placeholder='send a message'/>
                    <div className="cisend"><img src={send} alt='send'/></div>
                </div>
            </div>
        </div>
    );
}
export default Viewer;