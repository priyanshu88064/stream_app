import Mtitle from "./Mtitle";

function Panel({zoom}){

    let width = zoom * 16;
    let height = zoom * 9;

    return (
        <div className="panel" style={{width:width,height:height}}>
            <div className="opacity"></div>
            <div className="as plive">● 2400</div>
            <Mtitle zoom={zoom} />
        </div>
    );
}
export default Panel;