import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <p className="footer-copyright">Copyright © 2021</p>

      <p className="footer-name">Mike Nezzer 2021</p>

      <div className="small-logo-div">
        <img
          className="small-logo"
          src="/images/github.png"
          alt="github"
        />
        <img
          className="small-logo"
          src="/images/linkedin.png"
          alt="github"
        />
      </div>
    </footer >
  )
}

export default Footer;