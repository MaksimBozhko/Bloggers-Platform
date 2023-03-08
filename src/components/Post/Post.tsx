import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { date } from '../../assets/helpers/date';
import noimg from './../../assets/images/noimg.svg';
import s from './Post.module.css';
type PostType = {
  postId: string;
  title: string;
  blogName: string;
  createdAt: string;
  shortDescription: string;
};

export const Post: React.FC<PostType> = ({
  postId,
  title,
  blogName,
  createdAt,
  shortDescription,
  ...restProps
}) => {
  const { id } = useParams();

  return (
    <NavLink to={`/posts/${postId}`} className={s.post_wrapper}>
      <div className={s.post_photo}>
        <img src={noimg} alt="post" />
      </div>
      <div className={s.post_description}>
        {!id && <div className={s.post_smallImg}>
          <img className={s.post_smallImg_photo} src={noimg} alt="blog" />
        </div>}
        <div>
          <h4 className={s.post_description__title}>{title}</h4>
          {id ? (
            <p className={s.post_description__shortDescription}>{shortDescription}</p>
          ) : (
            <div className={s.post_description__blogName}>{blogName}</div>
          )}

          {createdAt && (
            <div className={s.post_description__date}>
              {date(createdAt).slice(0, 10).replaceAll('/', '.')}
            </div>
          )}
        </div>
      </div>
    </NavLink>
  );
};
