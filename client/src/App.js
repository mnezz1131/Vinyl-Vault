import "./App.css";
import { useState, useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import Home from "./screens/Home/Home.jsx";
import Albums from "./screens/Albums/Albums.jsx";
import AlbumCreate from "./screens/AlbumCreate/AlbumCreate.jsx";
import SignIn from "./screens/SignIn/SignIn.jsx";
import SignUp from "./screens/SignUp/SignUp.jsx";
import AlbumEdit from "./screens/AlbumEdit/AlbumEdit.jsx";
import AlbumDetail from "./screens/AlbumDetail/AlbumDetail.jsx";
import {
  verifyUser,
  loginUser,
  registerUser,
  removeToken,
} from "./services/auth.js";
import {getAllAlbums, createAlbum, deleteAlbum, putAlbum} from "./services/albums"

function App() {
  const [albums, setAlbums] = useState([]);
  const [user, setUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const fetchUser = async () => {
      const user = await verifyUser();
      user ? setUser(user) : setUser(null);
    };
    fetchUser();
  }, []);

  useEffect(() => {
    const fetchAlbums = async () => {
      const allAlbums = await getAllAlbums();
      setAlbums(allAlbums);
    };
    fetchAlbums();
  }, []);

  const handleAlbumCreate = async (albumData) => {
    const newAlbum = await createAlbum(albumData)
    setAlbums(prev => [...prev, newAlbum])
    history.push("/albums")
  }

  const handleAlbumDelete = async (id) => {
    await deleteAlbum(id)

    setAlbums(prev => prev.filter((album) => {
      return album.id !== Number(id)
    }))
    history.push("/albums")
  }

  const handleAlbumUpdate = async (id, albumData) => {
    const updateAlbum = await putAlbum(id, albumData)
    setAlbums(prev => prev.map(album => {
      return album.id === Number(id) ? updateAlbum : album
    }))
    history.push("/albums")
  }

  const handleLogin = async (loginData) => {
    const userData = await loginUser(loginData);
    setUser(userData);
    history.push("/albums");
  };

  const handleRegister = async (registerData) => {
    const userData = await registerUser(registerData);
    setUser(userData);
    history.push("/albums");
  };

  const handleLogout = async () => {
    setUser(null);
    localStorage.removeItem("authToken");
    removeToken();
    history.push("/")
  };



  return (
    <div className="App">
      <Switch>
        <Route path="/sign-up">
          <SignUp handleRegister={handleRegister} user={user} handleLogout={handleLogout}/>
        </Route>

        <Route path="/sign-in">
          <SignIn user={user} handleLogout={handleLogout} handleLogin={handleLogin}/>
        </Route>

        <Route path="/add-album">
          <AlbumCreate user={user} handleLogout={handleLogout} handleAlbumCreate={handleAlbumCreate}/>
        </Route>
        <Route path="/albums/:id/edit">
          <AlbumEdit user={user} albums={albums}handleAlbumUpdate={handleAlbumUpdate} handleLogout={handleLogout} handleAlbumDelete={handleAlbumDelete } />
        </Route>

        <Route path="/albums/:id">
          <AlbumDetail user={user} handleLogout={handleLogout} />
        </Route>
        <Route path="/albums">
          <Albums user={user} handleLogout={handleLogout} albums={albums}/>
        </Route>

        <Route path="/">
          <Home user={user} handleLogout={handleLogout} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
