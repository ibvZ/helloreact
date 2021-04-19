import s from "./Users.module.css";
import {NavLink} from "react-router-dom";

const User = ({user, followingInProgress, onClickUnfollow, onClickFollow}) => {
  return (
    <div className={s.userBox} key={user.id}>
      <div className={s.avaBox}>
        <div>
          <NavLink to={'/profile/' + user.id}>
            <img src={ user.photos.small !== null ? user.photos.small : '/images/ava_sasha.jpg' } />
          </NavLink>
        </div>
        <div>
          { user.followed
          ? <button disabled={followingInProgress.some(id => id === user.id)}
                    onClick={ () => { onClickUnfollow(user.id) } }>Unfollow</button>
          : <button disabled={followingInProgress.some(id => id === user.id)}
                    onClick={ () => { onClickFollow(user.id) } }>Follow</button> }
        </div>
      </div>
      <div className={s.informationBox}>
        <div>
          <div>{user.name}</div>
          <div>{user.status}</div>
        </div>
        <div className={s.locationBox}>
          <div>{"u.location.country"}</div>
          <div>{"u.location.city"}</div>
        </div>
      </div>
    </div>
  );
}

export default User;