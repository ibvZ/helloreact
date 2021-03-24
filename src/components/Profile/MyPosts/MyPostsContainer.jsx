import {addPost, updateNewPost} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
  return {
    newPostText: state.profilePage.newPostText,
    posts: state.profilePage.posts
  };
}

export default connect(mapStateToProps, {updateNewPost, addPost})(MyPosts);