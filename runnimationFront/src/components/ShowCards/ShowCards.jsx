import React from 'react'
import './ShowCard.css'

function ShowCard({ show }) {
  return (
    <div className="show-card-wrapper">
      <div className="show-card">
        <img src={show.posterUrl} alt={show.title} className="show-card__poster" />

        <div className="show-card__overlay">
          <h3 className="show-card__title">{show.title}</h3>
          <span className="show-card__duration">{show.duration}</span>
          <p className="show-card__synopsis">{show.synopsis}</p>
        </div>
      </div>
    </div>
  );
}

export default ShowCard;