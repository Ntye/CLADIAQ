import Carousel from 'react-bootstrap/Carousel';
import Slide_1 from  '../assets/Carousel/Slide_1.png'
import Slide_2 from  '../assets/Carousel/Slide_2.png'
import Slide_3 from  '../assets/Carousel/Slide_3.png'
import Slide_4 from  '../assets/Carousel/Slide_4.png'
import {useEffect, useState} from "react";
import { useParams} from "react-router-dom";
import "./styles/LandingCarousel.css"


function LandingCarousel() {

  const [content, setContent] = useState(null); // Store the fetched JSON data
  const { language } = useParams();

  useEffect(() => {
    // Fetch language JSON data based on the current param
    const fetchLanguage = async () => {
      const response = await fetch("/carousel.json");
      const data = await response.json();
      setContent(data[language]);
    };
    fetchLanguage();
  }, [language]);


  if (!content) {
    return <div>Loading...</div>;
  }

  return (
    // <Carousel data-bs-theme="dark" controls={false} indicators={false}>
    <Carousel controls={false} className="carousel swiper">

      <Carousel.Item interval={3500}>
        <img
          src={Slide_1}
          alt="First slide"
          className="carousel-image"
        />
        <Carousel.Caption className="custom-caption">
          <h3 className="element poppins-bold carousel-title">
            {content.carousel.slide_1.title}
          </h3>
          <p className="poppins-semibold carousel-description">
            {content.carousel.slide_1.description}
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      {/*<Carousel.Item interval={5000}>*/}
      {/*  <img*/}
      {/*    src={Slide_2}*/}
      {/*    alt="Second slide"*/}
      {/*    className="carousel-image"*/}
      {/*  />*/}
      {/*  <Carousel.Caption className="custom-caption">*/}
      {/*    <h3 className=" element poppins-bold carousel-title">*/}
      {/*      {content.carousel.slide_2.title}*/}
      {/*    </h3>*/}
      {/*    <p className="poppins-semibold carousel-description">*/}
      {/*      {content.carousel.slide_2.description}*/}
      {/*    </p>*/}
      {/*  </Carousel.Caption>*/}
      {/*</Carousel.Item>*/}

      <Carousel.Item interval={3500}>
        <img
          src={Slide_3}
          alt="Second slide"
          className="carousel-image"
        />
        <Carousel.Caption className="custom-caption">
          <h3 className=" element poppins-bold carousel-title">
            {content.carousel.slide_3.title}
          </h3>
          <p className="poppins-semibold carousel-description">
            {content.carousel.slide_3.description}
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={3500}>
        <img
          src={Slide_4}
          alt="Fourth slide"
          className="carousel-image"
        />
        <Carousel.Caption className="custom-caption">
          <h3 className="element  poppins-bold carousel-title">
            {content.carousel.slide_4.title}
          </h3>
          <p className="poppins-semibold carousel-description">
            {content.carousel.slide_4.description}
          </p>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  );
}

export default LandingCarousel;