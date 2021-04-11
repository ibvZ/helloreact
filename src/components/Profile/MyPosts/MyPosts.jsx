import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "./../../../utils/validators/validators";
import {Element} from "./../../common/FormsControls/FormsControls"

const maxLengthPost = maxLengthCreator(10);
const Textarea = Element("textarea");

const AddNewPost = (props) => {
 return (
   <form onSubmit={props.handleSubmit}>
     <div>
       <Field validate={[requiredField, maxLengthPost]}
              component={Textarea}
              name={"newPostElement"}
              placeholder={"Enter your text"} />
     </div>
     <div>
       <button>Add Post</button>
     </div>
   </form>
 );
}

const AddNewPostRedux = reduxForm({form: 'addNewPostForm'})(AddNewPost);

const MyPosts = React.memo(props => {
  let postsElements = props.posts.map((p) => <Post message={p.message} likesCount={p.likesCount}/>);

  let AddPost = (values) => {
    props.addPost(values.newPostElement);
  }

  return (
    <div className={s.postsBlock}>
      My Posts
      <AddNewPostRedux onSubmit={AddPost}/>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  );
});

export default MyPosts;