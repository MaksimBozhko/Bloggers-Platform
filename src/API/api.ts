import axios from 'axios';


const instance = axios.create({
  //baseURL: 'https://nest-js-blogs-api-muzyk0.vercel.app/blog-platform/',
  baseURL: 'https://sprint-two-one.vercel.app/',
});

export const blogsAPI = {
  getBlogs() {
    return instance.get('blogs');
  },
  getBlog(id: string) {
    return instance.get(`blogs/${id}`)
  }
};

export const postsAPI = {
  getPosts() {
    return instance.get('posts');
  },
  getPost(id: string) {
    return instance.get(`posts/${id}`);
  },
};
