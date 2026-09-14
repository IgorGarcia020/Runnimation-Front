import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import "./Banner.css";
import { useNavigate } from "react-router-dom";
function Banner({ shows }) {
  const [i, setIndex] = useState(0);
  const navigate = useNavigate(); // 👈 se llama acá arriba, no dentro de seeInfo

  useEffect(() => {
    const time = setInterval(() => {
      setIndex((j) => (j + 1) % shows.length);
    }, 6000);

    return () => clearInterval(time);
  }, [shows.length]);

  const goPrev = () => {
    setIndex((j) => (j - 1 + shows.length) % shows.length);
  };

  const goNext = () => {
    setIndex((j) => (j + 1) % shows.length);
  };

  const show = shows[i];

  const seeInfo = () => {navigate("/info");}
  return (
    <div
      className="hero-banner"
      style={{ backgroundImage: `url(${show.backdrop})` }}
    >
      <Button className="hero-arrow hero-arrow-left" onClick={goPrev}>
        ‹
      </Button>
      <Button className="hero-arrow hero-arrow-right" onClick={goNext}>
        ›
      </Button>

      <div className="hero-overlay">
        <span className="hero-badge">{show.type}</span>
        <h1 className="hero-title">{show.title}</h1>
        <p className="hero-synopsis">{show.synopsis}</p>
        <div className="hero-actions">
          <button className="button-look" onClick={seeInfo}>Ver Datos</button>
          <button className="button-watchlist">
            <img src="/plus.svg" />
          </button>
        </div>
      </div>
      <div className="hero-dots">
        {shows.map((_,idx)=> (
          <span
          key={idx}
          className={`hero-dot ${idx === i ? "active" : ""}`}
          onClick={()=>setIndex(idx)}
          />

        ))}
      </div>
    </div>
  );
}
export default Banner;
