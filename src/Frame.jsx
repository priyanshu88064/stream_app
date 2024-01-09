import Panel from './Panel';

function Frame(){

    const smallM = (<div className="smallM">
                        <div><Panel zoom={19}/></div>
                        <div><Panel zoom={19}/></div>
                    </div>);

    return (
        <div className="frame">
            <div className="bigM">
                <Panel zoom={39}/>
            </div>
            {smallM}
            {smallM}
        </div>
    );
}
export default Frame;