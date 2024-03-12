import HeleStats from './HeleStats';
import Panel from './Panel';

function Hframe({thumb,all}){

    const length = all? 3: 4;

    return (
        <div className="hframe">
            {
                thumb && thumb.length ? [...Array(length)].map((_,index)=>(
                    <div className='hele' key={index}>
                        <Panel bg={thumb[index].thumbnail} zoom={19} duration={thumb[index].duration} isLive={false}/>
                        <HeleStats thumb={thumb[index]}/>
                    </div>
                ))
                :
                [...Array(length)].map((_,index)=>(
                    <div className='hele' key={index}>
                        <Panel zoom={19} isLive={false}/>
                        <HeleStats/>
                    </div>
                ))
                
            }
        </div>
    );
}
export default Hframe;
// all?1:0