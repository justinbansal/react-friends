import {useState} from 'react';
import {Routes, Route } from 'react-router-dom';

import './App.css';

import Home from './components/Home';
import Feed from './components/Feed';
import PostDetails from './components/PostDetails';

function App() {
  const postInsights = [
    {
      id: 1,
      author: "Ross Geller",
      likes: 0,
      comments: 0
    },
    {
      id: 2,
      author: "Monica Geller",
      likes: 0,
      comments: 0
    },
    {
      id: 3,
      author: "Chandler Bing",
      likes: 0,
      comments: 0
    },
  ];

  const [insights, setInsights] = useState(postInsights);
  const [log, setLog] = useState([]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home
            insights={insights}
            log={log}
          />
        }
      />
        <Route
          path="/posts"
          element={
            <Feed
              insights={insights}
              setInsights={setInsights}
              log={log}
              setLog={setLog}
            />
          }
        />
      <Route path="/posts/:postId" element={<PostDetails />} />
    </Routes>
  );
}

export default App;
