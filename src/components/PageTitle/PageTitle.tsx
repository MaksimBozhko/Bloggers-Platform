import React from 'react';
import s from './PageTitle.module.css';
import arrowright from './../../assets/images/arrowright.svg';

type PageTitleType = {
  title: string;
  breadcrumbs?: string;
};

export const PageTitle: React.FC<PageTitleType> = ({ title, breadcrumbs }) => {
  return (
    <div className={s.pageTitle_wrapper}>
      <h3 className={s.page_title}>{title}</h3>
      {breadcrumbs && (
        <>
          <img src={arrowright} alt="breadcrumbs" />
          <div className={s.pageTitle_breadcrumbs}>{breadcrumbs}</div>
        </>
      )}
    </div>
  );
};
