import s from './Users.module.css';
import {NavLink} from "react-router-dom";

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div className={s.users}>
      <div>
        {
          pages.map(p => {
            return <span className={props.currentPage === p && s.selectedPage}
                         onClick={(e) => {props.onPageChanged(p) }}>{p} </span>
          })
        }
      </div>
      {
        props.users.map(u => <div className={s.userBox} key={u.id}>
          <div className={s.avaBox}>
            <div>
              <NavLink to={'/profile/' + u.id}>
                <img src={ u.photos.small !== null ? u.photos.small : '/images/ava_pavel.jpg' } />
              </NavLink>
            </div>
            <div>
              { u.followed
              ? <button onClick={ () => {props.unfollow(u.id)} }>Unfollow</button>
              : <button onClick={ () => {props.follow(u.id)} }>Follow</button> }
            </div>
          </div>
          <div className={s.informationBox}>
            <div>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </div>
            <div className={s.locationBox}>
              <div>{"u.location.country"}</div>
              <div>{"u.location.city"}</div>
            </div>
          </div>
        </div>)
      }
    </div>
  );
}

export default Users;