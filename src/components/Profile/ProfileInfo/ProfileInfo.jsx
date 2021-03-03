import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src='https://i.pinimg.com/originals/b9/22/48/b9224810a3c2745a4fa4112a7348131b.png'/>
      </div>
      <div className={s.descriptionBlock}>
        ava+desc
      </div>
    </div>
  );
}

export default ProfileInfo;