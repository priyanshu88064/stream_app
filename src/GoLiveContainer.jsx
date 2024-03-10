import { useState } from 'react';
import GoLive from './GoLive';
import { bubble, golive } from './ImageHandler';

function GoLiveContainer({userObject}){

    const [msg,setMsg] = useState("START STREAMING");
    const [title,setTitle] = useState(null);

    const handleMsg = ()=>{
        if(msg==="START STREAMING" && title!=null){
            setMsg("WAITING FOR PERMISSION");
        }else if(msg==="STOP STREAMING"){
            setMsg("TERMINATING");
        }
    }

    return (
        <div className="golivecontainer" onSubmit={e=>e.preventDefault()}>
            <div className="glleft">
                <div className="gllup">
                    <div className="txx"><GoLive msg={msg} setMsg={setMsg} userObject={userObject} title={title}/></div>
                    <div className="tx">
                        <div>
                            <div>Username</div>
                            <div>Followers</div>
                            <div>Following</div>
                            <div>Stream Id</div>
                            <div>Watching</div>
                            <div>Title</div>
                            <div>Description</div>
                            <div>Incoming Packets</div>
                            <div>Outgoing Packets</div>
                            <div>Streaming Id</div>
                        </div>
                        <div>
                            <div>:</div>
                            <div>:</div>
                            <div>:</div>
                            <div>:</div>
                            <div>:</div>
                            <div>:</div>
                            <div>:</div>
                            <div>:</div>
                            <div>:</div>
                            <div>:</div>
                        </div>
                    </div>
                </div>
                <form className="glldown" >
                   <input type='text' placeholder='Enter Title*' onChange={e=>setTitle(e.target.value)} required/>
                   <input type='text' placeholder='Enter Description (optional)'/>
                   <button className={`goliveenable ${msg==="STOP STREAMING"?"golivenablejoined":""}`} onClick={handleMsg}><img src={golive}/>{msg}</button>
                </form>
            </div>
            <div className='glright'>
                <div className='glrhead'>LIVE CHATS</div>
                <div className="glrbubble"><img src={bubble}/>your chats will appear here</div>
            </div>
        </div>
    );
}

export default GoLiveContainer;