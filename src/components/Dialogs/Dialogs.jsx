import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";
import {requiredField, maxLengthCreator} from "./../../utils/validators/validators";
import {Element} from "./../common/FormsControls/FormsControls"

const maxLengthMessage = maxLengthCreator(50);
const Textarea = Element("textarea");

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={Textarea} name={"newMessageBody"} placeholder={"Enter your message"}
               validate={[requiredField, maxLengthMessage]}/>
      </div>
      <div>
        <button>Send</button>
      </div>
    </form>
  );
}

const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm);

const Dialogs = (props) => {
  let state = props.dialogsPage;

  let dialogsElemets = state.dialogs.map((d) => <DialogItem name={d.name} id={d.id} />);
  let messageElements = state.messages.map((m) => <Message message={m.message} mine={m.mine} />);

  let addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody);
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElemets}
      </div>
      <div className={s.messages}>
        {messageElements}
        <AddMessageFormRedux onSubmit={ addNewMessage } />
      </div>
    </div>
  );
}

export default Dialogs;