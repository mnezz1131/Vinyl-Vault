import "./Home.css";
import Layout from "../../components/Layout/Layout.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Home = ({ user, handleLogout }) => {
  return (
    <Layout user={user} handleLogout={handleLogout}>
      <div className="home-main-div">
        <div className="home-title">
          <div className="rotate linear infinite">
            <img
              src="../../images/logo-big-980.png"
              alt="logo"
              className="home-album"
              
            />
          </div>

          <img
            className="home-vinyl-vault"
            data-aos="fade-down"
            data-aos-offset="500"
            data-aos-easing="ease-in-sine"
            data-aos-duration="2000"
            alt="logo"
            src="../../images/title.png"
          />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
