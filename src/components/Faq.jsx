import './styles/Faq.css';
import FAQItem from '../utilities/FaqItem.jsx';
import React, {useEffect, useState} from "react";
import Icon from "../assets/Faq/Icon.svg";
import Title from "../utilities/Title.jsx";
import Image from "../assets/Faq/Image.svg";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useParams} from "react-router-dom";

function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [content, setContent] = useState(null);
  const { language } = useParams();

  const faqArray = content ? Object.keys(content).map((key) => content[key]) : [];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    // Initialize AOS animations on component mount
    AOS.init({
      duration: 1000, // Animation duration in ms
      once: false,    // Animate more than once when scrolling
    });

    // Fetch language JSON data based on the current param
    const fetchLanguage = async () => {
      const response = await fetch('/faq.json');
      const data = await response.json();
      setContent(data[language]);
      console.log(content)
    };
    fetchLanguage();
  }, [language]);

  if (!content) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Title
        imgSrc={Icon}
        section="FAQ Question"
      />
      <div className="faq spacing">
        <img
          alt="faq"
          src={Image}
          className="faq-image"
          data-aos="fade-right"
        />
        <div className="faq-left">

          <div data-aos="fade-left" className="faq-container">
            {faqArray.map((faq, index) => (
              <FAQItem
                key={index}
                faq={faq}
                index={index}
                toggleFAQ={toggleFAQ}
                activeIndex={activeIndex}
              />
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}

export default Faq;
