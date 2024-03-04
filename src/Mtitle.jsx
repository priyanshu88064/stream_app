import icon from "./icons/jonathan.jpg"

function Mtitle({zoom,titlex,publisher}){

    const fontS = zoom < 20 ? "12px":"14px";
    const fontMeta = zoom < 20 ? "9px":"11px";
    let title = titlex;

    if(title)
    title = zoom>20&&title.length>60?title.slice(0,60)+"...":zoom<20&&title.length>30?title.slice(0,30)+"...":title;

    return (
        <div className="mtitle" >
            <div className="micon">
                {publisher ? <img src={icon} alt="Icon"/> : <div className="miconskeleton"></div>}
            </div>
            <div className="mpart">
                <div className="mvideotitle" style={{fontSize:fontS}}>
                    {title ? title : <div className="mvideotitleskeleton"></div>}
                </div>
                <div className="mmeta" style={{fontSize:fontMeta}}>
                    {publisher ? publisher.name : <div className="mvideotitleskeleton"></div>}
                </div>
            </div>
        </div>
    );
}
export default Mtitle;