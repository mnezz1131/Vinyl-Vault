import './App.css';
import { useState, useEffect } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Home from './screens/Home/Home.jsx'
import Albums from './screens/Albums/Albums.jsx'
import AlbumCreate from './screens/AlbumCreate/AlbumCreate.jsx'
import SignIn from './screens/SignIn/SignIn.jsx'
import SignUp from './screens/SignUp/SignUp.jsx'
import AlbumEdit from './screens/AlbumEdit/AlbumEdit.jsx'
import AlbumDetail from './screens/AlbumDetail/AlbumDetail.jsx'
import { verifyUser } from './services/auth.js'

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const fetchUser = async () => {
      const user = await verifyUser()
      user ? setUser(user) : setUser(null)
    }
    fetchUser()
  }, [])


  return (
    <div className='App'>
      <Switch>
        <Route exact path="/">
          <Home user={user} />
        </Route>

        <Route  path="/sign-up">
          <SignUp setUser={setUser} />
        </Route>

        <Route path="/sign-in">
          <SignIn setUser={setUser} />
        </Route>

        {/* <Route path="/sign-out"><SignOut/></Route> */}
        
        <Route exact path="/albums"><Albums user={user} /></Route>
        {/* <Route exact path="/add-albums"><AlbumCreate user={user} /></Route> */}

        <Route path="/add-album">
          {user ? <AlbumCreate user={user} /> : <Redirect to="/sign-up" />}
        </Route>

        {/* <Route exact path="/edit-albums"><AlbumEdit user={user} /></Route> */}
        
        <Route exact path="/albums/:id/edit">
          {user ? <AlbumEdit user={user} /> : <Redirect to='/' />}
        </Route>

        <Route exact path="/album/:id"><AlbumDetail user={user} /></Route>

    
      </Switch>
    </div>
  );
}

export default App;