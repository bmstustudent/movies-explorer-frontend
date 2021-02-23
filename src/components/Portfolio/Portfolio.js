import React from 'react';
import './Portfolio.css';

const Portfolio = () => (
  <div className="portfolio">
    <h3 className="portfolio__title">Портфолио</h3>
    <ul className="portfolio__list">
      <li className="portfolio__list-item">
        <a className="portfolio__link" href="https://bmstustudent.github.io/how-to-learn/">Статичный сайт</a>
      </li>
      <li className="portfolio__list-item">
        <a className="portfolio__link" href="https://bmstustudent.github.io/russian-travel/">Адаптивный сайт</a>
      </li>
      <li className="portfolio__list-item">
        <a className="portfolio__link" href="https://mestobm.students.nomoreparties.xyz/">Одностраничное приложение</a>
      </li>
    </ul>
  </div>
);

export default Portfolio;
