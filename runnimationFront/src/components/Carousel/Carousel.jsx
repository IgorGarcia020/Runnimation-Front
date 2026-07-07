import { useRef } from "react";
import ShowCard from "../ShowCards/ShowCards";
import "./Carousel.css";

function Carousel({ title, shows }) {
  const trackRef = useRef(null);

  const scroll = (direction) => {
    trackRef.current.scrollBy({
      left: direction === "right" ? 600 : -600,
      behavior: "smooth",
    });
  };

  return (
    <section className="carousel-section">
      <h2 className="carousel-title">{title}</h2>
      <div className="carousel-row">
        <button className="carousel-arrow carousel-arrow--left" onClick={() => scroll("left")}>‹</button>
        <div className="carousel-track" ref={trackRef}>
          {shows.map((show) => (
            <ShowCard key={show.id} show={show} />
          ))}
        </div>
        <button className="carousel-arrow carousel-arrow--right" onClick={() => scroll("right")}>›</button>
      </div>
    </section>
  );
}

export default Carousel;
