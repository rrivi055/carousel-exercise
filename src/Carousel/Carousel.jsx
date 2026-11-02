import CarouselItem from "./CarouselItem";
import "./Carousel.css";

function Carousel({ images, intervalSeconds }) {
  return (
    <div className="carousel">
      <CarouselItem src={images[0]} alt="slide 1" />
    </div>
  );
}

export default Carousel;