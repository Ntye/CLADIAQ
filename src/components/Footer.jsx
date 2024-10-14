import "./styles/Footer.css"
import Logo from "../assets/Footer/Logo.svg"
import {Link, useNavigate, useParams} from "react-router-dom";
import Facebook from "../assets/Footer/Facebook.svg"
import Instagram from "../assets/Footer/Instagram.svg"
import LinkedIn from "../assets/Footer/LinkedIn.svg"
import React, {useEffect, useState} from "react";

const Footer = () => {
  const [content, setContent] = useState(null);
  const { language } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch language JSON data based on the current param
    const fetchLanguage = async () => {
      const response = await fetch("/footer.json");
      const data = await response.json();
      setContent(data[language]);
    };
    fetchLanguage();
  }, [language]);

  const handleLanguageChange = (e) => {
    const selectedLanguage = e.target.value === "1" ? "fr" : "en";
    navigate(`/${selectedLanguage}`);
  };

  if (!content) {
    return <div>Loading...</div>;
  }

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
              <h3 className="footer-section-title lato-bold">{content.about.title}</h3>
              <a href="#home" className="footer-section-link raleway-regular">{content.about.one}</a> <br/>
              <a href="#about" className="footer-section-link raleway-regular">{content.about.two}</a> <br/>
              <a href="#indoor" className="footer-section-link raleway-regular">{content.about.three}</a> <br/>
            </div>

            <div className="footer-section">
              <h3 className="footer-section-title lato-bold">{content.information.title}</h3>
              <a href="#contact" className="footer-section-link raleway-regular">{content.information.one}</a> <br/>
              <a href="#team" className="footer-section-link raleway-regular">{content.information.two}</a> <br/>
              <a href="#faq" className="footer-section-link raleway-regular">{content.information.three}</a> <br/>
            </div>
          </div>

          <div>
            <h3 className="footer-section-title lato-bold">
              {content.socials}
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
        <p>{content.terms.left_one} &nbsp;&nbsp; | &nbsp;&nbsp; {content.terms.left_two}</p>
        <p>&copy; {content.terms.copy}</p>
      </div>
    </footer>
  );
};

export default Footer;
