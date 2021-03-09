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
    }
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

  dispatch(action) { // { type: 'ADD-POST' }
    if (action.type === 'ADD-POST') {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = ''
      this._callSubscriber(this._state);
    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    }
  },
};

export default store;