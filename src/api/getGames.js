import axios from "axios";

export async function getGames(){

    try{

        const response = await axios.get(process.env.REACT_APP_SERVER+"/games");
        return response.data;

    }catch(error){

        console.log("Error: "+error);
        
    }
}