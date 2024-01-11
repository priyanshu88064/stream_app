import Panel from './Panel';

function Frame({thumbCurrent,animClass}){

    return (
        <div className={`frame ${animClass}`}>
            <div className="bigM">
                <Panel zoom={39} bg={thumbCurrent[0]} isLive={true}/>
            </div>
            <div className="smallM">
                <div><Panel zoom={19} bg={thumbCurrent[1]} isLive={true}/></div>
                <div><Panel zoom={19} bg={thumbCurrent[2]} isLive={true}/></div>
            </div>
            <div className="smallM">
                <div><Panel zoom={19} bg={thumbCurrent[3]} isLive={true}/></div>
                <div><Panel zoom={19} bg={thumbCurrent[4]} isLive={true}/></div>
            </div>
        </div>
    );
}
export default Frame;