import './Album.css';
import { Link } from 'react-router-dom'

const Album = (props) => {
    return (
        <>
            <Link className="album" to={`/album/${props._id}`}>
                <img className="cover_url" src={props.cover_url} alt={props.title} />
                <div className="album-artist">{props.artist}</div>
                <div className="album-title">{`$${props.title}`}</div>
            </Link>
        </>
    )
}
export default Album;