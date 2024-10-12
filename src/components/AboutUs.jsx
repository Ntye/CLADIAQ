import "./styles/AboutUs.css";
import Icon from "../assets/Icon.svg";
import {Button} from "react-bootstrap";
import illustration from "../assets/AboutUs/Illustration.svg";
import Title from "../utilities/Title.jsx";
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, {useEffect, useState} from "react";
import indoor from "../assets/Description/indoor.svg"
import outdoor from "../assets/Description/outdoor.svg"
import {useNavigate, useParams} from "react-router-dom";

function AboutUs() {

  const [content, setContent] = useState(null);
  const { language } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch language JSON data based on the current param
    const fetchLanguage = async () => {
      const response = await fetch('/about.json');
      const data = await response.json();
      setContent(data[language]);
    };

    AOS.init({
      duration: 1000, // Animation duration in ms
      once: false,    // Animate more than once when scrolling
    });
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
    <div>
      <Title
        imgSrc={Icon}
        section={content.title}
        className="about-title"
      />

      <div className="about-us ">
        <img
          className="element about-image"
          src={illustration}
          alt=""
        />

        <div className="about-us-text">
          <h3 data-aos="fade-left" className="about-us-title-h3 poppins-semibold">
            {content.about_us.title}
          </h3>

          <p data-aos="fade-left" className="about-us-subtitle raleway-regular">
            {content.about_us.parts.part_1}
          </p>

          {/*<p data-aos="fade-left" className="about-us-subtitle raleway-regular">*/}
          {/*  {content.about_us.parts.part_2}*/}
          {/*</p>*/}

          <div data-aos="fade-left" className="d-flex flex-row">
            <Button className="lato-bold about-us-button">
              {content.about_us.buttons.one}
            </Button>

            <Button className="lato-bold about-us-button">
              {content.about_us.buttons.two}
            </Button>
          </div>
        </div>
      </div>

      <div className="about-us  mt-5">

        <div className="about-us-text">
          <h3 data-aos="fade-right" className="about-us-title-h3 poppins-semibold">
            {content.indoor.title}
          </h3>

          <p data-aos="fade-right" className="about-us-subtitle raleway-regular">
            {content.indoor.text}
          </p>


          <div data-aos="fade-right" className="d-flex flex-row">
            <Button className="lato-bold learn-button">
              {content.indoor.buttons}
            </Button>
          </div>

        </div>

        <img
          className="element about-image"
          src={indoor}
          alt=""
        />

      </div>

      <div className="about-us   mt-5">
        <img
          className="element about-image"
          src={outdoor}
          alt=""
        />

        <div className="about-us-text">
          <h3 data-aos="fade-left" className="about-us-title-h3 poppins-semibold">
            {content.outdoor.title}
          </h3>

          <p data-aos="fade-left" className="about-us-subtitle raleway-regular">
            {content.outdoor.text}
          </p>

          <div data-aos="fade-left" className="d-flex flex-row">

            <Button className="lato-bold about-us-button">
              {content.outdoor.buttons}
            </Button>

          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
