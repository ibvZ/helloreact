import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {withRouter} from 'react-router-dom';
import {getProfileInfo, getProfileStatus, updateProfileStatus, savePhoto, saveProfile} from '../../redux/profile-reducer'
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

  refreshProfile() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authorizedUserId;
      if (!userId) {
        this.props.history.push("/login");
      }
    }
    this.props.getProfileInfo(userId);
    this.props.getProfileStatus(userId);
  }

  componentDidMount() {
    this.refreshProfile();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.userId !== this.props.match.params.userId) {
      this.refreshProfile();
    }
  }

  render() {
    return (
      <Profile {...this.props}
               isOwner={!this.props.match.params.userId}
               profile={this.props.profile}
               status={this.props.status}
               savePhoto={this.props.savePhoto}
               updateProfileStatus={this.props.updateProfileStatus}
               saveProfile={this.props.saveProfile}/>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth,
  }
}

export default compose(
  connect(mapStateToProps, {getProfileInfo, getProfileStatus, updateProfileStatus, savePhoto, saveProfile}),
  withRouter,
  withAuthRedirect
)(ProfileContainer);