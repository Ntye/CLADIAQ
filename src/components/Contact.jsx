import "./styles/Contact.css"
import ContactForm from "../utilities/ContactForm.jsx";
import Icon from "../assets/Icon.svg";
import Title from "../utilities/Title.jsx";
import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Contact() {

  const [content, setContent] = useState(null);
  const { language } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch language JSON data based on the current param
    const fetchLanguage = async () => {
      const response = await fetch('/contact.json');
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

      <div className="contact spacing">

        <div className="contact-text">
          <h3 className="contact-title lato-extra-bold">
            {content.subtitle}
          </h3>

          <p className="lato-regular primary-gray contact-subtitle">
            {content.text}
          </p>

          <p className="lato-regular primary-gray contact-detail">
            {content.email.title}
          </p>
          <p>
            {content.email.content}
          </p>
          <br/>

          <p className="lato-regular primary-gray contact-detail">
            {content.phone.title}
          </p>
          <p>
            {content.phone.content}
          </p>
        </div>
        <ContactForm/>
      </div>

    </div>
  );
}

export default Contact;