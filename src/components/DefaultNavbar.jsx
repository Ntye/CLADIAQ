import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Logo from "../assets/Navbar/Logo.svg";
import LogoD from "../assets/Navbar/WhiteLogo.svg";
import Menu from "../assets/Navbar/Burger_menu.png"
import "../index.css";
import "./styles/DefaultNavbar.css";
import { BiWorld } from "react-icons/bi";
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function DefaultNavbar({ activeTab, setActiveTab }) {
  const [content, setContent] = useState(null);
  const { language } = useParams();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight - 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Fetch language JSON data based on the current param
    const fetchLanguage = async () => {
      const response = await fetch("/navbar.json");
      const data = await response.json();
      setContent(data[language]);
    };
    fetchLanguage();
  }, [language]);

  const handleLanguageChange = (e) => {
    const selectedLanguage = e.target.value === "1" ? "fr" : "en";
    navigate(`/${selectedLanguage}`);
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  if (!content) {
    return <div>Loading...</div>;
  }

  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="#home">
            <img src={`${scrolled ? Logo : LogoD}`} alt="Logo" className="nav-logo" />
          </a>
        </div>
        <div className="navbar-links">
          <div className={`navbar-links-block poppins-semibold ${scrolled ? "active" : ""}`}>
            <a href="#home" className={`nav-link ${scrolled ? "active" : ""}`}>
              {content.home.title}
            </a>
            <div className="dropdown">
              <a href="#about" className={`nav-link ${scrolled ? "active" : ""}`}>{content.about.title}</a>
              <div className="dropdown-content">
                <a href="#mission" className="dropdown-item">{content.about.subsections.mission}</a>
                <a href="#team" className="dropdown-item">{content.about.subsections.team}</a>
                <a href="#faq" className="dropdown-item">{content.about.subsections.faq}</a>
              </div>
            </div>

            <div className="dropdown">
              <a href="#solution" className={`nav-link ${scrolled ? "active" : ""}`}>{content.solutions.title}</a>
              <div className="dropdown-content">
                <a href="#indoor" className="dropdown-item" onClick={() => handleTabClick('indoor')}>
                  {content.solutions.subsections.indoor}
                </a>
                <a href="#outdoor" className="dropdown-item" onClick={() => handleTabClick('outdoor')}>
                  {content.solutions.subsections.outdoor}
                </a>
                <a href="#mobileApp" className="dropdown-item" onClick={() => handleTabClick('mobileApp')}>
                  {content.solutions.subsections.mobile_app}
                </a>
                </div>
            </div>

            <a href="#contact" className={`nav-link ${scrolled ? "active" : ""}`}>
              {content.contact.title}
            </a>
          </div>

          <div className="lang-select">
            <BiWorld className={`lang-icon ${scrolled ? "active" : ""}`}/>
            <select className={`nav-lang ${scrolled ? "active" : ""}  poppins-semibold`} onChange={handleLanguageChange} value={language === "fr" ? "1" : "0"}>
              <option value="0">English</option>
              <option value="1">Français</option>
            </select>
          </div>
        </div>
      </div>

        <div className="navbar-container-mobile">
          <div className="navbar-logo">
            <a href="#home-mobile">
              <img src={Logo} alt="Logo" className="nav-logo"/>
            </a>
          </div>

          <div>
            <Button variant="primary" onClick={handleShow} className="menu">
              <img src={Menu} alt="menu"/>
            </Button>
            <Offcanvas show={show} onHide={handleClose} scroll={true}>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>
                  <div className="navbar-logo">
                    <a href="#home-mobile">
                      <img src={Logo} alt="Logo" className="nav-logo-mobile"/>
                    </a>
                  </div>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>

                <div className="navbar-links-mobile">
                  <div className={`navbar-links-block-mobile poppins-semibold ${scrolled ? "active" : ""}`}>
                    <a href="#home-mobile" className={`nav-link ${scrolled ? "active" : ""}`}>
                      {content.home.title}
                    </a>
                    <div className="dropdown">
                      <a href="#about-mobile" className={`nav-link ${scrolled ? "active" : ""}`}>{content.about.title}</a>
                      <div className="dropdown-content">
                        <a href="#mission-mobile" className="dropdown-item">{content.about.subsections.mission}</a>
                        <a href="#team-mobile" className="dropdown-item">{content.about.subsections.team}</a>
                        <a href="#faq-mobile" className="dropdown-item">{content.about.subsections.faq}</a>
                      </div>
                    </div>

                    <div className="dropdown">
                      <a href="#solution-mobile" className={`nav-link ${scrolled ? "active" : ""}`}>{content.solutions.title}</a>
                      <div className="dropdown-content">
                        <a href="#indoor-mobile" className="dropdown-item" onClick={() => handleTabClick('indoor')}>
                          {content.solutions.subsections.indoor}
                        </a>
                        <a href="#outdoor-mobile" className="dropdown-item" onClick={() => handleTabClick('outdoor')}>
                          {content.solutions.subsections.outdoor}
                        </a>
                        <a href="#mobileApp" className="dropdown-item" onClick={() => handleTabClick('mobileApp')}>
                          {content.solutions.subsections.mobile_app}
                        </a>
                      </div>
                    </div>

                    <a href="#contact-mobile" className={`nav-link ${scrolled ? "active" : ""}`}>
                      {content.contact.title}
                    </a>
                  </div>

                  <div className="lang-select">
                    <BiWorld className={`lang-icon ${scrolled ? "active" : ""}`}/>
                    <select className={`nav-lang ${scrolled ? "active" : ""}  poppins-semibold`}
                            onChange={handleLanguageChange} value={language === "fr" ? "1" : "0"}>
                      <option value="0">English</option>
                      <option value="1">Français</option>
                    </select>
                  </div>
                </div>
              </Offcanvas.Body>
            </Offcanvas>
          </div>

        </div>
    </nav>
);
}

export default DefaultNavbar;
