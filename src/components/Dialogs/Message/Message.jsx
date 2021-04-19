import s from "./Message.module.css";

const Message = (props) => {

  if (props.mine) {
    return (
      <div className={s.messageBoxMine}>
        <div className={s.messageMine}>
          {props.message}
        </div>
        <div className={s.messageAva}>
          <img src='images/ava_sasha.jpg' />
        </div>
      </div>
    );
  } else {
    return (
      <div className={s.messageBox}>
        <div className={s.messageAva}>
          <img src='images/ava_masha.jpg' />
        </div>
        <div className={s.message}>
          {props.message}
        </div>
      </div>
    );
  }
}

export default Message;