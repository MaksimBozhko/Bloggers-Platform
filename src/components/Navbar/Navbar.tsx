import React, { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as BlogsIcon } from './../../assets/images/blogsIcon.svg';
import { ReactComponent as PostsIcon } from './../../assets/images/postsIcon.svg';
import s from './Navbar.module.css';

type IsActiveClassType = {
  isActive: ReactNode;
};

export const Navbar = () => {
  const isActiveClass = ({ isActive }: IsActiveClassType) => (isActive ? ' ' + s.activeLink : ' ');
  return (
    <nav className={s.nav}>
      <NavLink className={isActiveClass} to="/blogs">
        <div className={s.nav_itemBlock}>
          <BlogsIcon className={s.nav_img} />
          Blogs
        </div>
        <span />
      </NavLink>
      <NavLink className={isActiveClass} to="/posts">
        <div className={s.nav_itemBlock}>
          <PostsIcon className={s.nav_img} />
          Posts
        </div>
        <span />
      </NavLink>
    </nav>
  );
};
