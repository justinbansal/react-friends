import React, {useState, useEffect} from "react";
import { Link, useParams } from 'react-router-dom';
import styled from "styled-components";

import Comment from "./Comment";
import ProfilePhoto from './ProfilePhoto';
import CommentButton from './CommentButton';
import LikeButton from './LikeButton';
import BackButton from "./BackButton";
import ViewCommentsButton from "./ViewCommentsButton";

const StyledPost = styled.div`
  padding: 2em;
  margin: 1em;
  width: 500px;
  background: dodgerblue;
  color: white;
  border-radius: 10px;
`

function Post(props) {
  const [comments, addComment] = useState([]);
  const [commentView, changeView] = useState(false);

  const { postId } = useParams();
  const post = postId ? props.posts.filter(post => postId == post.id)[0] : props.post;

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
        <Link to={`/posts/${post.id}`}>
          <h2>{post.author}</h2>
        </Link>
        <p>{post.message}</p>
        <LikeButton />
        <CommentButton
          comments={comments}
          addComment={addComment}
          changeView={changeView}
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
