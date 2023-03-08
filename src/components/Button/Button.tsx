import React from 'react';
import s from './Button.module.css';
import arrow from './../../assets/images/arrow.svg';

export const Button = () => {
  return <button className={s.button}>Show more <img src={arrow} alt='arrow'/></button>;
};
