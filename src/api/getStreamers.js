import axios from "axios";

export async function getStreamers(){

    try{

        const response = await axios.get(process.env.REACT_APP_SERVER+"/streamer");
        return response.data;

    }catch(error){

        console.log("Error: "+error);
        
    }
}