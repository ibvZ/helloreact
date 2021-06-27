import {profileAPI} from "../api/api";
import {PostType, PhotosType, ProfileType, ContactsType} from "../types/types"

const ADD_POST = 'profile/ADD-POST'
const DELETE_POST = 'profile/DELETE_POST'
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE'
const SET_STATUS = 'profile/SET_STATUS'
const SAVE_PHOTO_SUCCESS = 'profile/SAVE_PHOTO_SUCCESS'
const SAVE_PROFILE_SUCCESS = 'profile/SAVE_PROFILE_SUCCESS'

let initialState = {
  posts: [
    {id: 2, message: 'This is my second post.', likesCount: 12 },
    {id: 1, message: 'This is my first post.', likesCount: 50 }
  ] as Array<PostType>,
  profile: null as ProfileType | null,
  status: '',
  newPostText:'',
}

export type InitialStateType = typeof initialState

const profileReducer = (state = initialState, action: any): InitialStateType => {
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
        } as ProfileType,
      };
    }
    case SAVE_PROFILE_SUCCESS: {
      return {
        ...state,
        profile: {
          ...state.profile,
          photos: action.photos,
        } as ProfileType,
      };
    }
    default:
      return state;
  }
}

type AddPostActionType = {
  type: typeof ADD_POST
  newPostElement: string
}
export const addPost = (newPostElement: string): AddPostActionType => ({ type: ADD_POST, newPostElement })

type DeletePostActionType = {
  type: typeof DELETE_POST
  postId: number
}
export const deletePost = (postId: number): DeletePostActionType => ({ type: DELETE_POST, postId })

type SetUserProfileActionType = {
  type: typeof SET_USER_PROFILE
  profile: ProfileType
}
export const setUserProfile = (profile: ProfileType): SetUserProfileActionType => ({ type: SET_USER_PROFILE, profile})

type setProfileStatusActionType = {
  type: typeof SET_STATUS,
  status: string
}
export const setProfileStatus = (status: string): setProfileStatusActionType => ({ type: SET_STATUS, status})

type SavePhotoSuccessActionType = {
  type: typeof SAVE_PHOTO_SUCCESS
  photos: PhotosType
}
export const savePhotoSuccess = (photos: PhotosType): SavePhotoSuccessActionType => ({ type: SAVE_PHOTO_SUCCESS, photos})

type SaveProfileSuccess = {
  type: typeof SAVE_PROFILE_SUCCESS
  profile: ProfileType
}
export const saveProfileSuccess = (profile: ProfileType): SaveProfileSuccess => ({ type: SAVE_PROFILE_SUCCESS, profile})

export const getProfileInfo = (userId: number) => async (dispatch: any) => {
  let response = await profileAPI.getProfileInfo(userId)
  dispatch(setUserProfile(response.data))
}

export const getProfileStatus = (userId: number) => async (dispatch: any) => {
    let response = await profileAPI.getProfileStatus(userId)
    dispatch(setProfileStatus(response.data))
}

export const updateProfileStatus = (status: string) => async (dispatch: any) => {
  let response = await profileAPI.updateProfileStatus(status)
  if (response.data.resultCode === 0) {
    dispatch(setProfileStatus(status))
  }
}

export const savePhoto = (photo: PhotosType) => async (dispatch: any) => {
  let response = await profileAPI.savePhoto(photo);
  if (response.data.resultCode === 0) {
    dispatch(savePhotoSuccess(response.data.data.photos))
  }
}

export const saveProfile = (profile: ProfileType) => async (dispatch: any, getState: any) => {
  const userId = getState().auth.userId;
  let response = await profileAPI.saveProfile(profile);
  if (response.data.resultCode === 0) {
    dispatch(getProfileInfo(userId))
  }
}

export default profileReducer;