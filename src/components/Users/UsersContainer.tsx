import React from 'react';
import {connect} from "react-redux";
import {setCurrentPage, requestUsers, follow, unfollow}
from '../../redux/users-reducer';
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {getUsers, getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching,getFollowingInProgress}
from "../../redux/users-selectors"
import {UserType} from "../../types/types";
import {AppStateType} from "../../redux/redux-store";

type MapStatePropsType = {
  currentPage: number
  pageSize: number
  isFetching: boolean
  followingInProgress: Array<number>
  totalUsersCount: number
  users: Array<UserType>
}

type MapDispatchPropsType = {
  setCurrentPage: (currentPage: number) => void
  requestUsers: (currentPage: number, pageSize: number, initialCall?: boolean) => void
  follow: (userId: number) => void
  unfollow: (userId: number) => void
}

type OwnPropsType = {
  pageTitle?: string
}

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType



class UsersContainer extends React.Component<PropsType> {
  componentDidMount() {
    const {currentPage, pageSize} = this.props;
    this.props.requestUsers(currentPage, pageSize);
  }

  onPageChanged = (pageNumber: number) => {
    const pageSize = this.props.pageSize;
    this.props.requestUsers(pageNumber, pageSize, false);
  }

  onClickFollow = (userId: number) => {
    this.props.follow(userId);
  }

  onClickUnfollow = (userId: number) => {
    this.props.unfollow(userId);
  }

  render() {
    return (
      <>
        { this.props.isFetching ? <Preloader /> : null}
        <Users currentPage={this.props.currentPage}
               totalUsersCount={this.props.totalUsersCount}
               onPageChanged={this.onPageChanged}
               pageSize={this.props.pageSize}
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

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
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
  connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(
      mapStateToProps, {setCurrentPage, requestUsers, follow, unfollow}),
  withAuthRedirect
)(UsersContainer);