import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={s.dialog + ' ' + s.active}>
          <NavLink to='/dialogs/1'>Pasha</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to='/dialogs/2'>Masha</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to='/dialogs/3'>Nastya</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to='/dialogs/4'>Natasha</NavLink>
        </div>
      </div>
      <div className={s.messages}>
        <div className={s.message}>Hi!</div>
        <div className={s.message}>How are you?</div>
        <div className={s.message}>yo</div>
      </div>
    </div>
  );
}

export default Dialogs;