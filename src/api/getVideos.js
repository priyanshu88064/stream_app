import axios from "axios";

export async function getVideos(){

    try{

        const response = await axios.get(process.env.REACT_APP_SERVER+"/video");
        return response.data;

    }catch(error){

        console.log("Error: "+error);

    }
}