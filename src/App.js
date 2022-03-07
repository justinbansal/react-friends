import {Routes, Route } from 'react-router-dom';

import './App.css';

import ross from './ross.jpeg';
import rossBg from './ross-bg.jpeg';
import monica from './monica.jpeg';
import monicaBg from './monica-bg.jpeg';
import chandler from './chandler.jpg';
import chandlerBg from './chandler-bg.jpeg';

import Home from './components/Home';
import Feed from './components/Feed';
import PostDetails from './components/PostDetails';

function App() {
  const data = [
    {
      message: "We were on a break!",
      author: "Ross Geller",
      id: 1,
      photo: ross,
      background_image: rossBg,
    },
    {
      message: "And I have to live with a boy!",
      author: "Monica Geller",
      id: 2,
      photo: monica,
      background_image: monicaBg,
    },
    {
      message: "Hi, I’m Chandler. I make jokes when I’m uncomfortable.",
      author: "Chandler Bing",
      id: 3,
      photo: chandler,
      background_image: chandlerBg,
    }
  ]

  return (
    <Routes>
      <Route path="/" element={<Home posts={data}/>} >
        <Route path="/posts" element={<Feed posts={data}/>} />
      </Route>
      <Route path="/posts/:postId" element={<PostDetails posts={data} />} />
    </Routes>
  );
}

export default App;
