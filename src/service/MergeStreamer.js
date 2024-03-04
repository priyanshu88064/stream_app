export function Merge(streamers,liveStreams){

    let data = [];

    liveStreams.forEach(element => {
        
        const publisher = streamers.find(streamer=>{
            return element.publisher === streamer.id;
        })

        data.push({...element,publisher});

    });

    return data;
}