import HeleStats from './HeleStats';
import Panel from './Panel';

function Hframe({thumb,all}){
    return (
        <div className="hframe">
            <div className='hele'>
                <Panel zoom={19} bg={thumb.current[0]} isLive={false}/>
                <HeleStats/>
            </div>
            <div className='hele'>
                <Panel zoom={19} bg={thumb.current[1]} isLive={false}/>
                <HeleStats/>
            </div>
            <div className='hele'>
                <Panel zoom={19} bg={thumb.current[2]} isLive={false}/>
                <HeleStats/>
            </div>
            {!all && <div className='hele'>
                <Panel zoom={19} bg={thumb.current[3]} isLive={false}/>
                <HeleStats/>
            </div>}
        </div>
    );
}
export default Hframe;