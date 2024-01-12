import { BrowserRouter, Route, Routes } from "react-router-dom";
import BodyContent from "./BodyContent";
import BodyPanel from "./BodyPanel";
import Live from './Live';
import Videos from './Videos';
import Games from './Games';

function Body(){
    return (
        <BrowserRouter>
            <div className="body">
                <BodyPanel/>
                <Routes>
                    <Route path="/" element={<BodyContent/>}/>
                    <Route path="/live" element={<Live/>}/>
                    <Route path="/videos" element={<Videos/>}/>
                    <Route path="/games" element={<Games/>}/>
                </Routes>
            </div>
        </BrowserRouter>
        
    );
}

export default Body;