import { createSlice, nanoid, createAsyncThunk } from '@reduxjs/toolkit';
import ross from '../../ross.jpeg';
import rossBg from '../../ross-bg.jpeg';
import monica from '../../monica.jpeg';
import monicaBg from '../../monica-bg.jpeg';
import chandler from '../../chandler.jpg';
import chandlerBg from '../../chandler-bg.jpeg';

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
  initialState: {
    entries: [],
    activity: [],
    openDrawer: false,
    status: 'idle',
    error: null,
  },
  reducers: {
    addPost: {
      reducer(state, action) {
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
      const { id, reaction, message } = action.payload;
      const existingPost = state.entries.find(post => post.id === id);
      if (existingPost) {
        existingPost.reactions[reaction] += 1;
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
