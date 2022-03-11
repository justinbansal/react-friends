import { createSlice, nanoid } from '@reduxjs/toolkit';
import ross from '../../ross.jpeg';
import rossBg from '../../ross-bg.jpeg';
import monica from '../../monica.jpeg';
import monicaBg from '../../monica-bg.jpeg';
import chandler from '../../chandler.jpg';
import chandlerBg from '../../chandler-bg.jpeg';

export const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    entries: [
      {
        quote: "We were on a break!",
        name: "Ross Geller",
        episode: 'The Last One',
        id: 1,
        photo: ross,
        background_image: rossBg,
        occupation: 'Paleontologist at Museum of Natural History',
        location: "Ugly Naked Guy's old apartment",
        reactions: {
          likes: 0,
          comments: 0,
        }
      },
      {
        quote: "And I have to live with a boy!",
        name: "Monica Geller",
        episode: 'The One With All the Wedding Dresses',
        id: 2,
        photo: monica,
        background_image: monicaBg,
        occupation: 'Head chef at Javu',
        location: 'Apartment 20',
        reactions: {
          likes: 0,
          comments: 0,
        }
      },
      {
        quote: "Hi, I’m Chandler. I make jokes when I’m uncomfortable.",
        name: "Chandler Bing",
        episode: 'The One That Could Have Been',
        id: 3,
        photo: chandler,
        background_image: chandlerBg,
        occupation: 'Statistical analysis and data reconfiguration',
        location: 'Apartment 19',
        reactions: {
          likes: 0,
          comments: 0,
        }
      }
    ],
    activity: [],
    openDrawer: false,
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
  }
})

export const { addPost, updateReactions, updateDrawer } = postsSlice.actions;
export default postsSlice.reducer;
