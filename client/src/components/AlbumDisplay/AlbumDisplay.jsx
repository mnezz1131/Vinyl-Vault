import { Link } from 'react-router-dom'
import './AlbumDisplay.jsx'


const AlbumDisplay = (props) => {
    return (
        <>
            <Link className="album" to={`/album/${props._id}`}>
                <img className="cover_url" src={props.cover_url} alt={props.title} />
                <div className="album-artist">{props.artist}</div>
                <div className="album-title">{`${props.title}`}</div>
                <div className="album-genre">{`${props.genre}`}</div>
                <div className="album-vendor">{`${props.vendor}`}</div>
                <div className="album-condition">{`${props.condition}`}</div>
                <div className="album-cost">{`${props.cost}`}</div>
                <div className="album-title">{`${props.purchased}`}</div>
                <div className="album-title">{`${props.released}`}</div>
            </Link>
        </>
    )
}
export default AlbumDisplay