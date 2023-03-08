import React, { useEffect, useState } from 'react';
import { PageType } from '../components/PageType/PageType';

import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { ItemType } from '../models/Item';
import { getBlogs } from '../store/reducers/blogSlice';

export const Blogs = () => {
  const { blogs, loading, error } = useAppSelector((state) => state.blogReducer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getBlogs());
  }, [dispatch]);

  let items: ItemType[] = [
    { value: '1', title: 'New blogs first' },
    { value: '2', title: 'Old blogs first' },
    { value: '3', title: 'From A to Z' },
    { value: '4', title: 'From Z to A' },
  ];
  let [value, setValue] = useState('1');

  if(loading) {
    return <div style={{height: '100vh'}}>Загрузка...</div>
  }

  return <PageType type={'blogs'} title={'Blogs'} value={value} setValue={setValue} items={items} blogs={blogs} error={error}/>
};
