import { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout.jsx";
import Button1 from "../../components/Button/Button";
import { useParams } from "react-router-dom";
import { getOneAlbum } from "../../services/albums";

const AlbumCreate = ({ user, handleAlbumUpdate, handleLogout, handleAlbumDelete }) => {
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
      <div>
        <h1>Edit Details on Your Album</h1>
        <div>
          <form className="create-form" onSubmit={(e) => {
            e.preventDefault()
            handleAlbumUpdate(id, album)
          } }>
            <input
              label="Title"
              className="input-Title"
              placeholder="Title"
              value={album.title}
              name="title"
              required
              autoFocus
              onChange={handleChange}
            />
            <input
              className="input-artist"
              placeholder="Artist"
              value={album.artist}
              name="artist"
              required
              onChange={handleChange}
            />
            <input
              className="input-genre"
              placeholder="Genre"
              value={album.genre}
              name="genre"
              required
              onChange={handleChange}
            />
            <input
              className="input-vendor"
              placeholder="Vendor"
              value={album.vendor}
              name="vendor"
              required
              onChange={handleChange}
            />
            <input
              className="input-condition"
              placeholder="Condition"
              value={album.condition}
              name="condition"
              required
              onChange={handleChange}
            />
            <input
              className="input-cost"
              placeholder="Cost"
              value={album.cost}
              name="cost"
              required
              onChange={handleChange}
            />
            <input
              className="input-purchased"
              placeholder="Purchased"
              value={album.purchased}
              name="purchased"
              required
              onChange={handleChange}
            />
            <input
              className="input-released"
              placeholder="Released"
              value={album.released}
              name="released"
              required
              onChange={handleChange}
            />
            <input
              className="input-cover_url"
              placeholder="Cover Image"
              value={album.cover_url}
              name="cover_url"
              required
              onChange={handleChange}
            />

            <Button1 type="submit" className="submit-button">
              Submit
            </Button1>
          </form>
          <button
              className='delete-button'
              onClick={()=>handleAlbumDelete(id)}
            >
              Delete
            </button>
        </div>
      </div>
    </Layout>
  );
};
export default AlbumCreate;
