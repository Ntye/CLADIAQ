import { Link } from 'react-router-dom';
import Facebook from "../assets/Team/Facebook.svg"
import Twitter from "../assets/Team/Twitter.svg"
import LinkedIn from "../assets/Team/LinkedIn.svg"
import "./styles/TeamMember.css"
import PropTypes from 'prop-types';

const TeamMember = ({ name, post, imgSrc, facebookLink, twitterLink, linkedInLink }) => {
  return (
    <div className="team-card">
      <img src={imgSrc} className="team-image" alt="team-image"/>
      <div className="team-member-description">
        <div className="team-member">
          <h3 className="member-name raleway-bold">{name}</h3>
        </div>
        <div className="team-socials">
          <Link to={facebookLink} className="team-social-link">
            <img src={Facebook} alt="facebook"/>
          </Link>
          <Link to={twitterLink} className="team-social-link">
            <img src={Twitter} alt="twitter"/>
          </Link>
          <Link to={linkedInLink} className="team-social-link">
            <img src={LinkedIn} alt="linkedIn"/>
          </Link>
        </div>
      </div>
      <p className="member-post lato-regular primary-gray">{post}</p>
    </div>
  );
};

TeamMember.propTypes = {
  name: PropTypes.string,
  post: PropTypes.string,
  imgSrc: PropTypes.string,
  facebookLink: PropTypes.string,
  twitterLink: PropTypes.string,
  linkedInLink: PropTypes.string,
};

export default TeamMember;
