import { useState, useEffect } from "react";
import "./AlbumCreate.css";
import Layout from "../../components/Layout/Layout.jsx";

import { createAlbum } from "../../services/albums.js";

const AlbumCreate = (props) => {
  const [album, setAlbum] = useState({
    title: "",
    artist: "",
    genre: "",
    vendor: "",
    condition: "",
    purchased: "",
    released: "",
    cover_url: "",
  });

  return (
    <Layout>
      <div>
        <h1>Add An Album To Your Collection</h1>
        <div>
          <form className="create-form">
            <input
              className="input-Title"
              placeholder="Title"
              value={album.title}
              name="name"
              required
              autoFocus
              // onChange={handleChange}
            />
            <input
              className="input-artist"
              placeholder="Artist"
              value={album.artist}
              name="artist"
              required
              // onChange={handleChange}
            />
            <input
              className="input-genre"
              placeholder="Genre"
              value={album.genre}
              name="genre"
              required
              // onChange={handleChange}
            />
            <input
              className="input-vendor"
              placeholder="Vendor"
              value={album.vendor}
              name="vendor"
              required
              // onChange={handleChange}
            />
            <input
              className="input-condition"
              placeholder="Condition"
              value={album.condition}
              name="condition"
              required
              // onChange={handleChange}
            />
            <input
              className="input-cost"
              placeholder="Cost"
              value={album.cost}
              name="cost"
              required
              // onChange={handleChange}
            />
            <input
              className="input-genre"
              placeholder="Genre"
              value={album.genre}
              name="genre"
              required
              // onChange={handleChange}
            />
            <input
              className="input-purchased"
              placeholder="Purchased"
              value={album.purchased}
              name="purchased"
              required
              // onChange={handleChange}
            />
            <input
              className="input-released"
              placeholder="Released"
              value={album.released}
              name="released"
              required
              // onChange={handleChange}
            />
            <input
              className="input-cover_url"
              placeholder="Cover Image"
              value={album.cover_url}
              name="cover_url"
              required
              // onChange={handleChange}
            />

            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};
export default AlbumCreate;
