import {authMe} from "./auth-reducer"

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'

export type InitialStateType = {
  initialized: boolean
}
let initialState: InitialStateType = {
  initialized: false,
}

const appReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true,
      };
    default:
      return state;
  }
}

type InitializedSuccessActionType = {
  type: typeof INITIALIZED_SUCCESS
}
export const setInitializedSuccess = (): InitializedSuccessActionType => ({ type: INITIALIZED_SUCCESS })

export const initializeApp = () => (dispatch: any) => {
  let promise = dispatch(authMe());
  promise.then(() => {
    dispatch(setInitializedSuccess());
  });
}

export default appReducer