import "./Home.css";
import Layout from "../../components/Layout/Layout.jsx";

// import { useEffect, useState } from 'react'

const Home = (props) => {
  return (
    <Layout user={props.user}>

      <div className="home-logo rotate linear infinite">
      <img src ="../../images/logo-big.png" alt="logo"/>
      </div>
    </Layout>
  );
};

export default Home;
