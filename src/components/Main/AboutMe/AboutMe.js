import React from 'react';
import './AboutMe.css';
import me from '../../../images/me.jpg'

// компонент с информацией о студенте
function AboutMe() {
  return (
    <section className='aboutMe' id='about-me'>
      <h2 className='aboutMe__title'>Студент</h2>
      <div className='aboutMe__container'>
        <div className='aboutMe__info'>
          <h3 className='aboutMe__name'>Виталий</h3>
          <h4 className='aboutMe__profession'>Фронтенд-разработчик, 30 лет</h4>
          <p className='abourMe__text'>
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
            и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С
            2015 года работал в компании «СКБ Контур». После того, как прошёл курс по
            веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <div className='aboutMe__links'>
            <a className='aboutMe__link' href='https://github.com/bmstustudent/' target='/blank'>Github</a>
            <a className='aboutMe__link' href='https://www.facebook.com/shults.msk' target='/blank'>Facebook</a>
          </div>
        </div>
        <img className='aboutMe__photo' src={me} alt='фото профиля'></img>
      </div>
    </section>
  );
}

export default AboutMe;
