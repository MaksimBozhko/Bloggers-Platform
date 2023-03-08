import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { BlogForPage } from '../../components/BlogForPage/BlogForPage';
import { Button } from '../../components/Button/Button';
import GoBackButton from '../../components/GoBackButton/GoBackButton';
import { PageTitle } from '../../components/PageTitle/PageTitle';
import { Post } from '../../components/Post/Post';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { getBlog } from '../../store/reducers/blogSlice';
import { getPosts } from '../../store/reducers/postSlice';
import noimg from './../../assets/images/noimg.svg';
import s from './BlogPage.module.css';

export const BlogPage = () => {
  const { blog, loading, error } = useAppSelector((state) => state.blogReducer);
  const { posts } = useAppSelector((state) => state.postReducer);
  const dispatch = useAppDispatch();
  const { id } = useParams();

  useEffect(() => {
    id && dispatch(getBlog(id));
  }, [dispatch, id]);

  useEffect(() => {
    id && dispatch(getPosts());
  }, [dispatch, id]);

  const blogPosts = posts && posts.length > 0 && posts.filter((p) => p.blogId === id);

  const blogPostsMap =
    blogPosts && blogPosts.length > 0
      ? blogPosts.map((p) => <Post key={p.id} postId={p.id} {...p} />)
      : 'пусто)';

  if (loading) {
    return <div style={{ height: '100vh' }}>Загрузка...</div>;
  }

  return (
    <div className={s.blogPage}>
      <PageTitle title={'Blogs'} breadcrumbs={blog.name} />
      {error && <div>{error}</div>}
      <GoBackButton title={'Back to blogs'} />
      <div className={s.blogPage_background}>
        <img className={s.blogPage_background__image} src={noimg} alt="blog background" />
      </div>
      <div className={s.blogPage_container}>
        <BlogForPage {...blog} />
        <div className={s.blogPage_posts}>
          {blogPostsMap}
        </div>
      </div>
      <div className={s.blogPage_button}>
        <Button />
      </div>
    </div>
  );
};
