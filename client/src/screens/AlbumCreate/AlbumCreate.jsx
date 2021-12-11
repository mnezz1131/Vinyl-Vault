import { useState, useEffect } from "react";
import "./AlbumCreate.css";
import Layout from "../../components/Layout/Layout.jsx";

import { createAlbum } from "../../services/albums.js";

const AlbumCreate = (props) => {
  const [album, setAlbum] = useState({
    title: '',
    artist: '',
    genre: '',
    vendor: '',
    condition: '',
    purchased: '',
    released: '',
    cover_url: '',
  })
  
  return (
    <Layout>
      <h1>This is Save an Album Page</h1>
    
          
    </Layout>
  );
};
export default AlbumCreate;