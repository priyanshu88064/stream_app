function Item({Name,watching,font,icon}){
    return (
        <div className="item" style={{fontSize:font}}>
            <div className="icon"><img src={icon} alt="Home"/></div>
            <div className="itemname" >{Name}</div>
            {watching >= 0 && <div className="itemlive">● <span>{watching}</span></div>}
        </div>
    );
}
export default Item;