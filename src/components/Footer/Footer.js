import React from 'react';
import './Footer.css'

// презентационный компонент, который отрисовывает подвал
function Footer () {
  return (
    <footer className='footer'>
      <div className='footer__info'>
        <h2 className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</h2>
        <div className='footer__container'>
        <h3 className='footer__author'>&copy; {new Date().getFullYear()}</h3>
          <nav className='footer__links'>
            <a className='footer__link' href='https://praktikum.yandex.ru/' target='/black'>Яндекс.Практикум</a>
            <a className='footer__link' href='https://github.com/bmstustudent/' target='/black'>Github</a>
            <a className='footer__link' href='https://www.facebook.com/' target='/black'>Facebook</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
