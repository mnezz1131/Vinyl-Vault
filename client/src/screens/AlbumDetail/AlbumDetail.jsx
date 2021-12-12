import { useState, useEffect } from "react";
import "./AlbumDetail.css";
import  Layout  from "../../components/Layout/Layout.jsx";
import { getOneAlbum, deleteAlbum } from "../../services/albums";
import { useParams, Link } from "react-router-dom";

const AlbumDetail = (props) => {
  const [album, setAlbum] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      const album = await getOneAlbum(id);
      setAlbum(album);
      setLoaded(true);
    };
    fetchProduct();
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
          <div className="price">{`$${album.artist}`}</div>
          <div className="description">{album.genre}</div>
          <div className="description">{album.vendor}</div>
          <div className="description">{album.condition}</div>
          <div className="description">{album.cost}</div>
          <div className="description">{album.purchased}</div>
          <div className="description">{album.released}</div>
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
