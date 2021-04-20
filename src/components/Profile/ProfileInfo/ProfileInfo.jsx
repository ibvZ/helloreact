import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";
import {useState} from "react";
import {Element} from "../../common/FormsControls/FormsControls";
import {Field, reduxForm} from "redux-form";

const ProfileInfo = (props) => {
  let [editMode, setEditMode] = useState(false);

  if (!props.profile) {
    return <Preloader />
  }

  const onProfilePhotoSelected = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0]);
    }
  }

  const onSubmit = (formData) => {
    props.saveProfile(formData);
    setEditMode(false);
  }

  return (
    <div>
      <div className={s.headImage}>
        <img src='/images/background_head.png'/>
      </div>
      <div className={s.descriptionBlock}>
        <div>
          <div className={s.profileImage}>
            <img src={ props.profile.photos.large || '/images/ava_sasha.jpg' } />
          </div>
          <div>
            {props.isOwner && <input type={"file"} onChange={onProfilePhotoSelected} />}
          </div>
          <ProfileStatusWithHooks status={props.status} updateProfileStatus={props.updateProfileStatus} />
        </div>
        { editMode
          ? <ReduxProfileDataForm initialValues={props.profile}
                                  onSubmit={onSubmit}/>
          : <ProfileData profile={props.profile} isOwner={props.isOwner}
                         goToEditMode={ () => {setEditMode(true);} } /> }
      </div>
    </div>
  );
}

const ProfileData = ({profile, isOwner, goToEditMode}) => {
  return (
    <div className={s.description}>
      {isOwner && <div><button onClick={goToEditMode}>Edit</button></div>}
      <div><b>User ID:</b> {profile.userId}</div>
      <div>{profile.fullName}</div>
      <div>
        <b>Looking for a job:</b> {profile.lookingForAJob ? "yes" : "no"}
      </div>
        {profile.lookingForAJob &&
      <div>
        <b>My professional skills:</b> {profile.lookingForAJobDescription}
      </div>}
      <div><b>About Me:</b> {profile.aboutMe}</div>
      <div>
        <b>Contacts:</b> {Object.keys(profile.contacts).map(key =>
      <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
      )}
      </div>
    </div>
  );
}

const Input = Element("input");
const Textarea = Element("textarea");

const ProfileDataForm = ({saveData, handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div><button>Save</button></div>
      <div>
        <b>Full Name:</b> <Field component={Input} type={'text'} name={"fullName"} placeholder={"Full Name"} />
      </div>
      <div>
        <div>
          <b>Looking for a job:</b> <Field component={Input} type={'checkbox'} name={"lookingForAJob"} />
        </div>
        <div>
          <b>My professional skills:</b> <Field component={Textarea} name={'lookingForAJobDescription'}
                                                placeholder={"My professional skills"}/>
        </div>
        <div>
          <b>About Me:</b> <Field component={Textarea} name={'aboutMe'} placeholder={"About Me"} />
        </div>
      </div>
    </form>
  );
}

const ReduxProfileDataForm = reduxForm({form: 'profileData'})(ProfileDataForm);

const Contact = ({contactTitle, contactValue}) => {
  return (
    <div className={s.contact}>
      <b>{contactTitle}</b>: {contactValue}
    </div>
  );
}

export default ProfileInfo;