import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Slide_1 from '../assets/Carousel/Slide_1.png';
import Slide_2 from '../assets/Carousel/Slide_2.png';
import Slide_3 from '../assets/Carousel/Slide_3.png';
import Slide_4 from '../assets/Carousel/Slide_4.png';
import "./styles/LandingCarousel.css";
import {useParams} from "react-router-dom";

function LandingCarousel() {
  const [content, setContent] = useState([]);  // Initialize as an empty array to avoid null errors
  const slideImages = [Slide_1, Slide_2, Slide_3, Slide_4];
  const { language } = useParams();

  useEffect(() => {
    // Fetch language JSON data based on the current param
    const fetchLanguage = async () => {
      try {
        const response = await fetch('/carousel.json');
        const data = await response.json();
        if (data[language]?.carousel?.slides) {
          setContent(data[language].carousel.slides);
        } else {
          console.error(`No slides found for language: ${language}`);
        }
      } catch (error) {
        console.error('Error fetching carousel data:', error);
      }
    };
    fetchLanguage();
  }, [language]);

  // Check if content is loaded
  if (content.length === 0) {
    return <div>Loading...</div>;
  }
  console.log(content)

  return (
    <Carousel controls={false} className="carousel">
      {content.map((slide, index) => (
        <Carousel.Item key={index} interval={2000}>
          <img
            src={slideImages[index]}
            alt={`Slide ${index + 1}`}
            className="carousel-image"
          />
          <Carousel.Caption className="custom-caption">
            <h3 className="poppins-bold carousel-title">
              {slide.title.split('<br/>').map((line, idx) => (
                <React.Fragment key={idx}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </h3>
            <p className="poppins-semibold carousel-description">
              {slide.description.split('<br/>').map((line, idx) => (
                <React.Fragment key={idx}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default LandingCarousel;
