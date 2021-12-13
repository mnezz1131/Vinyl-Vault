import "./Home.css";
import Layout from "../../components/Layout/Layout.jsx";

// import { useEffect, useState } from 'react'

const Home = ({user, handleLogout}) => {
  return (
    <Layout user={user} handleLogout={handleLogout}>
      <div className = "home-main-div">
      <div className="home-logo">
        <div className="rotate linear infinite">
          <img src="../../images/logo-big.png" alt="logo" className="home-album" />
        </div>
        </div>
        </div>
    </Layout>
  );
};

export default Home;
