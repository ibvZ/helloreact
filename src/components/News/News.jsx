import s from './News.module.css';
import {withAuthRedirect} from "../hoc/withAuthRedirect";

const News = () => {
  return (
  <div className={s.news}>
    News
  </div>
  );
}

export default withAuthRedirect(News);