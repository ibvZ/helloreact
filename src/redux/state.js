let state = {
  profilePage: {
    posts: [
      {id: 1, message: 'Hi! How are you?', likesCount: 12 },
      {id: 2, message: 'This is my first post.', likesCount: 11 }
    ],
  },
  dialogsPage: {
    dialogs: [
      {id: 1, name: 'Pasha'},
      {id: 2, name: 'Masha'},
      {id: 3, name: 'Nastya'},
      {id: 4, name: 'Natasha'}
    ],
    messages: [
      {id: 1, message: 'Hi!'},
      {id: 2, message: 'How are you?'},
      {id: 3, message: 'Yo'}
    ]
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