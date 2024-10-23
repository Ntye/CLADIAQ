import Icon from "../assets/Icon.svg";
import Harold from "../assets/Team/Harold.png"
import Nina from "../assets/Team/Nina.png"
import Nathanael from "../assets/Team/Nathanael.png"
import Donald from "../assets/Team/Donald.png"
import Estelle from "../assets/Team/Estelle.png"
import Wilfred from "../assets/Team/Wilfred.png"
import HighFive from "../assets/Team/HighFive.svg"
import "./styles/TeamMobile.css"
import TeamMember from "../utilities/TeamMember.jsx";
import Title from "../utilities/Title.jsx";
import React, {useEffect, useState} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {Link, useParams} from "react-router-dom";
import Facebook from "../assets/Team/Facebook.svg";
import Twitter from "../assets/Team/Twitter.svg";
import LinkedIn from "../assets/Team/LinkedIn.svg";

function TeamMobile() {

  const [content, setContent] = useState(null);
  const { language } = useParams();

  useEffect(() => {
    // Fetch language JSON data based on the current param
    const fetchLanguage = async () => {
      const response = await fetch('/team.json');
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
        section="Our Team"
      />

      <div className="team-mobile justify-content-center">
        <div data-aos="fade-left" className="team-card">
          <img src={Harold} className="team-image" alt="team-image"/>
          <div className="team-member-description">
            <div className="team-member">
              <h3 className="member-name raleway-bold">{content.member_1.name}</h3>
            </div>
            <div className="team-socials">
              <Link to="https://www.sciencedirect.com/science/article/abs/pii/S0761842518304674"
                    className="team-social-link">
                <img src={Facebook} alt="facebook"/>
              </Link>
              <Link to="https://www.sciencedirect.com/science/article/abs/pii/S0761842518304674"
                    className="team-social-link">
                <img src={Twitter} alt="twitter"/>
              </Link>
              <Link to="https://www.sciencedirect.com/science/article/abs/pii/S0761842518304674"
                    className="team-social-link">
                <img src={LinkedIn} alt="linkedIn"/>
              </Link>
            </div>
          </div>
          <p className="member-post lato-regular primary-gray">{content.member_1.post}</p>
        </div>

        <div data-aos="fade-left" className="team-card">
          <img src={Nina} className="team-image" alt="team-image"/>
          <div className="team-member-description">
            <div className="team-member">
              <h3 className="member-name raleway-bold">{content.member_2.name}</h3>
            </div>
            <div className="team-socials">
              <Link to="https://www.sciencedirect.com/science/article/abs/pii/S0761842518304674"
                    className="team-social-link">
                <img src={Facebook} alt="facebook"/>
              </Link>
              <Link to="https://www.sciencedirect.com/science/article/abs/pii/S0761842518304674"
                    className="team-social-link">
                <img src={Twitter} alt="twitter"/>
              </Link>
              <Link to="https://www.sciencedirect.com/science/article/abs/pii/S0761842518304674"
                    className="team-social-link">
                <img src={LinkedIn} alt="linkedIn"/>
              </Link>
            </div>
          </div>
          <p className="member-post lato-regular primary-gray">{content.member_2.post}</p>
        </div>

        <div data-aos="fade-left" className="team-card">
          <img src={Nathanael} className="team-image" alt="team-image"/>
          <div className="team-member-description">
            <div className="team-member">
              <h3 className="member-name raleway-bold">{content.member_3.name}</h3>
            </div>
            <div className="team-socials">
              <Link to="https://www.sciencedirect.com/science/article/abs/pii/S0761842518304674"
                    className="team-social-link">
                <img src={Facebook} alt="facebook"/>
              </Link>
              <Link to="https://www.sciencedirect.com/science/article/abs/pii/S0761842518304674"
                    className="team-social-link">
                <img src={Twitter} alt="twitter"/>
              </Link>
              <Link to="https://www.sciencedirect.com/science/article/abs/pii/S0761842518304674"
                    className="team-social-link">
                <img src={LinkedIn} alt="linkedIn"/>
              </Link>
            </div>
          </div>
          <p className="member-post lato-regular primary-gray">{content.member_3.post}</p>
        </div>

        <div data-aos="fade-right" className="team-card">
          <img src={Wilfred} className="team-image" alt="team-image"/>
          <div className="team-member-description">
            <div className="team-member">
              <h3 className="member-name raleway-bold">{content.member_4.name}</h3>
            </div>
            <div className="team-socials">
              <Link to="https://www.sciencedirect.com/science/article/abs/pii/S0761842518304674"
                    className="team-social-link">
                <img src={Facebook} alt="facebook"/>
              </Link>
              <Link to="https://www.sciencedirect.com/science/article/abs/pii/S0761842518304674"
                    className="team-social-link">
                <img src={Twitter} alt="twitter"/>
              </Link>
              <Link to="https://www.sciencedirect.com/science/article/abs/pii/S0761842518304674"
                    className="team-social-link">
                <img src={LinkedIn} alt="linkedIn"/>
              </Link>
            </div>
          </div>
          <p className="member-post lato-regular primary-gray">{content.member_4.post}</p>
        </div>

        <div data-aos="fade-right" className="team-card">
          <img src={Estelle} className="team-image" alt="team-image"/>
          <div className="team-member-description">
            <div className="team-member">
              <h3 className="member-name raleway-bold">{content.member_5.name}</h3>
            </div>
            <div className="team-socials">
              <Link to="https://www.sciencedirect.com/science/article/abs/pii/S0761842518304674"
                    className="team-social-link">
                <img src={Facebook} alt="facebook"/>
              </Link>
              <Link to="https://www.sciencedirect.com/science/article/abs/pii/S0761842518304674"
                    className="team-social-link">
                <img src={Twitter} alt="twitter"/>
              </Link>
              <Link to="https://www.sciencedirect.com/science/article/abs/pii/S0761842518304674"
                    className="team-social-link">
                <img src={LinkedIn} alt="linkedIn"/>
              </Link>
            </div>
          </div>
          <p className="member-post lato-regular primary-gray">{content.member_5.post}</p>
        </div>

        <div data-aos="fade-right" className="team-card">
          <img src={Donald} className="team-image" alt="team-image"/>
          <div className="team-member-description">
            <div className="team-member">
              <h3 className="member-name raleway-bold">{content.member_6.name}</h3>
            </div>
            <div className="team-socials">
              <Link to="https://www.sciencedirect.com/science/article/abs/pii/S0761842518304674"
                    className="team-social-link">
                <img src={Facebook} alt="facebook"/>
              </Link>
              <Link to="https://www.sciencedirect.com/science/article/abs/pii/S0761842518304674"
                    className="team-social-link">
                <img src={Twitter} alt="twitter"/>
              </Link>
              <Link to="https://www.sciencedirect.com/science/article/abs/pii/S0761842518304674"
                    className="team-social-link">
                <img src={LinkedIn} alt="linkedIn"/>
              </Link>
            </div>
          </div>
          <p className="member-post lato-regular primary-gray">{content.member_6.post}</p>
        </div>

      </div>

    </div>
  )
    ;
}

export default TeamMobile;