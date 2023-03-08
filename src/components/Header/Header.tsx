import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

export const Header = () => {
  return (
    <header className={s.header}>
      <NavLink to={'/'}>
        <h1 className={s.header_title}>Blogger Platform</h1>
      </NavLink>
    </header>
  );
};
