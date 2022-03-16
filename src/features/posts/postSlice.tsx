import { createSlice, PayloadAction, nanoid, createAsyncThunk } from '@reduxjs/toolkit';
import { ReducerAction } from 'react';
import type { RootState } from '../../app/store';

interface PostsState {
  entries: Array<{ id: string, name: string, episode: string, quote: string, reactions: { likes: number, comments: number } }>
  activity: Array<{}>,
  openDrawer: Boolean,
  status: "idle" | "loading" | "failed" | "succeeded",
  error: string | null | undefined,
}

const initialState: PostsState = {
  entries: [],
  activity: [],
  openDrawer: false,
  status: 'idle',
  error: null,
}

const api = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita';

export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async () => {
    const response = await fetch(api);
    const { drinks } = await response.json();
    return drinks;
  }
)

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost: {
      reducer(state, action: PayloadAction<{ id: string, name: string, episode: string, quote: string, reactions: { likes: number, comments: number } }>) {
        state.entries.push(action.payload);
      },
      prepare(name, episode, quote) {
        return {
          payload: {
            id: nanoid(),
            name,
            episode,
            quote,
            reactions: {
              likes: 0,
              comments: 0,
            }
          }
        }
      }
    },
    updateReactions: (state, action) => {
      // update likes or comments
      const { id, reaction }: { id: string, reaction: number } = action.payload;
      const existingPost = state.entries.find(post => post.id === id);
      if (existingPost) {
        //existingPost.reactions[reaction] += 1;
      }

      state.activity.push(action.payload);
    },
    updateDrawer: state => {
      state.openDrawer = !state.openDrawer;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.entries = state.entries.concat(action.payload);
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
  }
})

export const { addPost, updateReactions, updateDrawer } = postsSlice.actions;
export default postsSlice.reducer;
