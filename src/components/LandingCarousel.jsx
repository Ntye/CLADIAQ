import Carousel from 'react-bootstrap/Carousel';
import Slide_1 from  '../assets/Carousel/Slide_1.svg'
import Slide_2 from  '../assets/Carousel/Slide_2.svg'
import Slide_3 from  '../assets/Carousel/Slide_3.svg'
import Slide_4 from  '../assets/Carousel/Slide_4.svg'
import "./styles/LandingCarousel.css"


function LandingCarousel() {
  return (
    // <Carousel data-bs-theme="dark" controls={false} indicators={false}>
    <Carousel controls={false} className="carousel swiper">

      <Carousel.Item interval={3000}>
        <img
          src={Slide_1}
          alt="First slide"
          className="carousel-image"
        />
        <Carousel.Caption className="custom-caption">
          <h3 className="element poppins-bold carousel-title">
            Healthy Spaces, <br/>
            Better lives
          </h3>
          <p className="poppins-semibold carousel-description">
            Sleep better, work more efficiently, reduce <br/>
            stress. A healthy space means a better <br/>
            quality of life every day.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={500}>
        <img
          src={Slide_2}
          alt="Second slide"
          className="carousel-image"
        />
        <Carousel.Caption className="custom-caption">
          <h3 className="poppins-bold carousel-title">
            Your space at <br/>
            your fingertips
          </h3>
          <p className="poppins-semibold carousel-description">
            Monitor and control your living space from <br/>
            Anywhere.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={500}>
        <img
          src={Slide_3}
          alt="Third slide"
          className="carousel-image"
        />
        <Carousel.Caption className="custom-caption">
          <h3 className="poppins-bold carousel-title">
            Your haven of peace, <br/>
            our expertise
          </h3>
          <p className="poppins-semibold carousel-description">
            Building your haven of peace is our passion. <br/>
            Entrust us with your project and we&lsquo;ll <br/>
            transform your space into a true sanctuary.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={500}>
        <img
          src={Slide_4}
          alt="Fourth slide"
          className="carousel-image"
        />
        <Carousel.Caption className="custom-caption">
          <h3 className="poppins-bold carousel-title">
            From start to finish, <br/>
            we&lsquo;re with you every <br/>
            step of the way <br/>
          </h3>
          <p className="poppins-semibold carousel-description">
            From concept to completion, we help you <br/>
            create an interior that reflects your image, <br/>
            where well-being is at the heart of <br/>
            everything.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  );
}

export default LandingCarousel;