import React from 'react';
import { NavLink } from 'react-router-dom';
import { BlogType } from '../../models/Blog';
import noimg from './../../assets/images/noimg.svg';
import s from './Blog.module.css';

export const Blog: React.FC<BlogType> = ({ id, name, websiteUrl, description, ...restProps }) => {
  return (
    <div className={s.blog_wrapper}>
      <NavLink to={`/blogs/${id}`} className={s.blog_photo}>
        <img src={noimg} alt="blog" />
      </NavLink>
      <div className={s.blog_description__block}>
        <NavLink to={`/blogs/${id}`} className={s.blog_description__titleLink}>
          <h4 className={s.blog_description__title}>{name}</h4>
        </NavLink>
        <div className={s.blog_description__website}>
          Website: <a href={`${websiteUrl}`}>{websiteUrl}</a>
        </div>
        <div className={s.blog_description}>
          {description.length > 227 ? `${description.slice(0, 227)}...` : description}
        </div>
      </div>
    </div>
  );
};
