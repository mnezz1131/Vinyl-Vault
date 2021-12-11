import './App.css';
// import { useState, useEffect } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Home from './screens/Home/Home.jsx'
function App() {


  return (
    <div className='App'>
      <Switch>
        <Route exact path="/"><Home/></Route>
        {/* <Route path="/sign-up"><SignUp setUser={setUser} /></Route>
        <Route path="/sign-in"><SignIn setUser={setUser} /></Route>
        <Route path="/sign-out"><SignOut setUser={setUser} /></Route>
        <Route exact path="/products"><Products user={user} /></Route>
        <Route path="/add-product">{user ? <ProductCreate user={user} /> : <Redirect to="/sign-up" />}</Route>
        <Route exact path="/products/:id/edit">{user ? <ProductEdit user={user} /> : <Redirect to='/' />}</Route>
        <Route exact path="/products/:id"><ProductDetail user={user} /></Route> */}
      </Switch>
    </div>
  );
}

export default App;