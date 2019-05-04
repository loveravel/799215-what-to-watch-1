import React from "react";
import PropTypes from "prop-types";

MovieCard.propTypes = {
  movieData: PropTypes.object.isRequired
};

export const MovieCard = (props) => {
  const {movieData} = props;

  return (
    <article className="small-movie-card catalog__movies-card">
      <button className="small-movie-card__play-btn" type="button">Play</button>
      <div className="small-movie-card__image">
        <img src={movieData.picture} alt="Fantastic Beasts: The Crimes of Grindelwald" width="280" height="175"/>
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">{movieData.title}</a>
      </h3>
    </article>
  );
};
