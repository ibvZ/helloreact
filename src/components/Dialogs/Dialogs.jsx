import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let dialogsElemets = props.state.dialogs.map((d) => <DialogItem name={d.name} id={d.id} />);
  let messageElements = props.state.messages.map((m) => <Message message={m.message} mine={m.mine} />);

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElemets}
      </div>
      <div className={s.messages}>
        {messageElements}
        <div>
          <div>
            <textarea></textarea>
          </div>
          <div>
            <button>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dialogs;