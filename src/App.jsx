import AboutUs from "./content/AboutUs.jsx";
import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import NavbarDefault from "./components/NavbarDefault.jsx";
import LandingCarousel from "./components/LandingCarousel.jsx";
import Faq from "./components/Faq.jsx";
import Footer from "./components/Footer.jsx";
import DefaultCarousel from "./components/DefaultCarousel.jsx";


function App() {

  const [content, setContent] = useState(null); // Store the fetched JSON data
  const { language } = useParams();
  const [activeTab, setActiveTab] = useState('home');

  useEffect(() => {
    // Fetch language JSON data based on the current param
    const fetchLanguage = async () => {
      const response = await fetch('/language.json');
      const data = await response.json();

      setContent(data);
      console.log(data)

    };
    fetchLanguage();
  }, [language]);


  if (!content) {
    // Show a loading state if content haven't loaded yet
    return <div>Loading...</div>;
  }

  return (
    <>
      <NavbarDefault activeTab={activeTab} setActiveTab={setActiveTab}/>
      {/*<LandingCarousel/>*/}
      <DefaultCarousel/>
      <h1 className="yo">{content.greeting[language]}</h1>
      <p className="yo">{content.meeting[language]}</p>

      <section id="about-us" className="section">
        <AboutUs/>
      </section>

      <section id="faq" className="section">
        <Faq/>
      </section>

      <Footer/>
    </>
  )
}

export default App
