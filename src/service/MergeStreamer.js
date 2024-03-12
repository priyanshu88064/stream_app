export function Merge(streamers,liveStreams){

    let data = [];

    try{

        liveStreams.forEach(element => {
            
            const publisher = streamers.find(streamer=>{
                return element.publisher === streamer.id;
            })

            data.push({...element,publisher});
            
        });   
    }catch(error){
        console.log(error);
    }
    return data;

}