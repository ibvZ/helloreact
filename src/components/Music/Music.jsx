import s from './Music.module.css';
import {withAuthRedirect} from "../hoc/withAuthRedirect";

const Music = () => {
  return (
  <div className={s.music}>
    Music
  </div>
  );
}

export default withAuthRedirect(Music);