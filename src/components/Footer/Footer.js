import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
    <div className="footer__container">
      <p className="footer__copyright">&copy; 2021</p>
      <ul className="footer__list">
        <li className="footer__list-item">
          <a href="https://praktikum.yandex.ru/" className="footer__link">Яндекс.Практикум</a>
        </li>
        <li className="footer__list-item">
          <a href="https://github.com/bmstustudent" className="footer__link">Github</a>
        </li>
        <li className="footer__list-item">
          <a href="https://www.facebook.com/" className="footer__link">Facebook</a>
        </li>
      </ul>
    </div>
  </footer>
);

export default Footer;
