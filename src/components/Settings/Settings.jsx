import s from './Settings.module.css';
import {withAuthRedirect} from "../hoc/withAuthRedirect";

const Settings = () => {
  return (
    <div className={s.settings}>
      Settings
    </div>
  );
}

export default withAuthRedirect(Settings);