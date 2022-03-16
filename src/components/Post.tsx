import React, { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom';
import styled from "styled-components";

import Comment from "./Comment";
import ProfilePhoto from './ProfilePhoto';
import CommentButton from './CommentButton';
import LikeButton from './LikeButton';
import BackButton from "./BackButton";
import ViewCommentsButton from "./ViewCommentsButton";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const StyledPost = styled.div`
  padding: 2em;
  margin: 1em;
  flex: 1 1 400px;
  background: dodgerblue;
  color: white;
  border-radius: 10px;
  text-align: center;
`

interface Post {
  posts: any[],
}

function Post(props: any) {
  const [comments, addComment] = useState<Array<number>>([]);
  const [commentView, changeView] = useState<boolean>(false);

  let { postId } = useParams() as any;
  postId = parseInt(postId, 10);

  const post = postId ? props.posts.filter((post: { id: number }) => post.id === postId)[0] : props.post;

  useEffect(() => {
    document.title = `You clicked on a post by ${post.author}.`
  })

  const commentList = comments.map((comment, index) => {
    return (
      <Comment key={index} comment={comment} />
    )
  })

  if (commentView && comments.length > 0) {
    return (
      <StyledPost>
        {commentList}
        <BackButton changeView={changeView} />
      </StyledPost>
    )
  } else {
    return (
      <StyledPost>
        <ProfilePhoto
          photo={post.strDrinkThumb}
        />
        <StyledLink to={`/posts/${post.id}`}>
          <h2>{post.strDrink}</h2>
        </StyledLink>
        <p>{post.strCategory}</p>
        <p>{post.strInstructions}</p>
        {/* <LikeButton
          insights={props.insights}
          setInsights={props.setInsights}
          id={post.id}
          log={props.log}
          setLog={props.setLog}
          photo={post.photo}
          name={post.name}
        /> */}
        <CommentButton
          comments={comments}
          addComment={addComment}
          changeView={changeView}
          id={post.id}
          photo={post.photo}
        ></CommentButton>
        {comments.length > 0 ? (
          <ViewCommentsButton
            changeView={changeView}
            comments={comments}
          />
        ) : null}
      </StyledPost>
    )
  }
}

export default Post;
