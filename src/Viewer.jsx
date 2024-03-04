import Channel from './Channel';
import { send } from './ImageHandler';
import Chats from './Chats';

function Viewer(){
    return (
        <div className="vi">
            <div className='vileft'>
                <div className='videoholder'>video</div>
                <div className='videotitle'>I AM BACK WITH LIVE SINGING & GIVEAWAYS || JOIN & GET A CHANCE TO WIN PRIZES || LIVE SINGING & PLAYING SONGS ON REQUESTS</div>
                <div className="videometa">an hour ago&nbsp;&nbsp; ●&nbsp;&nbsp; 1.4K Likes&nbsp;&nbsp; ●&nbsp;&nbsp; 671 Comments</div>
                <hr/>
                <div className='metaholder'>
                    <Channel all={true}/>
                </div>
            </div>
            <div className="viright">
                <div className="chathead">LIVE CHAT</div>
                <div className="chatbody">
                    <Chats/>
                    <Chats/>
                    <Chats/>
                    <Chats/>
                    <Chats/>
                    <Chats/>
                    <Chats/>
                    <Chats/>
                    <Chats/>
                    <Chats/>
                    <Chats/>
                    <Chats/>
                    <Chats/>
                    <Chats/>
                    <Chats/>
                    <Chats/>
                    <Chats/>
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