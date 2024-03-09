import axios from "axios";

export async function createStreamer(body){

    try{

        const response = await axios.post(process.env.REACT_APP_SERVER+"/streamer",body);
        return response.data;

    }catch(error){

        console.log("Error: "+error);
        return "error";

    }
}

export async function startLive(body){

    try{

        const response = await axios.post(process.env.REACT_APP_SERVER+"/live",body);
        return response.data;

    }catch(error){

        console.log("Error: "+error);
        return "error";

    }
}

export async function stopLive(publisher){

    try{

        const response = await axios.get(process.env.REACT_APP_SERVER+"/live/"+publisher);
        return response.data;

    }catch(error){

        console.log("Error: "+error);
        return "error";

    }
}