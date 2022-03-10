import { createSlice } from '@reduxjs/toolkit';
import ross from '../../ross.jpeg';
import rossBg from '../../ross-bg.jpeg';
import monica from '../../monica.jpeg';
import monicaBg from '../../monica-bg.jpeg';
import chandler from '../../chandler.jpg';
import chandlerBg from '../../chandler-bg.jpeg';

export const postsSlice = createSlice({
  name: 'posts',
  initialState: [
    {
      message: "We were on a break!",
      author: "Ross Geller",
      id: 1,
      photo: ross,
      background_image: rossBg,
      occupation: 'Paleontologist at Museum of Natural History',
      location: "Ugly Naked Guy's old apartment",
    },
    {
      message: "And I have to live with a boy!",
      author: "Monica Geller",
      id: 2,
      photo: monica,
      background_image: monicaBg,
      occupation: 'Head chef at Javu',
      location: 'Apartment 20',
    },
    {
      message: "Hi, I’m Chandler. I make jokes when I’m uncomfortable.",
      author: "Chandler Bing",
      id: 3,
      photo: chandler,
      background_image: chandlerBg,
      occupation: 'Statistical analysis and data reconfiguration',
      location: 'Apartment 19',
    }
  ],
  reducers: {
    addPost: (state, action) => {
      state.push(action.payload);
    }
  }
})

export const { addPost } = postsSlice.actions;
export default postsSlice.reducer;
