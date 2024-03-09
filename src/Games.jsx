import { useEffect, useState } from "react";
import Gamepanel from "./Gamepanel";
import { getGames } from "./api/getGames";

function Games(){

    const [games,setGames] = useState([]);

    const handleGames = async ()=>{
        const data = await getGames();
        setGames(data);
    }

    useEffect(()=>{
        handleGames();
    },[]);

    return (
        <div className="games">
            <div className="gamest">GAMES</div>
            <div className="gamescontainer">
                {
                    games.length ?
                    games.map(game=>(
                        <div key={game.id} className="gamespanel">
                            <Gamepanel name={game.name}/>
                        </div>
                    )) :
                    [...Array(14)].map((_,index)=>(
                        <div key={index} className="gamespanel">
                            <Gamepanel/>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}
export default Games;