import React from "react";
import {connect} from "react-redux";
import Header from "./Header";
import {authMe} from '../../redux/auth-reducer';

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.authMe();
  }

  render() {
    return <Header {...this.props} />
  }
}

let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login
  };
}

export default connect(mapStateToProps, {authMe})(HeaderContainer);