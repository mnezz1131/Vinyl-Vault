import './App.css';
// import { useState, useEffect } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Home from './screens/Home/Home.jsx'
import Albums from './screens/Albums/Albums.jsx'
import AlbumCreate from './screens/AlbumCreate/AlbumCreate.jsx'
// import AlbumEdit from './screens/AlbumEdit/AlbumEdit.jsx'
// import AlbumDetail from './screens/Albums/AlbumEdit.jsx'
function App() {


  return (
    <div className='App'>
      <Switch>
        <Route exact path="/"><Home/></Route>
        {/* <Route path="/sign-up"><SignUp setUser={setUser} /></Route>
        <Route path="/sign-in"><SignIn setUser={setUser} /></Route>
        <Route path="/sign-out"><SignOut setUser={setUser} /></Route> */}
        <Route exact path="/albums"><Albums /></Route>
        <Route path="/add-album"><AlbumCreate/></Route>
        {/* <Route exact path="/albums/:id/edit"><AlbumEdit /></Route>
        <Route exact path="/products/:id"><AlbumDetail/></Route> */}
      </Switch>
    </div>
  );
}

export default App;