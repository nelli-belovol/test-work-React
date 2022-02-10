import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navigate.module.scss';

export default function Navigate() {
  return (
    <>
      <nav className={s.nav__container}>
        <NavLink to="/" className={s.nav__link}>
          grid
        </NavLink>
        <NavLink to="/products" className={s.nav__link}>
          list
        </NavLink>
      </nav>
    </>
  );
}
