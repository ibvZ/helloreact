import profileReducer, {addPost, deletePost} from "./profile-reducer";

//1.test data
let state = {
  posts: [
    {id: 2, message: 'This is my second post.', likesCount: 12 },
    {id: 1, message: 'This is my first post.', likesCount: 50 }
  ],
};

it('length of posts should be incremented', () => {
  //2.action
  let action = addPost("PASHOK TEST!");
  let newState = profileReducer(state, action);

  //3. expectation
  expect(newState.posts.length).toBe(3);
});

it('message of new post should be correct', () => {
  //2.action
  let action = addPost("PASHOK TEST!");
  let newState = profileReducer(state, action);

  //3. expectation
  expect(newState.posts[2].message).toBe("PASHOK TEST!");
});

it('after deleteing length of messages should be decrement', () => {
  //2.action
  let action = deletePost(1);
  let newState = profileReducer(state, action);

  //3. expectation
  expect(newState.posts.length).toBe(1);
});
