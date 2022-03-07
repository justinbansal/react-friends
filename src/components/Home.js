import React from "react";

import Header from './Header';
import Feed from './Feed';
import Footer from './Footer';

function Home(props) {
  return (
    <div className="App">
      <Header title="Fun with Friends"/>
      <h2>👋🏽 Welcome to Fun with Friends</h2>
      <p>🪝Featuring Functional Components and React Hooks</p>
      <p>💅🏽 Styled using styled-components</p>
      <p>🧭 Navigation with React Router@6</p>
      <Feed posts={props.posts}></Feed>
      <Footer info="Fun with Friends 2022"></Footer>
    </div>
  )
}

export default Home;
