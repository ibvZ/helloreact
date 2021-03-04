import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let dialogs = [
    {id: 1, name: 'Pasha'},
    {id: 2, name: 'Masha'},
    {id: 3, name: 'Nastya'},
    {id: 4, name: 'Natasha'},
  ];

  let messages = [
    {id: 1, message: 'Hi!'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'Yo'},
  ];

  let dialogsElemets = dialogs.map((d) => <DialogItem name={d.name} id={d.id} />);
  let messageElements = messages.map((m) => <Message message={m.message} />);

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElemets}
      </div>
      <div className={s.messages}>
        {messageElements}
      </div>
    </div>
  );
}

export default Dialogs;