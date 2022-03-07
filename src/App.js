import {Routes, Route, Link } from 'react-router-dom';

import './App.css';

import ross from './ross.jpeg';
import monica from './monica.jpeg';
import chandler from './chandler.jpg';

import Home from './components/Home';
import Posts from './components/Posts';
import Post from './components/Post';

function App() {
  const data = [
    {
      message: "We were on a break!",
      author: "Ross Geller",
      id: 1,
      photo: ross,
    },
    {
      message: "And I have to live with a boy!",
      author: "Monica Geller",
      id: 2,
      photo: monica,
    },
    {
      message: "Hi, I’m Chandler. I make jokes when I’m uncomfortable.",
      author: "Chandler Bing",
      id: 3,
      photo: chandler,
    }
  ]

  return (
    <Routes>
      <Route path="/" element={<Home posts={data}/>} />
      <Route path="/posts" element={<Posts posts={data}/>} />
      <Route path="/posts/:postId" element={<Post posts={data}/>} />
    </Routes>
  );
}

export default App;
