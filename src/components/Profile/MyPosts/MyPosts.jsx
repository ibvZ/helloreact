import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      My Posts
      <div>
        <textarea></textarea>
        <button>Add Post</button>
      </div>
      <div className={s.posts}>
        <Post message='Hi! How are you?' />
        <Post message='This is my first post.'/>
      </div>
    </div>
  );
}

export default MyPosts;