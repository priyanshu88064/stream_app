import Mtitle from "./Mtitle";

function Panel({zoom,bg,isLive}){

    let width = zoom * 16;
    let height = zoom * 9;

    return (
        <div className="panel" style={{width:width,height:height,backgroundImage:`url(${bg})`}}>
            <div className="opacity"></div>
            {isLive && <div className="as plive">● {Math.floor(Math.random()*10000)}</div>}
            {isLive && <Mtitle zoom={zoom} />}
            {!isLive && <div className="duration">12:50</div>}
            {!isLive && <div className="gametag">BGMI</div>}
        </div>
    );
}
export default Panel;