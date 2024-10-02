import "./styles/Footer.css"
import Logo from "../assets/Footer/Logo.svg"
import {Link} from "react-router-dom";
import Facebook from "../assets/Footer/Facebook.svg"
import Instagram from "../assets/Footer/Instagram.svg"
import LinkedIn from "../assets/Footer/LinkedIn.svg"
import Twitter from "../assets/Footer/Twitter.svg"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top justify-content-between d-flex flex-row">
        <img
          src={Logo}
          alt="Logo"
          className="footer-image"
        />

        <div className="footer-top-right d-flex flex-row">
          <div className="footer-section">
            <h3 className="footer-section-title lato-bold">About</h3>
            <Link to="#" className="footer-section-link raleway-regular">Home</Link> <br/>
            <Link to="#" className="footer-section-link raleway-regular">About Us</Link> <br/>
            <Link to="#" className="footer-section-link raleway-regular">Services</Link> <br/>
            <Link to="#" className="footer-section-link raleway-regular">Solutions</Link> <br/>
          </div>

          <div className="footer-section">
            <h3 className="footer-section-title lato-bold">Information</h3>
            <Link to="#" className="footer-section-link raleway-regular">Contacts</Link> <br/>
            <Link to="#" className="footer-section-link raleway-regular">Our Team</Link> <br/>
            <Link to="#" className="footer-section-link raleway-regular">Blog</Link> <br/>
            <Link to="#" className="footer-section-link raleway-regular">FAQ</Link> <br/>
          </div>

          <div className="footer-section">
            <h3 className="footer-section-title lato-bold">Service</h3>
            <Link to="#" className="footer-section-link raleway-regular">Pages</Link> <br/>
            <Link to="#" className="footer-section-link raleway-regular">Elements</Link> <br/>
            <Link to="#" className="footer-section-link raleway-regular">Site Map</Link> <br/>
            <Link to="#" className="footer-section-link raleway-regular">Pricing</Link> <br/>
          </div>
        </div>
      </div>

      <div className="footer-mid">
        <div>
          <h3 className="lato-bold footer-contact-title">
            Contact
          </h3>
          <p className="raleway-regular footer-contact-number">
            +237 6 78 29 32 63
          </p>
          <Link to="mailto:cladiaq05@gmail.com" className="footer-contact-link raleway-regular">
            cladiaq24@gmail.com
          </Link>
        </div>

        <div>
          <h3 className="lato-bold mb-4">
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
                src={Twitter}
                alt="Facebook"
              />
            </Link>
            <Link to="mailto:cladiaq05@gmail.com" className="footer-social-link">
              <img
                src={LinkedIn}
                alt="Facebook"
              />
            </Link>
            <Link to="mailto:cladiaq05@gmail.com" className="footer-social-link">
              <img
                src={Instagram}
                alt="Facebook"
              />
            </Link>
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
