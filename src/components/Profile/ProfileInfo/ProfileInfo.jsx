import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus/ProfileStatus";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }

  return (
    <div>
      <div className={s.headImage}>
        <img src='/images/background_head.png'/>
      </div>
      <div className={s.descriptionBlock}>
        <div className={s.profileImage}>
          <img src={ props.profile.photos.small !== null
                      ? props.profile.photos.small
                      : '/images/ava_pavel.jpg' }/>
        </div>
        <div className={s.description}>
          <span>User ID: {props.profile.userId}</span><br/>
          <span>Pavel</span><br/>
          <span>29 years</span><br/>
          <span>Software Developer</span><br/>
        </div>
        <ProfileStatus status={props.status} updateProfileStatus={props.updateProfileStatus} />
      </div>
    </div>
  );
}

export default ProfileInfo;