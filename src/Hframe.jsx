import HeleStats from './HeleStats';
import Panel from './Panel';

function Hframe({thumb,all}){
    return (
        <div className="hframe">
            <div className='hele'>
                <Panel zoom={19} duration={thumb[0].duration} isLive={false}/>
                <HeleStats thumb={thumb[0]}/>
            </div>
            <div className='hele'>
                <Panel zoom={19} duration={thumb[1].duration} isLive={false}/>
                <HeleStats thumb={thumb[1]}/>
            </div>
            <div className='hele'>
                <Panel zoom={19} duration={thumb[2].duration} isLive={false}/>
                <HeleStats thumb={thumb[2]}/>
            </div>
            {!all && <div className='hele'>
                <Panel zoom={19} duration={thumb[3].duration} isLive={false}/>
                <HeleStats thumb={thumb[3]}/>
            </div>}
        </div>
    );
}
export default Hframe;