import {useState} from 'react';
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

  // Notifications gets total number of notifications
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


  const [likes, setLikes] = useState(0);
  const data = [
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
  ]

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home
            posts={data}
            likes={likes}
            insights={insights}
            log={log}
          />
        }
      >
        <Route
          path="/posts"
          element={
            <Feed
              posts={data}
              setLikes={setLikes}
              likes={likes}
              insights={insights}
              setInsights={setInsights}
              log={log}
              setLog={setLog}
            />
          }
        />
      </Route>
      <Route path="/posts/:postId" element={<PostDetails posts={data} />} />
    </Routes>
  );
}

export default App;
