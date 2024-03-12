import axios from "axios";

export async function getLive(){

    try{

        const response = await axios.get(process.env.REACT_APP_SERVER+"/live");
        return response.data;

    }catch(error){

        console.log("Error: "+error);
        
    }
}