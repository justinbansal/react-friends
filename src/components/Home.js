import React from "react";
import { Outlet } from "react-router-dom";

import Header from './Header';
import Footer from './Footer';

function Home(props) {
  return (
    <div className="App">
      <Header
        title="Fun with Friends"
        likes={props.likes}
        insights={props.insights}
        log={props.log}
      />
      <h2>👋🏽 Welcome to Fun with Friends</h2>
      <p>🪝Featuring Functional Components and React Hooks</p>
      <p>💅🏽 Styled using styled-components</p>
      <p>🧭 Navigation with React Router@6</p>
      <Outlet />
      <Footer info="Fun with Friends 2022"></Footer>
    </div>
  )
}

export default Home;
