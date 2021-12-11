import "./Home.css";
import Layout from "../../components/Layout/Layout.jsx";

// import { useEffect, useState } from 'react'

const Home = (props) => {
  return (
    <Layout user={props.user}>
      
      <div className="home-content">
        <h1>Welcome to Vinyl Vault</h1>
      </div>
    </Layout>
  );
};

export default Home;
