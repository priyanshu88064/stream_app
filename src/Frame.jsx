import Panel from './Panel';

function Frame({thumbCurrent,animClass}){

    return (
        <div className={`frame ${animClass}`}>
            <div className="bigM">
                <Panel bg={thumbCurrent[0]?.image} liveId={thumbCurrent[0]?.id} isFrame={true} zoom={39} publisher={thumbCurrent[0]?.publisher} title={thumbCurrent[0]?.title} viewers={thumbCurrent[0]?.viewers} isLive={true}/>
            </div>
            <div className="smallM">
                <div><Panel bg={thumbCurrent[1]?.image} liveId={thumbCurrent[1]?.id} isFrame={true} zoom={19} publisher={thumbCurrent[1]?.publisher} title={thumbCurrent[1]?.title} viewers={thumbCurrent[1]?.viewers} isLive={true}/></div>
                <div><Panel bg={thumbCurrent[2]?.image} liveId={thumbCurrent[2]?.id} isFrame={true} zoom={19} publisher={thumbCurrent[2]?.publisher} title={thumbCurrent[2]?.title} viewers={thumbCurrent[2]?.viewers} isLive={true}/></div>
            </div>
            <div className="smallM">
                <div><Panel bg={thumbCurrent[3]?.image} liveId={thumbCurrent[3]?.id} isFrame={true} zoom={19} publisher={thumbCurrent[3]?.publisher} title={thumbCurrent[3]?.title} viewers={thumbCurrent[3]?.viewers} isLive={true}/></div>
                <div><Panel bg={thumbCurrent[4]?.image} liveId={thumbCurrent[4]?.id} isFrame={true} zoom={19} publisher={thumbCurrent[4]?.publisher} title={thumbCurrent[4]?.title} viewers={thumbCurrent[4]?.viewers} isLive={true}/></div>
            </div>
        </div>
    );
}
export default Frame;