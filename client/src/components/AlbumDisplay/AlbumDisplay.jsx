import { Link } from "react-router-dom";
import "./AlbumDisplay.css";

const AlbumDisplay = ({ album }) => {
  return (
    <>
      {/* <Link className="album-display" to={`/albums/${album.id}`}>
        <div className ="album-details">
          <div className="album-title">{`${album.title}`}</div>
 
          <div className="album-cover">
            <img className="cover_url" src={album.cover_url} alt={album.title} />
            </div>
          <div className="album-artist">{album.artist}</div>
      
          <div className="album-genre">{`Genre: ${album.genre}`}</div>
          <div className="album-vendor">{`Vendor: ${album.vendor}`}</div>
          <div className="album-condition">{`Condition: ${album.condition}`}</div>
          <div className="album-cost">{`Cost: ${album.cost}`}</div>
          <div className="album-purchase">{`Purchase Date: ${album.purchased}`}</div>
          <div className="album-release">{`Release Date: ${album.released}`}</div>
        </div>
      </Link> */}


         <Link className="maincontainer" to={`/albums/${album.id}`}>
        <div className ="back">
          <div className="album-title">{`${album.title}`}</div>
          <div>
          <div className="album-artist">{album.artist}</div>
          <div className="album-genre">{`Genre: ${album.genre}`}</div>
          <div className="album-vendor">{`Vendor: ${album.vendor}`}</div>
          <div className="album-condition">{`Condition: ${album.condition}`}</div>
          <div className="album-cost">{`Cost: ${album.cost}`}</div>
          <div className="album-purchase">{`Purchase Date: ${album.purchased}`}</div>
            <div className="album-release">{`Release Date: ${album.released}`}</div>
            </div>

          </div>
        <div className="front">
          <div className="image">
            <img className="cover_url" src={album.cover_url} alt={album.title} />
          </div>
          </div>
        
      
       
      </Link>

    
    
    </>
  );
};
export default AlbumDisplay;
