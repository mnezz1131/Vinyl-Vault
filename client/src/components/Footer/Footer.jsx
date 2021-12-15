import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <p className="footer-copyright">Copyright © 2021</p>

      <p className="footer-name">Mike Nezzer 2021</p>

      <div className="small-logo-div">
    <a href="https://github.com/mnezz1131">   <img
          className="small-logo"
          src="/images/github.png"
          alt="github"
        /></a> 

      <a href="https://www.linkedin.com/in/michael-nezzer">  <img
          className="small-logo"
          src="/images/linkedin.png"
          alt="github"
        /></a>
      </div>
    </footer >
  )
}

export default Footer;