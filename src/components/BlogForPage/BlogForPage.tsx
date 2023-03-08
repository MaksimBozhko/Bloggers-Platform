import React, { useState } from 'react';
import { BlogType } from '../../models/Blog';
import noimg from './../../assets/images/noimg.svg';
import s from './BlogForPage.module.css';
import arrow from './../../assets/images/grayarrow.svg';
import { date } from '../../assets/helpers/date';

export const BlogForPage: React.FC<BlogType> = ({
  name,
  websiteUrl,
  description,
  createdAt,
  ...restProps
}) => {
  const [showDescription, setShowDescription] = useState(false);

  const toggleHandler = () => {
    setShowDescription(!showDescription);
  };

  return (
    <div className={s.blogForPage}>
      <div className={s.blogForPage_image__blog}>
        <img className={s.blogForPage_image} src={noimg} alt={name} />
      </div>
      <div>
        <h4 className={s.blogForPage_title}>{name}</h4>
        {createdAt && (
          <div className={s.blogForPage_date}>
            Blog creation date: <span>{date(createdAt).slice(0, 10).replaceAll('/', '.')}</span>
          </div>
        )}
        <div className={s.blogForPage_website}>
          Website: <a href={`${websiteUrl}`}>{websiteUrl}</a>
        </div>
        {description && description.length > 227 && !showDescription ? (
          <div className={s.blogForPage_description__block}>
            <p className={s.blogForPage_description}>{description.slice(0, 227)}...</p>
            <div className={s.blogForPage_handler} onClick={toggleHandler}>
              Show more <img src={arrow} alt="Show more" />
            </div>
          </div>
        ) : (
          <p className={s.blogForPage_description} onClick={toggleHandler}>
            {description}
          </p>
        )}
      </div>
    </div>
  );
};
