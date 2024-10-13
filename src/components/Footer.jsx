import "./styles/Footer.css"
import Logo from "../assets/Footer/Logo.svg"
import {Link} from "react-router-dom";
import Facebook from "../assets/Footer/Facebook.svg"
import Instagram from "../assets/Footer/Instagram.svg"
import LinkedIn from "../assets/Footer/LinkedIn.svg"
import Twitter from "../assets/Footer/Twitter.svg"

const Footer = () => {
  return (
    <footer className="footer spacing">
      <div className="footer-top justify-content-between d-flex flex-row">
        <img
          src={Logo}
          alt="Logo"
          className="footer-image"
        />

        <div className="footer-text">
          <div className="footer-top-right">
            <div className="footer-section">
              <h3 className="footer-section-title lato-bold">About</h3>
              <a href="#home" className="footer-section-link raleway-regular">Home</a> <br/>
              <a href="#mission" className="footer-section-link raleway-regular">About Us</a> <br/>
              <a href="#indoor" className="footer-section-link raleway-regular">Solutions</a> <br/>
            </div>

            <div className="footer-section">
              <h3 className="footer-section-title lato-bold">Information</h3>
              <a href="#contact" className="footer-section-link raleway-regular">Contacts</a> <br/>
              <a href="#team" className="footer-section-link raleway-regular">Our Team</a> <br/>
              <a href="#faq" className="footer-section-link raleway-regular">FAQ</a> <br/>
            </div>
          </div>

          <div>
            <h3 className="footer-section-title lato-bold">
              Socials
            </h3>
            <div className="d-flex flex-row">
              <Link to="mailto:cladiaq05@gmail.com" className="footer-social-link">
                <img
                  src={Facebook}
                  alt="Facebook"
                />
              </Link>
              <Link to="mailto:cladiaq05@gmail.com" className="footer-social-link">
                <img
                  src={LinkedIn}
                  alt="LinkedIn"
                />
              </Link>
              <Link to="mailto:cladiaq05@gmail.com" className="footer-social-link">
                <img
                  src={Instagram}
                  alt="Instagram"
                />
              </Link>
            </div>

          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>Privacy policy &nbsp;&nbsp; | &nbsp;&nbsp; Terms of use</p>
        <p>&copy; 2024 CLADIAQ. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
