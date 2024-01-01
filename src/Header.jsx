function Header(){
    return (
        <div className="header">
            <div className="streamnet">Stream4U</div>
            <div className="searchbar">
                <input type="text" id="search" placeholder="Search for Games,Streamers,Videos" autoComplete="off"/>
            </div>
            <div className="hlast">
                <div className="slogin">STREAMER LOGIN</div>
                <div className="login">LOGIN</div>
            </div>
        </div>
    );
}

export default Header;
