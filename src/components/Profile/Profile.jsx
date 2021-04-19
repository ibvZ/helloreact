import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
  return (
    <div className={s.content}>
      <ProfileInfo profile={props.profile}
                   isOwner={props.isOwner}
                   status={props.status}
                   savePhoto={props.savePhoto}
                   updateProfileStatus={props.updateProfileStatus} />
      <MyPostsContainer />
    </div>
  );
}

export default Profile;