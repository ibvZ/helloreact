const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
  dialogs: [
    {id: 1, name: 'Maria'},
    {id: 2, name: 'Max'},
    {id: 3, name: 'Alex'}
  ],
  messages: [
    {id: 1, message: 'Hi!', mine: false},
    {id: 2, message: 'How are you?', mine: false},
    {id: 3, message: 'Hey! I am fine. And you?', mine: true},
    {id: 4, message: 'I am great. Thnx! Dou you wanna go cinema?', mine: false},
  ],
  newMessageBody: "",
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      return {
        ...state,
        newMessageBody: action.body
      };
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      return {
        ...state,
        newMessageBody: '',
        messages: [...state.messages,{
          id: 6,
          message: body,
          mine: true
        } ]
      };
    default:
      return state;
  }
}

export const sendMessage = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBody = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY, body: body
});

export default dialogsReducer;