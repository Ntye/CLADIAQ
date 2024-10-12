import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {Form} from "react-bootstrap";
import Logo from "../assets/Navbar/Logo.svg";
import LogoD from "../assets/Navbar/WhiteLogo.svg";
import "../index.css";
import "./styles/NavbarDefault.css";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {BiWorld} from "react-icons/bi";

function NavbarDefault({activeTab, setActiveTab}) {
  const [content, setContent] = useState(null);
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
      <>
        {['lg'].map((expand) => (
          <Navbar key={expand} expand={expand} className="nav">
            <Container fluid>
              <Navbar.Brand href="#home">
                <img
                  src={`${scrolled ? Logo : LogoD}`}
                  alt="Logo"
                  className="nav-logo"
                />
                </Navbar.Brand>
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    <img
                      src={Logo}
                      alt="Logo"
                      className="nav-logo"
                    />
                  </Offcanvas.Title>
                </Offcanvas.Header>

                <Offcanvas.Body className="nav-body">
                  <div>
                    <Nav className="justify-content-end flex-grow-1 pe-3 ">
                      <Nav.Link
                        href="#home"
                        className="nav-link poppins-semibold"
                      >
                        {content.home.title}
                      </Nav.Link>

                      <NavDropdown
                        title={content.about.title}
                        id={`offcanvasNavbarDropdown-expand-${expand}`}
                        href="about-us"
                        className={`dropbtn poppins-semibold`}
                      >
                        <NavDropdown.Item
                          className="dropdown-item raleway-regular"
                          href="#mission"
                        >
                          {content.about.subsections.mission}
                        </NavDropdown.Item>

                        <NavDropdown.Item
                          className="dropdown-item raleway-regular"
                          href="#team"
                        >
                          {content.about.subsections.team}
                        </NavDropdown.Item>

                        <NavDropdown.Divider/>
                        <NavDropdown.Item
                          className="dropdown-item raleway-regular"
                          href="#faq"
                        >
                          {content.about.subsections.faq}
                        </NavDropdown.Item>
                      </NavDropdown>

                      <NavDropdown
                        title={content.solutions.title}
                        id={`offcanvasNavbarDropdown-expand-${expand}`}
                        className={`dropbtn poppins-semibold`}
                        href="#solution"
                      >
                        <NavDropdown.Item
                          href="#indoor"
                          className="dropdown-item raleway-regular"
                        >
                          {content.solutions.subsections.indoor}
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          className="dropdown-item raleway-regular"
                          href="#outdoor"
                        >
                          {content.solutions.subsections.outdoor}
                        </NavDropdown.Item>
                        <NavDropdown.Divider/>
                        <NavDropdown.Item
                          className="dropdown-item raleway-regular"
                          href="#mobileApp"
                        >
                          {content.solutions.subsections.mobile_app}
                        </NavDropdown.Item>

                        <NavDropdown.Item
                          className="dropdown-item raleway-regular"
                          href="#dataCollection"
                        >
                          {content.solutions.subsections.ai}
                        </NavDropdown.Item>
                      </NavDropdown>

                      <Nav.Link
                        href="#contact"
                        className="nav-link poppins-semibold"
                      >
                        {content.contact.title}
                      </Nav.Link>
                    </Nav>
                  </div>

                  <div className="d-flex flex-row lang">
                    <BiWorld className="lang-icon"/>

                    <Form.Select className="nav-lang" onChange={handleLanguageChange}
                                 value={language === 'fr' ? '1' : '0'}>
                      <option value="0">English</option>
                      <option value="1">Français</option>
                    </Form.Select>
                  </div>

                </Offcanvas.Body>

              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </>
    );
  }

export default NavbarDefault;

