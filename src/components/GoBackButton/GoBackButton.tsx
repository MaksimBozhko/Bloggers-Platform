import React from 'react';
import s from './GoBackButton.module.css';
import arrowleft from './../../assets/images/arrowleft.svg';
import { useNavigate } from 'react-router-dom';
type GoBackButtonType = {
  title: string;
};

export const GoBackButton: React.FC<GoBackButtonType> = ({ title }) => {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);
  return (
    <button className={s.goBack_button} onClick={goBack}>
      <img className={s.goBack_button__img} src={arrowleft} alt={`${title}`} />
      {title}
    </button>
  );
};

export default GoBackButton;
