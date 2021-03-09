import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsElements = props.posts.map((p) => <Post message={p.message} likesCount={p.likesCount} />);

  let newPostElement = React.createRef();

  let addPost = () => {
    let action = {type: 'ADD-POST'};
    props.dispatch(action);
  }

  let onPostChange = () => {
    let action = {type: 'UPDATE-NEW-POST-TEXT', newText: newPostElement.current.value};
    props.dispatch(action);
  }

  return (
    <div className={s.postsBlock}>
      My Posts
      <div>
        <div>
          <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
        </div>
        <div>
          <button onClick={addPost}>Add Post</button>
        </div>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  );
}

export default MyPosts;