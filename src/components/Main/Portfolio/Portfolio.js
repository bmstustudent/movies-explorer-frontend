import React from 'react';
import './Portfolio.css'
import arrowImg from '../../../images/arrow.svg'

// компонент со ссылками на другие проекты
function Portfolio() {
  return (
    <section className='portfolio'>
      <h2 className='portfolio__title'>Портфолио</h2>
      <div className='portfolio__links'>
        <a href='https://bmstustudent.github.io/how-to-learn/' className='portfolio__link' target='/blank'>Статичный сайт<img src={arrowImg} alt='Стрелка'></img></a>
        <a href='https://bmstustudent.github.io/russian-travel/' className='portfolio__link' target='/blank'>Адаптивный сайт<img src={arrowImg} alt='Стрелка'></img></a>
        <a href='https://mestobm.students.nomoreparties.xyz/' className='portfolio__link' target='/blank'>Одностраничное приложение<img src={arrowImg} alt='Стрелка'></img></a>
      </div>
    </section>
  )
}

export default Portfolio;
