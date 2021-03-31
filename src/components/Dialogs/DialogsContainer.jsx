import Dialogs from "./Dialogs";
import {sendMessage, updateNewMessageBody} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
    isAuth: state.auth.isAuth,
  };
}

export default connect(mapStateToProps,{updateNewMessageBody, sendMessage})(Dialogs);