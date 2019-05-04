import React from "react";
import ReactDOM from "react-dom";
import {App} from "./components/app/app.jsx";

const getRandomInteger = (min, max) => {
  let rand = min + Math.random() * (max + 1 - min);
  rand = Math.floor(rand);
  return rand;
};

const getMovieData = (data) => {
  return {
    title: data.titles[getRandomInteger(0, data.titles.length - 1)],
    picture: data.pictures[getRandomInteger(0, data.pictures.length - 1)],
  };
};

const getMoviesData = (data, count) => {
  const moviesData = [];
  for (let i = 0; i < count; i++) {
    moviesData.push(getMovieData(data));
  }
  return moviesData;
};

const init = () => {
  const settings = {
    moviesData: {
      titles: [
        `Fantastic Beasts`,
        `Bohemian Rhapsody`,
        `Macbeth`,
        `Aviator`,
        `We need to talk about Kevin`,
        `What We Do in the Shadows`,
        `Revenant`,
      ],
      pictures: [
        `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
        `img/bohemian-rhapsody.jpg`,
        `img/macbeth.jpg`,
        `img/aviator.jpg`,
        `img/we-need-to-talk-about-kevin.jpg`,
        `img/what-we-do-in-the-shadows.jpg`,
        `img/revenant.jpg`,
      ],
    },
  };

  const moviesData = getMoviesData(settings.moviesData, 10);

  ReactDOM.render(
      <App
        moviesData={moviesData}
      />,
      document.getElementById(`root`)
  );
};

init();
