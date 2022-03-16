import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';

import Home from './components/Home';
import Feed from './components/Feed';
import PostDetails from './components/PostDetails';

function App() {

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home
          />
        }
      />
      <Route
        path="/posts"
        element={
          <Feed
          />
        }
      />
      <Route path="/posts/:postId" element={<PostDetails />} />
    </Routes>
  );
}

export default App;
