import {
  MeetingProvider,
  MeetingConsumer,
  useMeeting,
  useParticipant,
} from "@videosdk.live/react-sdk";
import {authToken} from "./api/API";
import ReactPlayer from "react-player"; 
import { useEffect, useRef, useState,useMemo } from "react";
import {play} from "./ImageHandler";

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
          controls={true}
          muted={false}
          playing={true}
          url={videoStream}
          className='rplayer'
          //
          width='100%'
          height='100%'
          onError={(err) => {
            console.log(err, "participant video error");
          }}
      />
    </div>
  );
}

function SpeakerView({meetingId}) {
    const { participants } = useMeeting();

    
    const speakers = useMemo(() => {
      const speakerParticipants = [...participants.values()].filter(
        (participant) => {
          return participant.displayName === meetingId;
        }
        );
        return speakerParticipants;
      }, [participants,meetingId]);

    return (
      <div className="sview">
        { 
          speakers.length ? speakers.map((participant) => (
            <ParticipantView participantId={participant.id} key={participant.id} />
          )) :
          <div>Stream has stopped. Please refresh the page</div>
        }
      </div>
    );
}

function Container({joined,setJoined,meetingId}) {
  
  const { join } = useMeeting();
  const mMeeting = useMeeting({
    onMeetingJoined: () => {
      setJoined("JOINED");
    },
    onConnetionClose:()=>{
      console.log("closed");
    },
    onError: (error) => {
      console.log(error.message);
    },
  });
  const joinMeeting = () => {
    setJoined("JOINING");
    join();
  };

  return (
    <div className="cview">
      {joined && joined === "JOINED" ? <SpeakerView joined={joined} meetingId={meetingId}/> : joined && joined === "JOINING" ? (
        <p>Loading...</p>
      ) : (
        <div className="playlive" onClick={joinMeeting}><img src={play} alt="" /></div>
      )}  
    </div>
  );
}

function JoinLive({meetingId}){

  const [joined,setJoined] = useState(null);

  return (
      <div className="golive">
          <div className="joinlivebox">
              {
                  authToken && meetingId && meetingId!=="null" ?
                  (
                        <MeetingProvider
                          config={{
                            meetingId,
                            micEnabled: false,
                            webcamEnabled: false,
                            name: "Viewer",
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
                      <>This is a Dummy stream. Open another stream or start your own live stream.</>
                  )
              }
          </div>
          {/* <div className={`goliveenable ${joined==="JOINED"?"golivenablejoined":""}`} onClick={joined==="JOINED"?leaveMeeting:getMeetingAndToken}>{joined!=="JOINED" && <img src={golive}/>}{msg}</div> */}
      </div>
  );

}

export default JoinLive;