import { useState, useEffect } from "react";
import "./Albums.css";
import Layout from "../../components/Layout/Layout.jsx";

import { getAllAlbums } from "../../services/albums.js";

const Albums = (props) => {
  const [albums, setAlbums] = useState([])

  useEffect(() => {
    const fetchAlbums = async () => {
      const allAlbums = await getAlbums()
      setAlbums(allAlbums)
    }
    fetchAlbums()
  }, [])
  return (
    <Layout>
      <h1>This  is albums</h1>
      <div className='albums'>
        {albums.map((album, index) => {
          return (
            <Album
              _id={album._id}
              title={album.title}
              artist={album.artist}
              genre={album.genre}
              vendor={album.vendor}
              condition={album.condition}
              cost={album.cost}
              purchased={album.purchased}
              released={album.released}
              thumb_url={album.thumb_url}
              cover_ucl={album.cover_url}
              key={index}
            />
          )
        })}
      </div>
          
    </Layout>
  );
};
export default Albums;