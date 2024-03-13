import { Link } from "react-router-dom";

function HeleStats({thumb}){

    return (
        <Link
            to={{
                pathname:"/channel",
            }}
            state={{Name:thumb?.publisher?.name,profileImg:thumb?.publisher?.profileImg}}
            style={{ textDecoration: 'none', color: 'inherit' }}
        >
            <div className="helestats">
            <div className="heleimg">
                {
                    thumb?.thumbnail ? <img src={thumb?.publisher?.profileImg} alt=""/> : <div className="hiconskeleton"></div>
                }
            </div>
            <div className="c2">
                <div className="heletitle">
                    {
                        thumb?.title ? thumb?.title : <div className="loadingskeleton"></div>
                    }
                </div>
                <div className="heleacccount">
                    {
                        thumb?.publisher?.name ? thumb?.publisher?.name : <div className="loadingskeleton"></div>
                    }
                </div>
                <div className="helemeta">{thumb?.title && "7 hours ago"}</div>
            </div>
        </div>
        </Link>
    );
}
export default HeleStats;