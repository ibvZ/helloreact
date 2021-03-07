import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div>
      <div className={s.headImage}>
        <img src='/images/background_head.png'/>
      </div>
      <div className={s.descriptionBlock}>
        <div className={s.profileImage}>
          <img src='/images/ava_pavel.jpg'/>
        </div>
        <div className={s.description}>
          <span>Pavel</span><br/>
          <span>29 years</span><br/>
          <span>Software Developer</span><br/>
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;