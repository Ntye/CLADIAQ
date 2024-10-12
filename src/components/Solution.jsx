import React, { useState, useEffect} from 'react';
import "./styles/Solution.css";
import Icon from "../assets/Icon.svg";
import Indoor from "../assets/Products/Indoor.svg";
import Outdoor from "../assets/Products/Outdoor.svg"
import {Button, Col, FloatingLabel, Form} from "react-bootstrap";
import Title from "../utilities/Title.jsx";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Solution({ activeTab, setActiveTab }) {

  const [indoorQty, setIndoorQty] = useState(1);
  const [outdoorQty, setOutdoorQty] = useState(1);

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

  // Initialize AOS animations on component mount
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      once: false,    // Animate more than once when scrolling
    });
    console.log(activeTab)
  }, []);

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
          Indoor
        </button>

        <button
          className={`tab-button ${activeTab === 'outdoor' ? 'active' : ''}`}
          onClick={() => handleTabClick('outdoor')}
        >
          Outdoor
        </button>

        <button
          className={`tab-button ${activeTab === 'mobileApp' ? 'active' : ''}`}
          onClick={() => handleTabClick('mobileApp')}
        >
          Mobile App
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
                  Ultra-sophisticated internal device, on the <br/>
                  doorstep of all
                </h3>
                <p className="product-subtitle raleway-bold">
                  By <span className="primary-blue-logo">CLADIAQ</span>
                </p>

                <div className="raleway-regular product-description">
                  Soyez parmi les premiers à vivre l&lsquo;expérience CLADIAQ. Réservez dès maintenant votre prototype
                  exclusif et rejoignez la révolution du bien-être
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
                    Contact Us
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
                  Experience the outdoors like never before
                </h3>
                <p className="product-subtitle raleway-bold">
                  By <span className="primary-blue-logo">CLADIAQ</span>
                </p>

                <div className="raleway-regular product-description">
                  Soyez parmi les premiers à profiter de notre dispositif extérieur innovant. Commandez votre prototype
                  dès maintenant et
                  transformez votre compréhension de la qualité de l'air autour de vous.
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
                    Contact Us
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
                  A groundbreaking mobile app, just a tap away
                </h3>
                <p className="product-subtitle raleway-bold">
                  By <span className="primary-blue-logo">CLADIAQ</span>
                </p>

                <div className="raleway-regular product-description">
                  Soyez parmi les premiers à découvrir l'application CLADIAQ. Téléchargez dès maintenant et transformez
                  votre bien-être quotidien.
                </div>

                {/*<h3 className="product-title lato-extra-bold">*/}
                {/*  Ultra-sophisticated internal device, on the <br/>*/}
                {/*  doorstep of all*/}
                {/*</h3>*/}
                {/*<p className="product-subtitle raleway-bold">*/}
                {/*  By <span className="primary-blue-logo">CLADIAQ</span>*/}
                {/*</p>*/}

                {/*<div className="raleway-regular product-description">*/}
                {/*  Soyez parmi les premiers à vivre l&lsquo;expérience CLADIAQ. Réservez dès maintenant votre prototype*/}
                {/*  exclusif et rejoignez la révolution du bien-être*/}
                {/*</div>*/}

                <Button variant="primary" type="submit" className="cart-button raleway-semibold">
                  Download Now
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


