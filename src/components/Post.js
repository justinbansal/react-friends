import React, {useState, useEffect} from "react";
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

function Post(props) {
  const [comments, addComment] = useState([]);
  const [commentView, changeView] = useState(false);

  let { postId } = useParams();
  postId = parseInt(postId, 10);

  const post = postId ? props.posts.filter(post => post.id === postId)[0] : props.post;

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
          photo={post.photo}
        />
        <StyledLink to={`/posts/${post.id}`}>
          <h2>{post.name}</h2>
        </StyledLink>
        <p>{post.episode}</p>
        <p>{post.quote}</p>
        <LikeButton
          insights={props.insights}
          setInsights={props.setInsights}
          id={post.id}
          log={props.log}
          setLog={props.setLog}
          photo={post.photo}
          name={post.name}
        />
        <CommentButton
          comments={comments}
          addComment={addComment}
          changeView={changeView}
          insights={props.insights}
          setInsights={props.setInsights}
          id={post.id}
          log={props.log}
          setLog={props.setLog}
          photo={post.photo}
        ></CommentButton>
        {comments.length > 0 ? (
          <ViewCommentsButton
            changeView={changeView}
            comments={comments}
          />
        ): null}
      </StyledPost>
    )
  }
}

export default Post;
