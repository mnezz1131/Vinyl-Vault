import "./Nav.css";
import { Link } from "react-router-dom";

const Nav = ({ user, handleLogout }) => {
  const authenticatedOptions = (
    <>
      <Link className="nav-link-models" to="/albums">
        Albums
      </Link>
      <Link className="nav-link-models" to="/add-album">
        Save An Album
      </Link>
      <button className="nav-link-models nav-link-models-button" onClick={handleLogout}>
        Logout
      </button>
    </>
  );
  const unauthenticadedOptions = (
    <>
      <Link className="nav-link-sign-up" to="/sign-up">
        Sign Up
      </Link>
      <Link className="nav-link-sign-in" to="/sign-in">
        Sign In
      </Link>
    </>
  );
  // const alwaysOptions = (
  //   <>
  //     <Link className="nav-link-models" to="/albums">Albums</Link>
  //     <Link className="nav-link-models" to="/add-album">Save An Album</Link>
  //     <Link className="nav-link-models" to="/albums/:id/edit">Edit An Album</Link>

  //   </>
  // );

  return (
    <nav>
      <div className="nav-left">
        <Link to="/">
          <img className="nav-logo" src={"/images/logo-big.png"} alt="Title" />
          <img className="nav-title" src={"/images/title.png"} alt="Title" />
        </Link>
      </div>
      <div className="nav-center">
        {user && (
          <div className="nav-welcome">Welcome, &nbsp; {user.username}</div>
        )}
      </div>

      <div className="nav-right">
        <div className="nav-btns">
          {/* {alwaysOptions} */}
          {user ? authenticatedOptions : unauthenticadedOptions}
        </div>
      </div>

    </nav>
  );
};

export default Nav;
