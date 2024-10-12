import React, { useState, useEffect} from 'react';
import "./styles/Solution.css";
import Icon from "../assets/Icon.svg";
import Indoor from "../assets/Products/Indoor.svg";
import Outdoor from "../assets/Products/Outdoor.svg"
import {Button, Col, FloatingLabel, Form} from "react-bootstrap";
import Title from "../utilities/Title.jsx";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useNavigate, useParams} from "react-router-dom";

function Solution({ activeTab, setActiveTab }) {

  const [indoorQty, setIndoorQty] = useState(1);
  const [outdoorQty, setOutdoorQty] = useState(1);
  const [content, setContent] = useState(null);
  const { language } = useParams();
  const navigate = useNavigate();

  const handleSubmitIn = (e) => {
    e.preventDefault();
    // Handle the submission logic here
    console.log(`Selected Quantity: ${indoorQty}`);
  };

  const handleSubmitOut = (e) => {
    e.preventDefault();
    // Handle the submission logic here
    console.log(`Selected Quantity: ${outdoorQty}`);
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };


  useEffect(() => {
    // Initialize AOS animations on component mount
    AOS.init({
      duration: 1000, // Animation duration in ms
      once: false,    // Animate more than once when scrolling
    });

    // Fetch language JSON data based on the current param
    const fetchLanguage = async () => {
      const response = await fetch('/solution.json');
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
    <div className="spacing">
      <Title
        imgSrc={Icon}
        section="Solution"
      />

      <div className="tabs-navigation justify-content-between">

        <button
          className={`tab-button ${activeTab === 'indoor' ? 'active' : ''}`}
          onClick={() => handleTabClick('indoor')}
        >
          {content.indoor.title}
        </button>

        <button
          className={`tab-button ${activeTab === 'outdoor' ? 'active' : ''}`}
          onClick={() => handleTabClick('outdoor')}
        >
          {content.outdoor.title}
        </button>

        <button
          className={`tab-button ${activeTab === 'mobileApp' ? 'active' : ''}`}
          onClick={() => handleTabClick('mobileApp')}
        >
          {content.mobile.title}
        </button>

      </div>

      <div className="tab-content">

        {activeTab === 'indoor' && (
          <div data-aos="fade-up">
            <div className="content mb-5">
              <img
                data-aos="fade-right"
                className="product-image"
                src={Indoor}
                alt="indoor-illustration"
              />
              <div data-aos="fade-left" className="product-text">

                <h3 className="product-title lato-extra-bold">
                  {content.indoor.text}
                </h3>
                <p className="product-subtitle raleway-bold">
                  {content.indoor.by} <span className="primary-blue-logo">CLADIAQ</span>
                </p>

                <div className="raleway-regular product-description">
                  {content.indoor.description}
                </div>

                <Form onSubmit={handleSubmitIn} className="d-flex flex-row">

                  <FloatingLabel
                    controlId="floatingSelectGrid"
                    label="QTY"
                    className="raleway-semibold qty-text qty"
                  >
                    <Form.Control
                      type="number"
                      min="1"
                      value={indoorQty}
                      onChange={(e) => setIndoorQty(e.target.value)}
                      className="qty-field"
                      required
                    />
                  </FloatingLabel>

                  <Button variant="primary" type="submit" className="cart-button raleway-semibold">
                    {content.indoor.button}
                  </Button>
                </Form>

              </div>
            </div>
          </div>
        )}

        {activeTab === 'outdoor' && (
          <div data-aos="fade-up">
            <div className="mb-5 content">
              <img
                data-aos="fade-right"
                className="product-image"
                src={Outdoor}
                alt="indoor-illustration"
              />
              <div data-aos="fade-left" className="product-text">

              <h3 className="product-title lato-extra-bold">
                  {content.outdoor.text}
                </h3>
                <p className="product-subtitle raleway-bold">
                  {content.outdoor.by} <span className="primary-blue-logo">CLADIAQ</span>
                </p>

                <div className="raleway-regular product-description">
                  {content.outdoor.description}
                </div>

                <Form onSubmit={handleSubmitIn} className="d-flex flex-row">

                  <FloatingLabel
                    controlId="floatingSelectGrid"
                    label="QTY"
                    className="raleway-semibold qty-text qty"
                  >
                    <Form.Control
                      type="number"
                      min="1"
                      value={outdoorQty}
                      onChange={(e) => setOutdoorQty(e.target.value)}
                      className="qty-field"
                      required
                    />
                  </FloatingLabel>

                  <Button variant="primary" type="submit" className="cart-button raleway-semibold">
                    {content.outdoor.button}
                  </Button>
                </Form>

              </div>
            </div>
          </div>
        )}

        {activeTab === 'mobileApp' && (
          <div data-aos="fade-up">
            <div className="content mb-5">
              <img
                data-aos="fade-right"
                className="product-image"
                src={Indoor}
                alt="indoor-illustration"
              />
              <div data-aos="fade-left" className="product-text">

                <h3 className="product-title lato-extra-bold">
                  {content.mobile.text}
                </h3>
                <p className="product-subtitle raleway-bold">
                  {content.mobile.by} <span className="primary-blue-logo">CLADIAQ</span>
                </p>

                <div className="raleway-regular product-description">
                  {content.mobile.description}
                </div>


                <Button variant="primary" type="submit" className="cart-button raleway-semibold">
                  {/*Download Now*/}
                  {content.mobile.button}
                </Button>

              </div>
            </div>
          </div>
        )}

      </div>

    </div>
  );
}

export default Solution;


