import Icon from "../assets/Icon.svg";
import Harold from "../assets/Team/Harold.png"
import Nina from "../assets/Team/Nina.png"
import Nathanael from "../assets/Team/Nathanael.png"
import Donald from "../assets/Team/Donald.png"
import Estelle from "../assets/Team/Estelle.png"
import Wilfred from "../assets/Team/Wilfred.png"
import HighFive from "../assets/Team/HighFive.svg"
import "./styles/Team.css"
import TeamMember from "../utilities/TeamMember.jsx";
import Title from "../utilities/Title.jsx";
import React, {useEffect, useState} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useParams} from "react-router-dom";

function Team() {

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

      <div className="team ">
        <div className="team-members">
          <div data-aos="fade-right" className="team-images">
            <TeamMember
              name={content.member_1.name}
              post={content.member_1.post}
              imgSrc={Harold}
              className="team-member"
              facebookLink="https://www.sciencedirect.com/science/article/abs/pii/S0761842518304674"
              twitterLink="https://www.sciencedirect.com/science/article/abs/pii/S0761842518304674"
              linkedInLink="https://www.sciencedirect.com/science/article/abs/pii/S0761842518304674"
            />

            <TeamMember
              name={content.member_2.name}
              post={content.member_2.post}
              imgSrc={Nina}
              className="team-member"
              facebookLink="https://www.sciencedirect.com/science/article/abs/pii/S0761842518304674"
              twitterLink="https://www.sciencedirect.com/science/article/abs/pii/S0761842518304674"
              linkedInLink="https://www.sciencedirect.com/science/article/abs/pii/S0761842518304674"
            />

            <TeamMember
              name={content.member_3.name}
              post={content.member_3.post}
              imgSrc={Nathanael}
              facebookLink="https://www.sciencedirect.com/science/article/abs/pii/S0761842518304674"
              twitterLink="https://www.sciencedirect.com/science/article/abs/pii/S0761842518304674"
              linkedInLink="https://www.sciencedirect.com/science/article/abs/pii/S0761842518304674"
            />
          </div>

          <div data-aos="fade-left" className="team-images">
            <TeamMember
              name={content.member_4.name}
              post={content.member_4.post}
              imgSrc={Donald}
              className="team-member"
              facebookLink="https://www.sciencedirect.com/science/article/abs/pii/S0761842518304674"
              twitterLink="https://www.sciencedirect.com/science/article/abs/pii/S0761842518304674"
              linkedInLink="https://www.sciencedirect.com/science/article/abs/pii/S0761842518304674"
            />

            <TeamMember
              name={content.member_5.name}
              post={content.member_5.post}
              imgSrc={Estelle}
              className="team-member"
              facebookLink="https://www.sciencedirect.com/science/article/abs/pii/S0761842518304674"
              twitterLink="https://www.sciencedirect.com/science/article/abs/pii/S0761842518304674"
              linkedInLink="https://www.sciencedirect.com/science/article/abs/pii/S0761842518304674"
            />

            <TeamMember
              name={content.member_6.name}
              post={content.member_6.post}
              imgSrc={Wilfred}
              facebookLink="https://www.sciencedirect.com/science/article/abs/pii/S0761842518304674"
              twitterLink="https://www.sciencedirect.com/science/article/abs/pii/S0761842518304674"
              linkedInLink="https://www.sciencedirect.com/science/article/abs/pii/S0761842518304674"
            />
          </div>
        </div>
        <img
          alt="high-five"
          src={HighFive}
          className="element team-ilustration"
        />
      </div>

    </div>
  );
}

export default Team;