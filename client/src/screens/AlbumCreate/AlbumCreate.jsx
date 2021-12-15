import "./AlbumCreate.css";
import { useState } from "react";
import Layout from "../../components/Layout/Layout.jsx";

const AlbumCreate = ({ user, handleAlbumCreate, handleLogout }) => {
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAlbum((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Layout user={user} handleLogout={handleLogout}>
      <div className="create-album-container">
        <div className="album-create-title">
          <div>Add An Album To Your Collection</div>
        </div>
        <div className="album-create">
          <form
            className="-album-create-form"
            onSubmit={(e) => {
              e.preventDefault();
              handleAlbumCreate(album);
            }}
          >
            <input
              className="album-create-inputbox"
              placeholder="Title"
              value={album.title}
              name="title"
              required
              autoFocus
              onChange={handleChange}
            />
            <input
              className="album-create-inputbox"
              placeholder="Artist"
              value={album.artist}
              name="artist"
              required
              onChange={handleChange}
            />
            <input
              className="album-create-inputbox"
              placeholder="Genre"
              value={album.genre}
              name="genre"
              required
              onChange={handleChange}
            />
            <input
              className="album-create-inputbox"
              placeholder="Vendor"
              value={album.vendor}
              name="vendor"
              required
              onChange={handleChange}
            />
            <input
              className="album-create-inputbox"
              placeholder="Condition"
              value={album.condition}
              name="condition"
              required
              onChange={handleChange}
            />
            <input
              className="album-create-inputbox"
              placeholder="Cost"
              value={album.cost}
              name="cost"
              required
              onChange={handleChange}
            />
            <input
              className="album-create-inputbox"
              placeholder="Purchased"
              value={album.purchased}
              name="purchased"
              required
              onChange={handleChange}
            />
            <input
              className="album-create-inputbox"
              placeholder="Released"
              value={album.released}
              name="released"
              required
              onChange={handleChange}
            />
            <input
              className="album-create-inputbox"
              placeholder="Cover Image"
              value={album.cover_url}
              name="cover_url"
              required
              onChange={handleChange}
            />

            <button type="submit" className="ablum-create-submit-button">
              Submit
            </button>
          </form>
        </div>
        <div></div>
      </div>
    </Layout>
  );
};
export default AlbumCreate;
