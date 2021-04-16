import s from './Users.module.css';
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../api/api";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

const Users = ({currentPage, totalUsersCount, onPageChanged, pageSize,
                users, followingInProgress, onClickUnfollow, onClickFollow}) => {
  return (
    <div className={s.users}>
      <Paginator currentPage={currentPage} totalItemsCount={totalUsersCount}
                 onPageChanged={onPageChanged} pageSize={pageSize}/>
      {users.map(u => <User user={u} followingInProgress={followingInProgress}
                            onClickUnfollow={onClickUnfollow} onClickFollow={onClickFollow} />)}
    </div>
  );
}

export default Users;