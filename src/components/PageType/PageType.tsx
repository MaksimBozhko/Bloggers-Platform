import React from 'react';
import { BlogType } from '../../models/Blog';
import { ItemType } from '../../models/Item';
import { PostType } from '../../models/Post';
import { Blog } from '../Blog/Blog';
import { Button } from '../Button/Button';
import { PageTitle } from '../PageTitle/PageTitle';
import { Post } from '../Post/Post';
import { Select } from '../Select/Select';
import s from './PageType.module.css';

type PageTypePropsType = {
  type: 'blogs' | 'posts';
  title: string;
  value: string;
  items: ItemType[];
  setValue: (value: string) => void;
  blogs?: BlogType[];
  posts?: PostType[];
  error?: string;
};

export const PageType: React.FC<PageTypePropsType> = ({
  type,
  title,
  value,
  items,
  setValue,
  blogs,
  posts,
  error,
}) => {
  const showBlogs = blogs && blogs.map((blog) => <Blog key={blog.id} {...blog} />);
  const showPosts = posts && posts.map((post) => <Post key={post.id} postId={post.id} {...post} />);

  return (
    <>
      <PageTitle title={title} />
      {error ? (
        <div>{error}</div>
      ) : (
        <>
          <div className={s.page_container}>
            <div className={s.page_filter}>
              {type === 'blogs' && <input placeholder="Search" className={s.blogs_input__search} />}
              <Select value={value} items={items} setValue={setValue} />
            </div>
            {type === 'blogs' ? showBlogs : <div className={s.posts_wrapper}>{showPosts}</div>}
          </div>
          <div className={s.page_button}>
            <Button />
          </div>
        </>
      )}
    </>
  );
};
