import "./styles/VerticalSlide.css"
import PropTypes from 'prop-types';

const VerticalSlide = ({ color, imgSrc }) => {
  return (
    <div style={{ backgroundColor: color}}>
      <img
        src={imgSrc}
        alt="slider-image"
        className="vertical-slide-image"
      />
    </div>
  );
};

VerticalSlide.propTypes = {
  imgSrc: PropTypes.string,
  color: PropTypes.string,
  // twitterLink: PropTypes.string,
  // linkedInLink: PropTypes.string,
};

export default VerticalSlide;
