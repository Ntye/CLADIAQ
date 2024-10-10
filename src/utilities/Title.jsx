import "./styles/Title.css"
import PropTypes from "prop-types";

const Title = ({ section, imgSrc }) => {
  return (
    <div>
      <div className="section-title">
        <img
          className="section-title-icon"
          src={imgSrc}
          alt="icon"
        />
        <p className="section-title-text poppins-regular">{section}</p>
      </div>
    </div>
  );
}

Title.propTypes = {
  section: PropTypes.string,
  imgSrc: PropTypes.string,
};

export default Title;