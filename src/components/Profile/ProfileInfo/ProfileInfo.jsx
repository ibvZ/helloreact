import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }

  const onProfilePhotoSelected = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0]);
    }
  }

  return (
    <div>
      <div className={s.headImage}>
        <img src='/images/background_head.png'/>
      </div>
      <div className={s.descriptionBlock}>
        <div className={s.profileImage}>
          <img src={ props.profile.photos.large || '/images/ava_sasha.jpg' } />
        </div>
        <div className={s.description}>
          <span>User ID: {props.profile.userId}</span><br/>
          <span>Pavel</span><br/>
          <span>29 years</span><br/>
          <span>Software Developer</span><br/>
          {props.isOwner && <input type={"file"} onChange={onProfilePhotoSelected} />}
          <br/>
        </div>
        <ProfileStatusWithHooks status={props.status} updateProfileStatus={props.updateProfileStatus} />
      </div>
    </div>
  );
}

export default ProfileInfo;