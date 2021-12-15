import { Link } from "react-router-dom";
import "./AlbumDisplay.css";

const AlbumDisplay = ({ album }) => {
  return (
    <>
      <Link className="maincontainer" to={`/albums/${album.id}`}>
        <div className="back">
          <div className="album-title">{`${album.title}`}</div>
          <div>
            <div className="album-display-info">{album.artist}</div>
            <div className="album-display-info">{`Genre: ${album.genre}`}</div>
            <div className="album-display-info">{`Vendor: ${album.vendor}`}</div>
            <div className="album-display-info">{`Condition: ${album.condition}`}</div>
            <div className="album-display-info">{`Cost: ${album.cost}`}</div>
            <div className="album-display-info">{`Purchase Date: ${album.purchased}`}</div>
            <div className="album-display-info">{`Release Date: ${album.released}`}</div>
          </div>
        </div>
        <div className="front">
          <div className="image">
            <img
              className="cover_url"
              src={album.cover_url}
              alt={album.title}
            />
          </div>
        </div>
      </Link>
    </>
  );
};
export default AlbumDisplay;
