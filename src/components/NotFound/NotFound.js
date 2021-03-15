import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return(
    <section className='not-found'>
      <h1 className='not-found__error'>404</h1>
      <h2 className='not-found__text'>Страница не найдена</h2>
      <Link className='not-found__link' to='/'>Назад</Link>
    </section>
  )
}

export default NotFound;
