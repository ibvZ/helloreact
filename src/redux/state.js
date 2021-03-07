let state = {
  profilePage: {
    posts: [
      {id: 2, message: 'This is my second post.', likesCount: 12 },
      {id: 1, message: 'This is my first post.', likesCount: 50 }
    ],
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
};

export let addPost = (postMessage) => {
  debugger;

  let newPost = {
    id: 5,
    message: postMessage,
    likesCount: 0
  };
  state.profilePage.posts.push(newPost);
}

export default state;