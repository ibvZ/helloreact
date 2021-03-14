import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        {id: 2, message: 'This is my second post.', likesCount: 12 },
        {id: 1, message: 'This is my first post.', likesCount: 50 }
      ],
      newPostText: 'Enter...',
    },
    dialogsPage: {
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
    },
    sidebar: {},
  },
  _callSubscriber() {
    console.log('State was changed');
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  },
};


export default store;