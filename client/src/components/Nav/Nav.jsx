import './Nav.css'
import { Link } from 'react-router-dom'

const authenticatedOptions = (
  <>
    <Link className="nav-link-models" to="/albums">Albums</Link>
    <Link className="nav-link-models" to="/add-album">Save An Album</Link>
    <Link className="nav-link-models" to="/albums/:id/edit">Edit An Album</Link>
    <Link className="nav-link-sign-out" to="/sign-out">Sign Out</Link>
  </>
)
const unauthenticadedOptions = (
  <>
    <Link className="nav-link-sign-up" to="/sign-up">Sign Up</Link>
    <Link className="nav-link-sign-in" to="/sign-in">Sign In</Link>
  </>
)
const alwaysOptions = (
  <>
    {/* <Link className="nav-link-models" to="/albums">Albums</Link>
    <Link className="nav-link-models" to="/add-album">Save An Album</Link>
    <Link className="nav-link-models" to="/albums/:id/edit">Edit An Album</Link>
    */}
  </>
)

const Nav = ({ user }) => {
  console.log(user)
  return (
    <nav>
      <div className="nav-left">
        <Link to="/">
        
          <img className="nav-logo" src={'/images/logo-big.png'} alt="Title" />
          <img className="nav-title" src={'/images/title.png'} alt="Title" />
        </Link>
        <div className="nav-btns">
          {alwaysOptions}
          {user ? authenticatedOptions : unauthenticadedOptions}
        </div>
      </div>
      <div className="nav-right">
        {user && <div className="nav-welcome">Welcome, &nbsp; {user.username}</div>}

        
      </div>
    </nav>
  )
}

export default Nav;