import AboutUs from "./content/AboutUs.jsx";
import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import NavbarDefault from "./components/NavbarDefault.jsx";
import LandingCarousel from "./components/LandingCarousel.jsx";


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
      {/*<NavbarCustom />*/}
      <NavbarDefault activeTab={activeTab}  setActiveTab={setActiveTab} />
      <LandingCarousel/>
      <h1 className="yo">{content.greeting[language]}</h1>
      <p className="yo">{content.meeting[language]}</p>
      <AboutUs/>
    </>
  )
}

export default App
