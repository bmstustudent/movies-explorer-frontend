import React from 'react';
import './Promo.css';

const Promo = () => (
  <section className="promo">
    <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
    <a href="#about-project">
    <button className="nav-tab">О проекте</button>
  </a>
  <a href="#techs">
    <button className="nav-tab">Технологии</button>
  </a>
  <a href="#student">
    <button className="nav-tab">Студент</button>
  </a>
  </section>
);

export default Promo;
