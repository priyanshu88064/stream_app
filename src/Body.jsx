import { BrowserRouter, Route, Routes } from "react-router-dom";
import BodyContent from "./BodyContent";
import BodyPanel from "./BodyPanel";
import Live from './Live';
import Videos from './Videos';
import Games from './Games';
import Channel from "./Channel";
import Viewer from "./Viewer";
import Streamers from "./Streamers";

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
                    <Route path="/channel" element={<Channel/>}/>
                    <Route path="/vi" element={<Viewer/>}/>
                    <Route path="/streamers" element={<Streamers/>}/>
                </Routes>
            </div>
        </BrowserRouter>
        
    );
}

export default Body;