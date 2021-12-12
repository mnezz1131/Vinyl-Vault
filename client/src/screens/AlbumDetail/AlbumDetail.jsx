import "./AlbumDetail.css";
import { useState, useEffect } from "react";
import  Layout  from "../../components/Layout/Layout.jsx";
import { getOneAlbum, deleteAlbum } from "../../services/albums";
import { useParams, Link } from "react-router-dom";

const AlbumDetail = (props) => {
  const [album, setAlbum] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchAlbum = async () => {
      const album = await getOneAlbum(id);
      console.log(album)
      setAlbum(album);
      setLoaded(true);
    };
    fetchAlbum();
  }, [id]);

  if (!isLoaded) {
    return <h1>Loading...</h1>;
  }

  return (
    <Layout user={props.user}>
      <div className="album-detail">
        <img
          className="album-detail-image"
          src={album.cover_url}
          alt={album.title}
        />
        <div className="detail">
          <div className="title">{album.title}</div>
          <div className="artist">{album.artist}</div>
          <div className="genre">{album.genre}</div>
          <div className="vendor">{album.vendor}</div>
          <div className="condition">{album.condition}</div>
          <div className="cost">{album.cost}</div>
          <div className="purchased">{album.purchased}</div>
          <div className="released">{album.released}</div>
    
         
          <div className="button-container">
            <Link className="edit-button" to={`/albums/${album._id}/edit`}>
              Edit
            </Link>
            <button
              className="delete-button"
              onClick={() => deleteAlbum(album._id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AlbumDetail;
