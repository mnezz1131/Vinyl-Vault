import "./Albums.css";
import Layout from "../../components/Layout/Layout.jsx";
import AlbumDisplay from "../../components/AlbumDisplay/AlbumDisplay.jsx";


const Albums = ({ user, handleLogout, albums }) => {

  return (
    <Layout user={user} handleLogout={handleLogout}>
      <div className="albums">
        {albums.map((album, index) => (
          <AlbumDisplay album={album} key={index} />
        ))}
      </div>
    </Layout>
  );
};
export default Albums;
