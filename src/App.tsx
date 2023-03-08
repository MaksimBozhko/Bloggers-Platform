import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Navbar } from './components/Navbar/Navbar';
import { BlogPage } from './pages/BlogPage/BlogPage';
import { Blogs } from './pages/Blogs';
import { PostPage } from './pages/PostPage/PostPage';
import { Posts } from './pages/Posts';

function App() {
  return (
    <div className="container">
      <Header />
      <div className="wrapper">
        <Navbar />
        <main>
          <Routes>
            <Route path={'/'} element={<Navigate to={'blogs'} />} />
            <Route path={'/blogs'} element={<Blogs />} />
            <Route path={'/posts'} element={<Posts />} />
            <Route path={'/blogs/:id'} element={<BlogPage />} />
            <Route path={'/posts/:id'} element={<PostPage />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
