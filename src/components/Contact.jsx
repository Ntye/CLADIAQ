import "./styles/Contact.css"
import ContactForm from "../utilities/ContactForm.jsx";
import Icon from "../assets/Icon.svg";
import Title from "../utilities/Title.jsx";
import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Contact() {

  const [content, setContent] = useState(null);
  const { language } = useParams();

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
          <h3 data-aos="fade-right" className="contact-title lato-extra-bold">
            {content.subtitle}
          </h3>

          <p data-aos="fade-right" className="lato-regular primary-gray contact-subtitle">
            {content.text}
          </p>

          <p data-aos="fade-right" className="lato-regular primary-gray contact-detail">
            {content.email.title}
          </p>
          <p data-aos="fade-right">
            <Link to="mailto:cladiaq24@gmail.com" className="contact-link">
              {content.email.content}
            </Link>
          </p>
          <br/>

          <p data-aos="fade-right" className="lato-regular primary-gray contact-detail">
            {content.phone.title}
          </p>
          <p data-aos="fade-right">
            {content.phone.content}
          </p>
        </div>
        <div data-aos="fade-left">
          <ContactForm/>
        </div>
      </div>

    </div>
  );
}

export default Contact;