import "./styles/AboutUs.css";
import Icon from "../assets/Icon.svg";
import {Button} from "react-bootstrap";
import illustration from "../assets/AboutUs/Illustration.svg";
import Title from "../utilities/Title.jsx";

function AboutUs() {

  return (
    <div className="">
      <Title
        imgSrc={Icon}
        section="About Us"
      />

      <div className="">
        <img
          className=""
          src={illustration}
          alt="indoor-illustration"
        />
        <div className="">
          <h3 className="about-us-title-h3 poppins-semibold">
            Our Company Overview
          </h3>
          <p className="about-us-subtitle raleway-regular">
            CLADIAQ embodies the spirit of innovation that drives Carlio.
            Just as Petroforce revolutionized the oil industry, CLADIAQ is blazing
            New trails in air quality. By designing and developing cutting-edge
            solutions, we are contributing to a healthier, more sustainable
            future, while laying the foundations for a world where air quality is a
            priority for all.
          </p>

          <p className="about-us-subtitle raleway-regular">
            CLADIAQ is a pioneering brand dedicated to revolutionizing indoor air
            quality. Drawing on decades of industry innovation, we&lsquo;ve carefully crafted
            a range of cutting-edge solutions designed to improve your well-being.
          </p>

          <div className="d-flex flex-row">
            <Button className="lato-bold">
              Product
            </Button>

            <Button className="lato-bold">
              Our Team
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
