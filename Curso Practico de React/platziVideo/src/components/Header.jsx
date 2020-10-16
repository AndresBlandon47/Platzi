import React from 'react';
import './Header.scss';
import logo from '../assets/logo-platzi-video-BW2.png';
import usuarioImg from '../assets/user_icon.png';

const Header = () => (
  <header className='header'>
    <img className='header__img' src={logo} alt='logo' />
    <div className='header__menu'>
      <div className='header__menu--profile'>
        <img src={usuarioImg} alt='usuario' />
        <p>Perfil</p>
      </div>
      <ul>
        <li><a href='/'>Cuenta</a></li>
        <li><a href='/'>Perfil</a></li>
      </ul>
    </div>
  </header>
);

export default Header;

