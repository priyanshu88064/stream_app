import { profile } from "./ImageHandler";

function Chats(){
    return (
        <div className="chats">
            <div className="chaticon"><img src={profile} alt="profile"/></div>
            <div className="chatusername">Priyanshu:</div>
            <div className="chatmessage">Awesome bro clutch bro 😅😅😅</div>
        </div>
    );
}
export default Chats;