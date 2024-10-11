import React, { useState, useRef } from 'react';
import "./styles/AboutUs.css";
import Icon from "../assets/Icon.svg";
import Title from "../utilities/Title.jsx";

function AboutUs() {
  const homeRef = useRef(null);
  const profileRef = useRef(null);
  const longerTabRef = useRef(null);

  const [activeTab, setActiveTab] = useState('profile');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="about-us  yo">
      <Title
        imgSrc={Icon}
        section="About Us"
      />
      <div id="linked" className="tabs-navigation justify-content-between">
        <button
          className={`tab-button ${activeTab === 'home' ? 'active' : ''}`}
          onClick={() => handleTabClick('home')}
        >
          Home
        </button>
        <button
          className={`tab-button ${activeTab === 'profile' ? 'active' : ''}`}
          onClick={() => handleTabClick('profile')}
        >
          Profile
        </button>
        <button
          className={`tab-button ${activeTab === 'longer-tab' ? 'active' : ''}`}
          onClick={() => handleTabClick('longer-tab')}
        >
          Loooonger Tab
        </button>
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {activeTab === 'home' && <div ref={homeRef} id="linked">Tab content for Home</div>}
        {activeTab === 'profile' && <div ref={profileRef}>Tab content for Profile</div>}
        {activeTab === 'longer-tab' && <div ref={longerTabRef}>Tab content for Loooonger Tab</div>}
      </div>
    </div>
  );
}

export default AboutUs;
