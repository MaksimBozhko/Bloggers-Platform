import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { postsAPI } from '../../API/api';
import { PostType } from '../../models/Post';
type PostStateType = {
  // page: number,
  // pageSize: number,
  // totalCount: number,
  // pagesCount: number,
  loading: boolean;
  error: string;
  posts: PostType[];
  post: PostType;
};

export type FetchError = {
  message: string;
};

const initialState: PostStateType = {
  loading: false,
  error: '',
  posts: [],
  post: {} as PostType,
};

export const getPosts = createAsyncThunk<PostType[], undefined, { rejectValue: FetchError }>('blogs/getPosts', async (_, { rejectWithValue }) => {
  try {
    const res = await postsAPI.getPosts();
    return res.data.items;
  } catch (e) {
    return rejectWithValue({ message: 'Ошибка при получении постов.' });
  }
});

export const getPost = createAsyncThunk<PostType, string, { rejectValue: FetchError }>(
  'blogs/getPost',
  async (id, { rejectWithValue }) => {
    try {
      const res = await postsAPI.getPost(id);
      return res.data;
    } catch (e) {
      return rejectWithValue({ message: 'Ошибка при получении поста.' });
    }
  },
);

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {},
  extraReducers: {
    [getPosts.fulfilled.type]: (state, action: PayloadAction<PostType[]>) => {
      state.loading = false;
      state.error = '';
      state.posts = action.payload;
    },
    [getPosts.pending.type]: (state) => {
      state.loading = true;
    },
    [getPosts.rejected.type]: (state, action: PayloadAction<FetchError>) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [getPost.fulfilled.type]: (state, action: PayloadAction<PostType>) => {
      state.loading = false;
      state.error = '';
      state.post = action.payload;
    },
    [getPost.pending.type]: (state) => {
      state.loading = true;
    },
    [getPost.rejected.type]: (state, action: PayloadAction<FetchError>) => {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});

// export const {} = postSlice.actions;

export default postSlice.reducer;
