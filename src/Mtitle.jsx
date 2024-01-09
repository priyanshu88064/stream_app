import icon from "./icons/jonathan.jpg"

function Mtitle({zoom}){

    const fontS = zoom < 20 ? "12px":"14px";
    const fontMeta = zoom < 20 ? "9px":"11px";
    let title = "6V6 CUSTOM ROOM WITH JONATHAN || BGMI ONLY JOIN NOW hello man How are YOU";
    title = zoom>20&&title.length>60?title.slice(0,60)+"...":zoom<20&&title.length>30?title.slice(0,30)+"...":title;

    return (
        <div className="mtitle" >
            <div className="micon"><img src={icon} alt="Icon"/></div>
            <div className="mpart">
                <div className="mvideotitle" style={{fontSize:fontS}}>{title}</div>
                <div className="mmeta" style={{fontSize:fontMeta}}>JONATHAN GAMING ● an hour ago</div>
            </div>
        </div>
    );
}
export default Mtitle;