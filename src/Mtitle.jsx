function Mtitle({zoom,titlex,publisher}){

    const fontS = zoom < 20 ? "12px":"14px";
    const fontMeta = zoom < 20 ? "9px":"11px";
    let title = titlex;

    if(title)
    title = zoom>20&&title.length>60?title.slice(0,60)+"...":zoom<20&&title.length>30?title.slice(0,30)+"...":title;

    return (
        <div className="mtitle" >
            <div className="micon">
                {publisher ? <img src={publisher?.profileImg} alt=""/> : <div className="miconskeleton"></div>}
            </div>
            <div className="mpart">
                <div className="mvideotitle" style={{fontSize:fontS}}>
                    {title ? <span className="cs">{title}</span> : <div className="loadingskeleton"></div>}
                </div>
                <div className="mmeta" style={{fontSize:fontMeta}}>
                    {publisher ? <span className="css">{publisher.name}</span> : <div className="loadingskeleton"></div>}
                </div>
            </div>
        </div>
    );
}
export default Mtitle;