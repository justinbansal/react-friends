import React from "react";

import Header from './Header';
import Feed from './Feed';
import Footer from './Footer';

function Posts(props) {
  return (
    <div className="App">
      <Header title="My Feed"/>
      <Feed posts={props.posts}></Feed>
      <Footer info="Fun with Friends 2022"></Footer>
    </div>
  )
}

export default Posts;
