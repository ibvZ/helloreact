import React from 'react';
import {connect} from "react-redux";
import {setCurrentPage, getUsers, follow, unfollow}
from '../../redux/users-reducer';
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize);
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

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
  };
}

export default connect(mapStateToProps, {setCurrentPage, getUsers, follow, unfollow})(UsersContainer);