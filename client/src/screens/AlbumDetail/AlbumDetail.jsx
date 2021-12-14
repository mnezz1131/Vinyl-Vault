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
            <div className="title">{`Title: ${album.title}`}</div>
            <div className="artist">{`Artist: ${album.artist}`}</div>
            <div className="genre"> {`Genre: ${album.genre}`}</div>
            <div className="vendor">{`Vendor: ${album.vendor}`}</div>
            <div className="condition">{`Condition: ${album.condition}`}</div>
            <div className="cost">{`Cost: ${album.cost}`}</div>
            <div className="purchased">{`Purchase Date: ${album.purchased}`}</div>
            <div className="released">{`Release Date: ${album.released}`}</div>
            <div className="album-detail-button-div">
              <div className="button-container">
                <button1>
                  <Link className="album-detail-edit-button" to={`/albums/${album.id}/edit`}>
                    Edit Album
                  </Link>
                </button1>
              </div>
            </div>
            </div>
        
          </div>
          </div>

          {/* <div className="album-details-form">
            <form  onSubmit={handleSubmit}>
              <input 
                className="note-input"
                placeholder="Title"
                value={review.title}
                name="title"
                required
                onChange={handleChange}
              />
              <input
                className="note-input"
                placeholder="Enter a note"
                value={review.desciption}
                name="desciption"
                required
                onChange={handleChange}
              />
                <button className="album-detail-formsubmit 
              "type="submit">Submit
                </button>
            </form>
            <div className = "album-detail-notes-map">
              {album.notes.length > 0
                ? album.notes.map((note) => (
                    <div className = "album-detail-notes">
                      <h4 className = "album-detail-title">{note.title} </h4>
                      <p className = "album-detail-note">{note.desciption}</p>
                    </div>
                  ))
                : null}
            </div>
        </div> */}

      
        
    </Layout>
  );
};

export default AlbumDetail;
