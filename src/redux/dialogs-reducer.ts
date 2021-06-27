const SEND_MESSAGE = 'SEND-MESSAGE'

type DialogType = {
  id: number
  name: string
}

type MessageType = {
  id: number
  message: string
  mine: boolean
}

let initialState = {
  dialogs: [
    {id: 1, name: 'Maria'},
    {id: 2, name: 'Max'},
    {id: 3, name: 'Alex'}
  ] as Array<DialogType>,
  messages: [
    {id: 1, message: 'Hi!', mine: false},
    {id: 2, message: 'How are you?', mine: false},
    {id: 3, message: 'Hey! I am fine. And you?', mine: true},
    {id: 4, message: 'I am great. Thnx! Dou you wanna go cinema?', mine: false},
  ] as Array<MessageType>,
}

export type InitialStateType = typeof initialState

const dialogsReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case SEND_MESSAGE:
      let body = action.newMessageBody;
      return {
        ...state,
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

type sendMessageActionType = {
  type: typeof SEND_MESSAGE
  newMessageBody: string
}
export const sendMessage = (newMessageBody: string): sendMessageActionType => ({ type: SEND_MESSAGE, newMessageBody })

export default dialogsReducer