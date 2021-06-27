import {authAPI} from "../api/api"
import {stopSubmit} from "redux-form"

const SET_AUTH_USER_DATA = 'auth/SET_AUTH_USER_DATA'

let initialState = {
  userId: null as number | null,
  email: null as string | null,
  login: null as string | null,
  isAuth: false
}

export type InitialStateType = typeof initialState

const authReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case SET_AUTH_USER_DATA:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}

type SetAuthUserDataActionPayloadType = {
  userId: number | null
  email: string | null
  login: string | null
  isAuth: boolean | null
}
type SetAuthUserDataActionType = {
  type: typeof SET_AUTH_USER_DATA,
  payload: SetAuthUserDataActionPayloadType
}
export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean | null): SetAuthUserDataActionType => ({
  type: SET_AUTH_USER_DATA,
  payload: {userId, email, login, isAuth}
})

export const authMe = () => async (dispatch: any) => {
  let response = await authAPI.authMe();
  if (response.data.resultCode === 0) {
    let data = {...response.data.data}
    dispatch(setAuthUserData(data.id, data.email, data.login, true));
  }
}

export const login = (email: string, password: string, rememberMe: true) => async (dispatch: any) => {
  let response = await authAPI.login(email, password, rememberMe);
  if (response.data.resultCode === 0) {
    dispatch(authMe());
  } else {
    let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
    dispatch(stopSubmit("login", {_error: message}));
  }
}

export const logout = () => async (dispatch: any) => {
  let response = authAPI.logout();
  if (response.data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
  }
}

export default authReducer