import Welcomeback from "../assets/flyers/Copy of Welcome Back Sp2024 (1).png";
import History from "../assets/flyers/Copy of NW Show Flyer F23.png";
import WestCoast from "../assets/flyers/West-Coast-Showcase-F23-Flyer.jpg";
import Carousel from "react-bootstrap/Carousel";

function ImgCarousel() {
  return (
    <Carousel id="carousel">
      <Carousel.Item>
        <img src={Welcomeback} />
      </Carousel.Item>
      <Carousel.Item>
        <img src={History} />
      </Carousel.Item>
      <Carousel.Item>
        <img src={WestCoast} />
      </Carousel.Item>
    </Carousel>
  );
}

export default ImgCarousel;
