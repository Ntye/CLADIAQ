import AboutUs from "./components/AboutUs.jsx";
import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import LandingCarousel from "./components/LandingCarousel.jsx";
import Faq from "./components/Faq.jsx";
import Footer from "./components/Footer.jsx";
import DefaultCarousel from "./components/DefaultCarousel.jsx";
import DefaultNavbar from "./components/DefaultNavbar.jsx";
import Solution from "./components/Solution.jsx";
import Team from "./components/Team.jsx";
import Contact from "./components/Contact.jsx";
import Feature from "./components/Feature.jsx";
import homeImg from "../src/assets/Carousel/home-mob.png"
import Chatbot from "./components/Chatbot.jsx";


function App() {

  const [content, setContent] = useState(null); // Store the fetched JSON data
  const { language } = useParams();
  const [activeTab, setActiveTab] = useState('indoor');

  useEffect(() => {
    // Fetch language JSON data based on the current param
    const fetchLanguage = async () => {
      const response = await fetch("/home.json");
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
    // Show a loading state if content haven't loaded yet
    return <div>Loading...</div>;
  }

  return (
    <>
    <Chatbot/>
    <DefaultNavbar activeTab={activeTab} setActiveTab={setActiveTab}/>

      <section id="home" className="section">
        <div className="home">
          <LandingCarousel/>
        </div>

        <div className=" home-mobile">
          <img
            src={homeImg}
            alt="home-img"
            className="home-img element"
          />

          <h3 data-aos="fade-left" className="about-us-title-h3 poppins-semibold">
            {content.title}
          </h3>

          <p data-aos="fade-left" className="about-us-subtitle raleway-regular">
            {content.description}
          </p>


        </div>
      </section>

      <section id="about" className="section">
        <section id="mission" className="section">
          <AboutUs/>
      </section>
    </section>

      <section id="solution" className="section">
        <section id="mobileApp" className="section">
          <section id="indoor" className="section">
            <section id="outdoor" className="section">
              <Solution activeTab={activeTab} setActiveTab={setActiveTab}/>
            </section>
          </section>
        </section>
      </section>


      <section id="team" className="section">
        <Team/>
      </section>

      <section id="faq" className="section">
        <Faq/>
      </section>

      <section id="contact" className="section">
        <Contact/>
      </section>

      <Footer/>
    </>
  )
}

export default App
