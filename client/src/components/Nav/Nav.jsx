import './Nav.css'
import { Link } from 'react-router-dom'

const authenticatedOptions = (
  <>
    <Link className="nav-link-account" to="/user">ACCOUNT INFO</Link>
    <Link className="nav-link-account-icon" to="/user">
      <img
        src="/images/icons/person-fill.svg"
        alt="shopping bag"
      />
    </Link>
  </>
)
const unauthenticadedOptions = (
  <>
    <Link className="nav-link-sign-in" to="/signIn">SIGN IN</Link>
    <Link className="nav-link-sign-in-icon" to="/signIn">
      <img
        src="/images/icons/door-open-fill.svg"
        alt="shopping bag"
      />
    </Link>
  </>
)
const alwaysOptions = (
  <>
    <Link className="nav-link-models" to="/albums">Albums</Link>
    <Link className="nav-link-models" to="/add-album">Save An Album</Link>
    <Link className="nav-link-models" to="/albums/:id/edit">Edit An Album</Link>
   
  </>
)

const Nav = ({ user }) => {
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
        {user && <div className="nav-welcome">Welcome, &nbsp; {user.name}</div>}

        {user && <Link className="nav-shopping-bag" to="/cart">
          <img
            src="/images/icons/bag-fill.svg"
            alt="shopping bag"
          />
        </Link>}
      </div>
    </nav>
  )
}

export default Nav;