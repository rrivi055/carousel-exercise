import { useState, useEffect } from "react";
import CarouselItem from "./CarouselItem";
import "./Carousel.css";

function Carousel({ images, intervalSeconds = 3 }) {
  const [selected, setSelected] = useState(0);

  function move(step) {
    setSelected(prev => (prev + step + images.length) % images.length);
  }

  useEffect(() => {
    console.log("טיימר התחיל, תמונה:", selected);

    const timerId = setTimeout(() => {
      setSelected(prev => (prev + 1) % images.length);
    }, intervalSeconds * 1000);

    return () => {
      console.log("טיימר בוטל, תמונה:", selected);
      clearTimeout(timerId);
    };
  }, [selected, intervalSeconds, images.length]);

  return (
    <div className="carousel">
      {images.map((src, index) =>
        index === selected && (
          <CarouselItem
            key={index}
            src={src}
            alt={`תמונה ${index + 1}`}
          />
        )
      )}

      <button className="carousel-arrow prev" onClick={() => move(-1)}>
        ‹
      </button>
      <button className="carousel-arrow next" onClick={() => move(1)}>
        ›
      </button>

      <div className="carousel-dots">
        {images.map((_, index) => (
          <button
            key={index}
            className={index === selected ? "carousel-dot active" : "carousel-dot"}
            onClick={() => setSelected(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;