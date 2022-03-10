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
      quote: "We were on a break!",
      name: "Ross Geller",
      episode: 'The Last One',
      id: 1,
      photo: ross,
      background_image: rossBg,
      occupation: 'Paleontologist at Museum of Natural History',
      location: "Ugly Naked Guy's old apartment",
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
