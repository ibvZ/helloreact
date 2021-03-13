import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/state";

const Dialogs = (props) => {
  let dialogsElemets = props.state.dialogs.map((d) => <DialogItem name={d.name} id={d.id} />);
  let messageElements = props.state.messages.map((m) => <Message message={m.message} mine={m.mine} />);
  let newMessageBody = props.state.newMessageBody;

  let onSendMessageClick = () => {
    props.dispatch(sendMessageCreator());
  }

  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.dispatch(updateNewMessageBodyCreator(body));
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElemets}
      </div>
      <div className={s.messages}>
        {messageElements}
        <div>
          <div>
            <textarea value={newMessageBody}
                      onChange={onNewMessageChange}
                      placeholder='Enter your message'></textarea>
          </div>
          <div>
            <button onClick={onSendMessageClick}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dialogs;