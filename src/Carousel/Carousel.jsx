import CarouselItem from "./CarouselItem";
import "./Carousel.css";

function Carousel({ images, intervalSeconds = 3 }) {
  return (
    <div className="carousel">
      {images.map((src, index) => (
        <CarouselItem
          key={index}
          src={src}
          alt={`תמונה ${index + 1}`}
        />
      ))}
    </div>
  );
}

export default Carousel;