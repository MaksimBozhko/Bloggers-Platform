import { blogsAPI } from './../../API/api';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BlogType } from '../../models/Blog';
import { FetchError } from './postSlice';

type BlogStateType = {
  // page: number,
  // pageSize: number,
  // totalCount: number,
  // pagesCount: number,
  loading: boolean;
  error: string;
  blogs: BlogType[];
  blog: BlogType;
};

const initialState: BlogStateType = {
  loading: false,
  error: '',
  blogs: [],
  blog: {} as BlogType,
};

export const getBlogs = createAsyncThunk<BlogType[], undefined, { rejectValue: FetchError }>(
  'blogs/getBlogs',
  async (_, { rejectWithValue }) => {
    try {
      const res = await blogsAPI.getBlogs();
      return res.data.items;
    } catch {
      return rejectWithValue({ message: 'Ошибка при получении блогов.' });
    }
  },
);

export const getBlog = createAsyncThunk<BlogType, string, { rejectValue: FetchError }>(
  'blogs/getBlog',
  async (id, { rejectWithValue }) => {
    try {
      const res = await blogsAPI.getBlog(id);
      return res.data;
    } catch {
      return rejectWithValue({ message: 'Ошибка при получении блога.' });
    }
  },
);

export const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {},
  extraReducers: {
    [getBlogs.fulfilled.type]: (state, action: PayloadAction<BlogType[]>) => {
      state.loading = false;
      state.error = '';
      state.blogs = action.payload;
    },
    [getBlogs.pending.type]: (state) => {
      state.loading = true;
    },
    [getBlogs.rejected.type]: (state, action: PayloadAction<FetchError>) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [getBlog.fulfilled.type]: (state, action: PayloadAction<BlogType>) => {
      state.loading = false;
      state.error = '';
      state.blog = action.payload;
    },
    [getBlog.pending.type]: (state) => {
      state.loading = true;
    },
    [getBlog.rejected.type]: (state, action: PayloadAction<FetchError>) => {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});

// export const {  } = blogSlice.actions

export default blogSlice.reducer;
