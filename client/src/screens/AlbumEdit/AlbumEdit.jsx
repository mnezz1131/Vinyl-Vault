import "./AlbumEdit.css";
import { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout.jsx";
import { useParams } from "react-router-dom";
import { getOneAlbum } from "../../services/albums";

const AlbumCreate = ({
  user,
  albums,
  handleAlbumUpdate,
  handleLogout,
  handleAlbumDelete,
}) => {
  const [album, setAlbum] = useState({
    title: "",
    artist: "",
    genre: "",
    vendor: "",
    condition: "",
    cost: "",
    purchased: "",
    released: "",
    cover_url: "",
  });

  const [isLoaded, setLoaded] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchAlbum = async () => {
      const album = await getOneAlbum(id);
      setAlbum({
        title: album.title,
        artist: album.artist,
        genre: album.genre,
        vendor: album.vendor,
        condition: album.condition,
        cost: album.cost,
        purchased: album.purchased,
        released: album.released,
        cover_url: album.cover_url,
      });
      setLoaded(true);
    };
    fetchAlbum();
  }, [id]);

  if (!isLoaded) {
    return <h1>Loading...</h1>;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAlbum((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Layout user={user} handleLogout={handleLogout}>
      <div className="album-edit-container">
        <div className="image-container">
          <img
            className="album-edit-image"
            src={album.cover_url}
            alt={album.title}
          />
        </div>
        <div className="album-edit-form">
          <form
            className="edit-create-form"
            onSubmit={(e) => {
              e.preventDefault();
              handleAlbumUpdate(id, album);
            }}
          >
            <h2>Edit An Album</h2>
            <label className="album-edit-label" htmlFor="Title">
              Title
            </label>
            <input
              className="album-input"
              placeholder="Title"
              value={album.title}
              name="title"
              required
              autoFocus
              onChange={handleChange}
            />
            <label className="album-edit-label" htmlFor="Title">
              Artist
            </label>
            <input
              className="album-input"
              placeholder="Artist"
              value={album.artist}
              name="artist"
              required
              onChange={handleChange}
            />
            <label className="album-edit-label" htmlFor="Title">
              Genre
            </label>
            <input
              className="album-input"
              placeholder="Genre"
              value={album.genre}
              name="genre"
              required
              onChange={handleChange}
            />
            <label className="album-edit-label" htmlFor="Title">
              Vendor
            </label>
            <input
              className="album-input"
              placeholder="Vendor"
              value={album.vendor}
              name="vendor"
              required
              onChange={handleChange}
            />
            <label className="album-edit-label" htmlFor="Title">
              Condition
            </label>
            <input
              className="album-input"
              placeholder="Condition"
              value={album.condition}
              name="condition"
              required
              onChange={handleChange}
            />
            <label className="album-edit-label" htmlFor="Title">
              Cost
            </label>
            <input
              className="album-input"
              placeholder="Cost"
              value={album.cost}
              name="cost"
              required
              onChange={handleChange}
            />
            <label className="album-edit-label" htmlFor="Purchased">
              Year Purchased
            </label>
            <input
              className="album-input"
              placeholder="Purchased"
              value={album.purchased}
              name="purchased"
              required
              onChange={handleChange}
            />
            <label className="album-edit-label" htmlFor="Released">
              Year Released
            </label>
            <input
              className="album-input"
              placeholder="Released"
              value={album.released}
              name="released"
              required
              onChange={handleChange}
            />
            <label className="album-edit-label" htmlFor="input-cover-url">
              Cover Image
            </label>
            <input
              className="album-input"
              placeholder="Cover Image"
              value={album.cover_url}
              name="cover_url"
              required
              onChange={handleChange}
            />
            <div>
              <button
                type="album-edit-submit"
                className="album-edit-submit-button"
              >
                Submit
              </button>
              <button
                className="album-edit-delete-button"
                onClick={() => handleAlbumDelete(id)}
              >
                Delete
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};
export default AlbumCreate;
