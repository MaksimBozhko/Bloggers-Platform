import React, { useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { date } from '../../assets/helpers/date';
import GoBackButton from '../../components/GoBackButton/GoBackButton';
import { PageTitle } from '../../components/PageTitle/PageTitle';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { getPost } from '../../store/reducers/postSlice';

import noimg from './../../assets/images/noimg.svg';
import s from './PostPage.module.css';

export const PostPage = () => {
  const { post, loading, error } = useAppSelector((state) => state.postReducer);
  const dispatch = useAppDispatch();
  const { id } = useParams();
  useEffect(() => {
    id && dispatch(getPost(id));
  }, [dispatch, id]);

  if (loading) {
    return <div style={{ height: '100vh' }}>Загрузка...</div>;
  }
  return (
    <div className={s.postPage}>
      <PageTitle title={'Posts'} breadcrumbs={post.blogName} />
      <div className={s.postPage_container}>
        {error && <div>{error}</div>}
        <GoBackButton title={'Back to posts'} />
        <NavLink to={`/blogs/${post.blogId}`} className={s.postPage_linkToBlog} >
          <div className={s.postPage_linkToBlog__imgBlock}>
            <img className={s.postPage_linkToBlog__img} src={noimg} alt={`${post.blogName}`} />
          </div>
          {post.blogName}
        </NavLink>
        <div className={s.postPage_titleBlock}>
          <h3 className={s.postPage_title}>{post.title}</h3>
          <span className={s.postPage_additionally}>(for public posts)</span>
        </div>
        {post && post.createdAt && (
          <div className={s.postPage_date}>{date(post.createdAt).replace(',', ' at')}</div>
        )}
        <div className={s.postPage_photo}>
          <img className={s.postPage_photo__img} src={noimg} alt={'avatar'} />
        </div>
        {post && post.content && (
          <p className={s.postPage_content}>{post.content.replaceAll('. ', '.\n\n')}</p>
        )}
      </div>
    </div>
  );
};
