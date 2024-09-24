import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {Form, Modal} from "react-bootstrap";
import Logo from "../assets/Navbar/Logo.svg";
import LogoD from "../assets/Navbar/WhiteLogo.svg";
import Menu from "../assets/Navbar/menu.svg"
import "../index.css";
import "./styles/NavbarDefault.css";
import { BiWorld} from "react-icons/bi";

function NavbarDefault({activeTab, setActiveTab}) {
  const [content, setContent] = useState(null);
  const [show, setShow] = useState(false);
  const { language } = useParams();
  const navigate = useNavigate();

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleTabClick = (tab) => {
    setActiveTab(tab); // Set the active tab when a service is clicked
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    // Fetch language JSON data based on the current param
    const fetchLanguage = async () => {
      const response = await fetch('/navbar.json');
      const data = await response.json();
      setContent(data[language]);
    };
    fetchLanguage();
  }, [language]);

  const handleLanguageChange = (e) => {
    const selectedLanguage = e.target.value === '1' ? 'fr' : 'en';
    navigate(`/${selectedLanguage}`);
  };

  if (!content) {
    return <div>Loading...</div>;
  }

  return (
    <nav className="nav">
      <a href="#home">
        <img
          src={`${scrolled ? Logo : LogoD}`}
          alt="Logo"
          className="nav-logo"
        />
      </a>

      <div className="links">
        <a href="#home" className={`nav-link poppins-semibold ${scrolled ? 'primary-blue-logo' : 'primary-white'} ${activeTab === '#about-us' ? 'link-active' : ''} ${scrolled ? 'primary-blue-logo' : 'primary-white'}`}>
          {content.home.title}
        </a>

        {/* Dropdown for About */}
        <div className="dropdown">
          <a href="#about-us" className={`dropbtn poppins-semibold ${scrolled ? 'primary-blue-logo' : 'primary-white'}`}>
            {content.about.title}
          </a>
          <div className="dropdown-content">
            <a href="#mission" className="dropdown-item  raleway-regular">{content.about.subsections.mission}</a>
            <a href="#team" className="dropdown-item raleway-regular">{content.about.subsections.team}</a>
            <a href="#faq" className="dropdown-item raleway-regular">{content.about.subsections.faq}</a>
          </div>
        </div>

        {/* Dropdown for Solutions */}
        <div className="dropdown">
          <a href="#solution" className={`dropbtn poppins-semibold ${scrolled ? 'primary-blue-logo' : 'primary-white'}`}>
            {content.solutions.title}
          </a>
          <div className="dropdown-content">
            <a href="#indoor" className="dropdown-item raleway-regular">{content.solutions.subsections.indoor}</a>
            <a href="#outdoor" className="dropdown-item raleway-regular">{content.solutions.subsections.outdoor}</a>
            <a href="#mobileApp"
               className="dropdown-item raleway-regular">{content.solutions.subsections.mobile_app}</a>
            <a href="#ai" className="dropdown-item raleway-regular">{content.solutions.subsections.ai}</a>
            <a href="#dataCollection"
               className="dropdown-item raleway-regular">{content.solutions.subsections.data_collection}</a>
          </div>
        </div>

        {/* Dropdown for Impact */}
        <div className="dropdown">
          <a href="#impact" className={`dropbtn poppins-semibold ${scrolled ? 'primary-blue-logo' : 'primary-white'}`}>
            {content.impact.title}
          </a>
          <div className="dropdown-content">
            <a href="#environmental"
               className="dropdown-item raleway-regular">{content.impact.subsections.environmental}</a>
            <a href="#healthTips"
               className="dropdown-item raleway-regular">{content.impact.subsections.health_tips}</a>
            <a href="#techAndEnvironment"
               className="dropdown-item raleway-regular">{content.impact.subsections.tech_and_environment}</a>
          </div>
        </div>

        <a href="#contact" className={`nav-link poppins-semibold ${scrolled ? 'primary-blue-logo' : 'primary-white'} ${activeTab === '#contact' ? 'link-active' : ''} ${scrolled ? 'primary-blue-logo' : 'primary-white'}`}>{content.contact.title}</a>

      </div>
      <div className="d-flex flex-row">
        <BiWorld className={`lang-icon ${scrolled ? 'primary-blue-logo' : 'primary-white'}`}/>

        <Form.Select
          className={`nav-lang ${scrolled ? 'primary-blue-logo' : 'primary-white'}`}
          onChange={handleLanguageChange} value={language === 'fr' ? '1' : '0'}
        >
          <option value="0">English</option>
          <option value="1">Français</option>
        </Form.Select>
      </div>


      <div className="mobile-links">
        <img src={Menu} alt="menu" onClick={handleShow}/>

        <Modal show={show} fullscreen={true} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              <img src={Logo} alt="Logo" className="nav-logo"/>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Modal body content

            <a href="#home" className="nav-link">{content.home.title}</a>
            <a href="#about" className="nav-link">{content.about.title}</a>
            <a href="#solution" className="nav-link">{content.solutions.title}</a>
            <a href="#impact" className="nav-link">{content.impact.title}</a>
            <a href="#contact" className="nav-link">{content.contact.title}</a>

            <div className="d-flex flex-row">
              <BiWorld className="lang-icon"/>

              <Form.Select className="nav-lang" onChange={handleLanguageChange} value={language === 'fr' ? '1' : '0'}>
                <option value="0">English</option>
                <option value="1">Français</option>
              </Form.Select>
            </div>
          </Modal.Body>
        </Modal>

      </div>
    </nav>
  );
}

export default NavbarDefault;

