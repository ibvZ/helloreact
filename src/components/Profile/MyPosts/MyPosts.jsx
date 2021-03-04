import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
  let posts = [
    {id: 1, message: 'Hi! How are you?', likesCount: 12 },
    {id: 2, message: 'This is my first post.', likesCount: 11 },
  ];

  let postsElements = posts.map((p) => <Post message={p.message} likesCount={p.likesCount} />);

  return (
    <div className={s.postsBlock}>
      My Posts
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add Post</button>
        </div>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  );
}

export default MyPosts;