import "./styles/Feature.css"
import Logo from "../assets/Features/Features_Logo.svg"
import Protection from "../assets/Features/Engine protection.svg"
import Cleaning from "../assets/Features/Cleaning of deposits.svg"
import Quality from "../assets/Features/High Quality.svg"
import {Button} from "react-bootstrap";

function Feature() {
  return (
    <div className="features d-flex flex-row">
      <div className="features-left">
        <img
          className="features-logo"
          src={Logo}
          alt="Logo"
        />
        <h3 className="features-text poppins-medium">
          The CLADIAQ Wellness <br/>
          Features You&lsquo;ll Enjoy
        </h3>

        <Button className="features-button lato-bold">
          View Products
        </Button>
      </div>

      <div className="features-right">
        <img
          className="features-images"
          src={Quality}
          alt="Quality"
        />
        <img
          className="features-images"
          src={Cleaning}
          alt="Cleaning"
        />
        <img
          className="features-images"
          src={Protection}
          alt="Protection"
        />
      </div>
    </div>
  );
}

export default Feature;