import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
  posts: [
    {id: 2, message: 'This is my second post.', likesCount: 12 },
    {id: 1, message: 'This is my first post.', likesCount: 50 }
  ],
  newPostText: 'Enter...',
  profile: null,
  status: '',
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 0
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: ''
      };
    }
    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.newText
      };
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile
      };
    }
    case SET_STATUS: {
      return {
        ...state,
        status: action.status
      };
    }
    default:
      return state;
  }
}

export const addPost = () => ({ type: ADD_POST });
export const updateNewPost = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text});
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile});
export const setProfileStatus = (status) => ({ type: SET_STATUS, status});

export const getProfileInfo = (userId) => {
  return (dispatch) => {
    profileAPI.getProfileInfo(userId).then(data => {
      dispatch(setUserProfile(data));
    });
  }
}

export const getProfileStatus = (userId) => {
  return (dispatch) => {
    profileAPI.getProfileStatus(userId).then(data => {
      dispatch(setProfileStatus(data));
    });
  }
}

export const updateProfileStatus = (status) => {
  return (dispatch) => {
    profileAPI.updateProfileStatus(status).then(data => {
      if (data.resultCode === 0) {
        dispatch(setProfileStatus(status));
      }
    });
  }
}

export default profileReducer;