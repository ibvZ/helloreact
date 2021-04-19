import {profileAPI} from "../api/api";

const ADD_POST = 'profile/ADD-POST';
const DELETE_POST = 'profile/DELETE_POST';
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE';
const SET_STATUS = 'profile/SET_STATUS';
const SAVE_PHOTO_SUCCESS = 'profile/SAVE_PHOTO_SUCCESS';

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
    case SAVE_PHOTO_SUCCESS: {
      return {
        ...state,
        profile: {
          ...state.profile,
          photos: action.photos,
        },
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
export const savePhotoSuccess = (photos) => ({ type: SAVE_PHOTO_SUCCESS, photos});

export const getProfileInfo = (userId) => async (dispatch) => {
  let response = await profileAPI.getProfileInfo(userId)
  dispatch(setUserProfile(response.data));
}

export const getProfileStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getProfileStatus(userId)
    dispatch(setProfileStatus(response.data));
}

export const updateProfileStatus = (status) => async (dispatch) => {
  let response = await profileAPI.updateProfileStatus(status)
  if (response.data.resultCode === 0) {
    dispatch(setProfileStatus(status));
  }
}

export const savePhoto = (photo) => async (dispatch) => {
  let response = await profileAPI.savePhoto(photo);
  if (response.data.resultCode === 0) {
    dispatch(savePhotoSuccess(response.data.data.photos));
  }
}

export default profileReducer;