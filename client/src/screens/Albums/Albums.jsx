import { useState, useEffect } from "react";
import "./Albums.css";
import Layout from "../../components/Layout/Layout.jsx";
import AlbumDisplay from '../../components/AlbumDisplay/AlbumDisplay.jsx'
import { getAllAlbums } from "../../services/albums.js";

const Albums = (props) => {
  const [albums, setAlbums] = useState([])

  useEffect(() => {
    const fetchAlbums = async () => {
      const allAlbums = await getAllAlbums()
      setAlbums(allAlbums)
    }
    fetchAlbums()
  }, [])
  return (
    <Layout>
   
      <div className='albums'>
        {albums.map((album, index) => {
          return (
            <AlbumDisplay
              _id={album._id}
              title={album.title}
              artist={album.artist}
              genre={album.genre}
              vendor={album.vendor}
              condition={album.condition}
              cost={album.cost}
              purchased={album.purchased}
              released={album.released}
              cover_url={album.cover_url}
              key={index}
            />
          )
        })}
      </div> 
    </Layout>
  );
};
export default Albums;