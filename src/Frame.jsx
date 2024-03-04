import Panel from './Panel';

function Frame({thumbCurrent,animClass}){

    // console.log(thumbCurrent);

    return (
        <div className={`frame ${animClass}`}>
            <div className="bigM">
                <Panel zoom={39} publisher={thumbCurrent[0]?.publisher} title={thumbCurrent[0]?.title} viewers={thumbCurrent[0]?.viewers} isLive={true}/>
            </div>
            <div className="smallM">
                <div><Panel zoom={19} publisher={thumbCurrent[1]?.publisher} title={thumbCurrent[1]?.title} viewers={thumbCurrent[1]?.viewers} isLive={true}/></div>
                <div><Panel zoom={19} publisher={thumbCurrent[2]?.publisher} title={thumbCurrent[2]?.title} viewers={thumbCurrent[2]?.viewers} isLive={true}/></div>
            </div>
            <div className="smallM">
                <div><Panel zoom={19} publisher={thumbCurrent[3]?.publisher} title={thumbCurrent[3]?.title} viewers={thumbCurrent[3]?.viewers} isLive={true}/></div>
                <div><Panel zoom={19} publisher={thumbCurrent[4]?.publisher} title={thumbCurrent[4]?.title} viewers={thumbCurrent[4]?.viewers} isLive={true}/></div>
            </div>
        </div>
    );
}
export default Frame;