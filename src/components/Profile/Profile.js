import React from 'react';
import { NavLink } from 'react-router-dom';

import './Profile.css';

// компонент страницы изменения профиля
function Profile () {
  return (
    <section className='profile'>
      <h1 className='profile__greeting-title'>Привет, пользователь!</h1>
      <div className='profile__info'>
        <p className='profile__info_text' placeholder='Введите имя' pattern="[A-Z0-9a-zА-Яа-яЁё -]{1,}">Имя</p>
        <p className='profile__info_user'>Name</p>
      </div>
        <div className='profile__info_line'></div>
      <div className='profile__info'>
        <p className='profile__info_text' placeholder='Введите почту' pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$">Почта</p>
        <p className='profile__info_user'>check</p>
      </div>
        <button className='profile__edit-btn'>Редактировать</button>
        <NavLink to='/' className='profile__signout-btn'>Выйти из аккаунта</NavLink>
    </section>
  )
}

export default Profile;
