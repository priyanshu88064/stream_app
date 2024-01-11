import Gamepanel from "./Gamepanel";
import cicon from "./icons/categories.png";

function Categories(){
    return (
        <div className="categories">
            <div className="chead">
                <img src={cicon} alt="Icon"/>
                <div className="cheadtitle">POPULAR CATEGORIES</div>
            </div>
            <div className="cpanel">
                <Gamepanel/>
                <Gamepanel/>
                <Gamepanel/>
                <Gamepanel/>
                <Gamepanel/>
                <Gamepanel/>
                <Gamepanel/>
            </div>
        </div>
    );
}
export default Categories;