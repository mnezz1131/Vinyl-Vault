import { Link } from "react-router-dom";
import "./AlbumDisplay.jsx";

const AlbumDisplay = ({album}) => {
  return (
    <>
      <Link className="album-display" to={`/albums/${album.id}`}>
        <div classname ="album-details">
          <img className="cover_url" src={album.cover_url} alt={album.title} />
          <div className="album-artist">{album.artist}</div>
          <div className="album-title">{`${album.title}`}</div>
          <div className="album-genre">{`${album.genre}`}</div>
          <div className="album-vendor">{`${album.vendor}`}</div>
          <div className="album-condition">{`${album.condition}`}</div>
          <div className="album-cost">{`${album.cost}`}</div>
          <div className="album-title">{`${album.purchased}`}</div>
          <div className="album-title">{`${album.released}`}</div>
        </div>
      </Link>
    </>
  );
};
export default AlbumDisplay;
