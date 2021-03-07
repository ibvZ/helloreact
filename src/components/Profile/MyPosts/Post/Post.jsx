import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.item}>
      <div className={s.ava}>
        <img src='/images/ava_pavel.jpg' />
      </div>
      <div className={s.postMessage}>
        {props.message}
      </div>
      <div></div>
      <div className={s.likes}>
        <span>Like {props.likesCount}</span>
      </div>
    </div>
  );
}

export default Post;