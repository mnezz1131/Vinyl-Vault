import "./AlbumEdit.css";
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
      
        </div>
        <div className="album-edit-container">
          <form className="create-form" onSubmit={(e) => {
            e.preventDefault()
            handleAlbumUpdate(id, album)
        }}>
          <label className="album-edit-label" for="Title">Title</label>
            <input
              className="input-Title"
              placeholder="Title"
              value={album.title}
              name="title"
              required
              autoFocus
              onChange={handleChange}
          />
          <label className="album-edit-label"  for="Title">Artist</label>
            <input
              className="input-artist"
              placeholder="Artist"
              value={album.artist}
              name="artist"
              required
              onChange={handleChange}
          />
          <label className="album-edit-label"   for="Title">Genre</label>
            <input
              className="input-genre"
              placeholder="Genre"
              value={album.genre}
              name="genre"
              required
              onChange={handleChange}
          />
          <label className="album-edit-label"  for="Title">Vendor</label>
            <input
              className="input-vendor"
              placeholder="Vendor"
              value={album.vendor}
              name="vendor"
              required
              onChange={handleChange}
          />
          <label for="Title">Condition</label>
            <input
              className="input-condition"
              placeholder="Condition"
              value={album.condition}
              name="condition"
              required
              onChange={handleChange}
          />
          <label className="album-edit-label"   for="Title">Cost</label>
            <input
              className="input-cost"
              placeholder="Cost"
              value={album.cost}
              name="cost"
              required
              onChange={handleChange}
          />
          <label className="album-edit-label" for="Purchased">Purchase Date</label>
            <input
              className="input-purchased"
              placeholder="Purchased"
              value={album.purchased}
              name="purchased"
              required
              onChange={handleChange}
          />
          <label className="album-edit-label"  for="Released">Release Date</label>
            <input
              className="input-released"
              placeholder="Released"
              value={album.released}
              name="released"
              required
              onChange={handleChange}
          />
          <label className="album-edit-label" for="input-cover-url">Cover Image</label>
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

    </Layout>
  );
};
export default AlbumCreate;
