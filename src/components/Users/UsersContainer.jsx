import Users from "./Users";
import {connect} from "react-redux";
import {followAC, unfollowAC, setUsersAC} from '../../redux/users-reducer';

let mapStateToProps = (state) => {
  console.log(state);
  return {
    users: state.usersPage.users
  };
}

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId));
    },
    unfollow: (userId) => {
      dispatch(unfollowAC(userId));
    },
    setUsers: (users) => {
      debugger;
      dispatch(setUsersAC(users));
    }
  };
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;