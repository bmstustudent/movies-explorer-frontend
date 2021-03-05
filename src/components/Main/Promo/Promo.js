import React from 'react';
import './Promo.css';

// компонент с вёрсткой баннера страницы «О проекте».
function Promo() {
  return (
    <section className='promo'>
      <div className='promo__container'>
        <h1 className='promo__container_title'>Учебный проект студента факультета Веб-разработки</h1>
        <div className='promo__container_button'>
        <a href="#about-project">
          <button className='promo__button'>О проекте</button>
        </a>
        <a href='#techs'>
          <button className='promo__button'>Технологии</button>
        </a>
        <a href='#about-me'>
          <button className='promo__button'>Студент</button>
        </a>
        </div>
      </div>
    </section>
  );
}

export default Promo;
