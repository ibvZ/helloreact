import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {withRouter} from 'react-router-dom';
import {getProfileInfo, getProfileStatus, updateProfileStatus} from '../../redux/profile-reducer'
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 16043;
    }
    this.props.getProfileInfo(userId);
    this.props.getProfileStatus(userId);
  }

  render() {
    return (
      <Profile {...this.props}
               profile={this.props.profile}
               status={this.props.status}
               updateProfileStatus={this.props.updateProfileStatus} />
    );
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
  }
}

export default compose(
  connect(mapStateToProps, {getProfileInfo, getProfileStatus, updateProfileStatus}),
  withRouter,
  withAuthRedirect
)(ProfileContainer);