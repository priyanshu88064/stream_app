import {
    MeetingProvider,
    MeetingConsumer,
    useMeeting,
    useParticipant,
    Constants,
  } from "@videosdk.live/react-sdk";
import {authToken,createMeeting} from "./api/API";
import ReactPlayer from "react-player"; 
import { useEffect, useRef, useState,useMemo } from "react";
import {golive} from "./ImageHandler";
import { startLive, stopLive } from "./api/streamerAccount";
  
function ParticipantView(props) {
    const micRef = useRef(null);
    const { screenShareStream, micStream,micOn, isLocal } = useParticipant(props.participantId);
  
    const videoStream = useMemo(() => {
      if (screenShareStream) {
        const mediaStream = new MediaStream();
        mediaStream.addTrack(screenShareStream.track);
        return mediaStream;
      }
    }, [screenShareStream]);
  
    useEffect(() => {
      if (micRef.current) {
        if (micOn && micStream) {
          const mediaStream = new MediaStream();
          mediaStream.addTrack(micStream.track);
  
          micRef.current.srcObject = mediaStream;
          micRef.current
            .play()
            .catch((error) =>
              console.error("videoElem.current.play() failed", error)
            );
        } else {
          micRef.current.srcObject = null;
        }
      }
    }, [micStream, micOn]);
  
    return (
      <div className="pview">
        <audio ref={micRef} autoPlay playsInline muted={isLocal} />
        <ReactPlayer
            playsinline // extremely crucial prop
            pip={false}
            light={false}
            controls={false}
            muted={true}
            playing={true}
            //
            url={videoStream}
            //
            width={"448px"}
            height={"252px"}
            onError={(err) => {
              console.log(err, "participant video error");
            }}
        />
      </div>
    );
}
  
function SpeakerView({joined,meetingId}) {
      const { participants,enableScreenShare,disableScreenShare,startHls,leave } = useMeeting();
  
      const speakers = useMemo(() => {
        const speakerParticipants = [...participants.values()].filter(
          (participant) => {
            return participant.mode == Constants.modes.CONFERENCE;
          }
        );
        return speakerParticipants;
      }, [participants]);

      useEffect(()=>{
        enableScreenShare();
      },[]);

      return (
        <div className="sview">
          {/* {speakers.map((participant) => (
            <ParticipantView participantId={participant.id} key={participant.id} />
          ))} */}
          <ParticipantView participantId={speakers[0].id} key={speakers[0].id}/>
        </div>
      );
}
  
function Container({joined,setJoined,meetingId}) {
    
    const { join } = useMeeting();
    const mMeeting = useMeeting({
      onMeetingJoined: () => {
        setJoined("JOINED");
      },
      onError: (error) => {
        alert(error.message);
      },
    });
    const joinMeeting = () => {
      setJoined("JOINING");
      join();
    };
  
    return (
      <div className="cview">
        {joined && joined == "JOINED" ? <SpeakerView joined={joined}/> : joined && joined == "JOINING" ? (
          <p>Joining the meeting...</p>
        ) : (
          <button onClick={joinMeeting}>Click to give Screen Permissions</button>
        )}
      </div>
    );
}
  
function GoLive({msg,setMsg,userObject,title}){
    const [meetingId, setMeetingId] = useState(null);
    const [joined, setJoined] = useState(null);

    const getMeetingAndToken = async () => {
      if(meetingId==null){
        setMeetingId(await createMeeting({ token: authToken }));
      }
    };
    
    const leaveMeeting = ()=>{
        setJoined(null);
        setMeetingId(null);
        handleLive(false);
        window.location.reload();
    }

    const handleLive = async (x)=>{
      if(x){
        const response = await startLive({
          publisher:userObject.id,
          title:title,
          image:userObject.profileImg,
          meetingid:meetingId
        });
        setMsg("STOP STREAMING");
      }else{
        const response = await stopLive(userObject.id);
      }
    }

    useEffect(()=>{
        if(joined === "JOINED"){
          handleLive(true);
        }else if(joined == null){
          setMsg("START STREAMING");
        }
    },[joined]);

    useEffect(()=>{
      if(msg==="WAITING FOR PERMISSION"){
        getMeetingAndToken();
      }else if(msg==="TERMINATING"){
        leaveMeeting();
      }
    },[msg]);


    return (
        <div className="golive">
            <div className={`golivebox ${joined==="JOINED"?"goliveboxanim":""}`}>
                {
                    authToken && meetingId ?
                    (
                          <MeetingProvider
                            config={{
                              meetingId,
                              micEnabled: false,
                              webcamEnabled: false,
                              name: meetingId,
                              mode: "CONFERENCE",
                            }}
                            token={authToken}
                          >
                            <MeetingConsumer>
                              {() => (
                                <Container joined={joined} setJoined={setJoined} meetingId={meetingId}/>
                              )}
                            </MeetingConsumer>
                          </MeetingProvider>
                        ) : (
                        <></>
                    )
                }
            </div>
            {/* <div className={`goliveenable ${joined==="JOINED"?"golivenablejoined":""}`} onClick={joined==="JOINED"?leaveMeeting:getMeetingAndToken}>{joined!=="JOINED" && <img src={golive}/>}{msg}</div> */}
        </div>
    );
  
}
  
export default GoLive;