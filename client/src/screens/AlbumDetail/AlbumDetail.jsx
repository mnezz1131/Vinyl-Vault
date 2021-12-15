import "./AlbumDetail.css";
import { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout.jsx";
import { getOneAlbum, addNoteToAlbum } from "../../services/albums";
import { useParams, Link } from "react-router-dom";

const AlbumDetail = ({ user, handleLogout }) => {
  const [album, setAlbum] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [review, setReview] = useState({
    title: "",
    desciption: "",
  });

  const { id } = useParams();

  useEffect(() => {
    const fetchAlbum = async () => {
      const album = await getOneAlbum(id);
      setAlbum(album);
      setLoaded(true);
    };
    fetchAlbum();
  }, [id, toggle]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReview((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addNoteToAlbum(review, id);
    setReview({
      title: "",
      desciption: "",
    });
    setToggle((prev) => !prev);
  };

  if (!isLoaded) {
    return <h1>Loading...</h1>;
  }

  return (
    <Layout user={user} handleLogout={handleLogout}>
      <div className="album-detail-container">
        <div className="album-detail">
          <img
            className="album-detail-image"
            src={album.cover_url}
            alt={album.title}
          />
          <div className="detail">
            <div className="render-detail">{`Title: ${album.title}`}</div>
            <div className="render-detail">{`Artist: ${album.artist}`}</div>
            <div className="render-detail"> {`Genre: ${album.genre}`}</div>
            <div className="render-detail">{`Vendor: ${album.vendor}`}</div>
            <div className="render-detail">{`Condition: ${album.condition}`}</div>
            <div className="render-detail">{`Cost: ${album.cost}`}</div>
            <div className="render-detail">{`Purchase Date: ${album.purchased}`}</div>
            <div className="render-detail">{`Release Date: ${album.released}`}</div>
            <div className="album-detail-button-div">
              <div className="button-container">
                <button className="album-detail-edit-button">
                  <Link
                    className="album-detail-href"
                    to={`/albums/${album.id}/edit`}
                  >
                    Edit Album
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AlbumDetail;
