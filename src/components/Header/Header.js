import React from 'react';
import { Switch, Route, Link, NavLink } from 'react-router-dom';
import { Dimensions } from 'react-native';
import './Header.css'

import logo from '../../images/logo.svg';

import Navigation from '../Navigation/Navigation';
import GamburgerMenu from '../GamburgerMenu/GamburgerMenu';

// компонент, который отрисовывает шапку сайта на страницу
function Header() {
  const windowWidth = Dimensions.get('window').width;

  return (
    <header className='header'>
      <Switch>

        <Route exact path='/'>
          <div className='header__main-container'>
            <Link to='/'><img className='header__logo' src={logo} alt='Логотип'></img></Link>
            <div className='header__btns_container'>
              <NavLink to='/signup' className='header__register'>Регистрация</NavLink>
              <NavLink to='/signin' className='header__login'>Войти</NavLink>
            </div>
          </div>
        </Route>

        <Route exact path='/signup'>
          <div className='header__sign-container'>
            <Link to='/'><img className='header__logo' src={logo} alt='Логотип'></img></Link>
            <h1 className='header__sign-title_text'>Добро пожаловать!</h1>
          </div>
        </Route>

        <Route exact path='/signin'>
          <div className='header__sign-container'>
            <Link to='/'><img className='header__logo' src={logo} alt='Логотип'></img></Link>
            <h1 className='header__sign-title_text'>Рады видеть!</h1>
          </div>
        </Route>

        <Route exact path='/movies'>
          <div className='header__profile-container'>
            <Link to='/'><img className='header__logo' src={logo} alt='Логотип'></img></Link>
            <Navigation />
            {
              (windowWidth === 1279 || windowWidth < 1279)
                ? <GamburgerMenu />
                : <NavLink to='/profile' className='gamburger-menu__link_btn'></NavLink>
            }
          </div>
        </Route>

        <Route exact path='/saved-movies'>
          <div className='header__profile-container'>
            <Link to='/'><img className='header__logo' src={logo} alt='Логотип'></img></Link>
            <Navigation />
            {
              (windowWidth === 1279 || windowWidth < 1279)
                ? <GamburgerMenu />
                : <NavLink to='/profile' className='gamburger-menu__link_btn'></NavLink>
            }
          </div>
        </Route>

        <Route exact path='/profile'>
          <div className='header__profile-container'>
            <Link to='/'><img className='header__logo' src={logo} alt='Логотип'></img></Link>
            <Navigation />
            {
              (windowWidth === 1279 || windowWidth < 1279)
                ? <GamburgerMenu />
                : <NavLink to='/profile' className='gamburger-menu__link_btn'></NavLink>
            }
          </div>
        </Route>

      </Switch>
    </header>
  )
}

export default Header;
