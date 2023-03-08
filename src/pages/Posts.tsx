import React, { useEffect, useState } from 'react';
import { PageType } from '../components/PageType/PageType';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { ItemType } from '../models/Item';
import { getPosts } from '../store/reducers/postSlice';

export const Posts = () => {
  const { posts, loading, error } = useAppSelector((state) => state.postReducer);
  const dispatch = useAppDispatch();
  let items: ItemType[] = [
    { value: '1', title: 'New posts first' },
    { value: '2', title: 'Old posts first' },
  ];
  let [value, setValue] = useState('1');

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  
if(loading) {
  return <div style={{height: '100vh'}}>Загрузка...</div>
}


  return <PageType type={'posts'} title={'Posts'} value={value} setValue={setValue} items={items} posts={posts} error={error}/>;
};
