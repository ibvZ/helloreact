import React from 'react';
import {connect} from "react-redux";
import {setCurrentPage, requestUsers, follow, unfollow}
from '../../redux/users-reducer';
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {getUsers, getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching,getFollowingInProgress}
from "./../../redux/users-selectors"

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.requestUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber) => {
    this.props.requestUsers(pageNumber, this.props.pageSize, false);
  }

  onClickFollow = (userId) => {
    this.props.follow(userId);
  }

  onClickUnfollow = (userId) => {
    this.props.unfollow(userId);
  }

  render() {
    return (
      <>
        { this.props.isFetching ? <Preloader /> : null}
        <Users totalUsersCount={this.props.totalUsersCount}
               pageSize={this.props.pageSize}
               currentPage={this.props.currentPage}
               onPageChanged={this.onPageChanged}
               users={this.props.users}
               onClickFollow={this.onClickFollow}
               onClickUnfollow={this.onClickUnfollow}
               isFetching={this.props.isFetching}
               followingInProgress={this.props.followingInProgress}
        />
      </>
    );
  }
}
//
// let mapStateToProps = (state) => {
//   return {
//     users: state.usersPage.users,
//     pageSize: state.usersPage.pageSize,
//     totalUsersCount: state.usersPage.totalUsersCount,
//     currentPage: state.usersPage.currentPage,
//     isFetching: state.usersPage.isFetching,
//     followingInProgress: state.usersPage.followingInProgress,
//   };
// }

let mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
  };
}

export default compose(
  connect(mapStateToProps, {setCurrentPage, requestUsers, follow, unfollow}),
  withAuthRedirect
)(UsersContainer);