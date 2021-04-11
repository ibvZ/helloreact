import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const DELETE_POST = 'DELETE_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
  posts: [
    {id: 2, message: 'This is my second post.', likesCount: 12 },
    {id: 1, message: 'This is my first post.', likesCount: 50 }
  ],
  profile: null,
  status: '',
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        message: action.newPostElement,
        likesCount: 0
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
      };
    }
    case DELETE_POST: {
      return {
        ...state,
        posts: state.posts.filter(p => p.id !== action.postId),
      }
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

export const addPost = (newPostElement) => ({ type: ADD_POST, newPostElement });
export const deletePost = (postId) => ({ type: DELETE_POST, postId });

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