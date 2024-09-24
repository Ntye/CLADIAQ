// import React, {useState} from 'react';
// import "./styles/AboutUs.css"
//
// function AboutUs() {
//
//   const [activeTab, setActiveTab] = useState('profile');
//
//   const handleTabClick = (tab) => {
//     setActiveTab(tab);
//   };
//
//   return (
//     <div className="about-us">
//       <div className="tabs-navigation justify-content-between">
//         <button
//           className={`tab-button ${activeTab === 'home' ? 'active' : ''}`}
//           onClick={() => handleTabClick('home')}
//         >
//           Home
//         </button>
//         <button
//           className={`tab-button ${activeTab === 'profile' ? 'active' : ''}`}
//           onClick={() => handleTabClick('profile')}
//         >
//           Profile
//         </button>
//         <button
//           className={`tab-button ${activeTab === 'longer-tab' ? 'active' : ''}`}
//           onClick={() => handleTabClick('longer-tab')}
//         >
//           Loooonger Tab
//         </button>
//       </div>
//
//       {/* Tab Content */}
//       <div className="tab-content">
//         {activeTab === 'home' && <div id="linked">Tab content for Home</div>}
//         {activeTab === 'profile' && <div>Tab content for Profile</div>}
//         {activeTab === 'longer-tab' && <div>Tab content for Loooonger Tab</div>}
//       </div>
//     </div>
//   );
// }
//
// export default AboutUs;

import React, { useState, useRef } from 'react';
import "./styles/AboutUs.css";

function AboutUs() {
  // Create refs for each section
  const homeRef = useRef(null);
  const profileRef = useRef(null);
  const longerTabRef = useRef(null);

  const [activeTab, setActiveTab] = useState('profile');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="about-us  yo">
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
