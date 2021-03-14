import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let state = props.dialogsPage;

  let dialogsElemets = state.dialogs.map((d) => <DialogItem name={d.name} id={d.id} />);
  let messageElements = state.messages.map((m) => <Message message={m.message} mine={m.mine} />);
  let newMessageBody = state.newMessageBody;

  let onSendMessageClick = () => {
    props.sendMessage();
  }

  let onNewMessageChange = (e) => {
    props.updateNewMessageBody(e.target.value)
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