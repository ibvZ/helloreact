import s from './Users.module.css';
import {usersAPI} from "../../api/api";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";
import {UserType} from "../../types/types";

type PropsType = {
    currentPage: number
    totalUsersCount: number
    onPageChanged: (pageNumber: number) => void
    pageSize: number
    users: Array<UserType>
    isFetching: boolean
    followingInProgress: Array<number>
    onClickUnfollow: (userId: number) => void
    onClickFollow: (userId: number) => void
}

const Users: React.FC<PropsType> = ({currentPage, totalUsersCount, onPageChanged, pageSize,
                users, isFetching, followingInProgress, onClickUnfollow, onClickFollow}) => {
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