import "./Home.css";
import Layout from "../../components/Layout/Layout.jsx";

// import { useEffect, useState } from 'react'

const Home = (props) => {
  return (
    <Layout user={props.user}>
<div className="home-logo">
      <div className="rotate linear infinite">
      <img src ="../../images/logo-big.png" alt="logo" className="logo"/>
        </div>
        </div>
    </Layout>
  );
};

export default Home;
