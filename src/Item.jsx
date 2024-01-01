

function Item({Name,watching,font,homeicon}){
    return (
        <div className="item" style={{fontSize:font}}>
            <div className="icon"><img src={homeicon} alt="Home"/></div>
            <div className="itemname" >{Name}</div>
            {watching >= 0 && <div className="itemlive">● {watching}</div>}
        </div>
    );
}
export default Item;