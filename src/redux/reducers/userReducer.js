import {
  ADD_USER_DETAILS_FAILURE,
  ADD_USER_DETAILS_START,
  ADD_USER_DETAILS_SUCCESS,
  LOGOUT,
  REFRESH_TOKEN,
  SIGN_IN_FAILURE,
  SIGN_IN_START,
  SIGN_IN_SUCCESS,
  SIGN_UP_FAILURE,
  SIGN_UP_START,
  SIGN_UP_SUCCESS,
} from "../actions/type";

const user = JSON.parse(localStorage.getItem("user"));

const INITIAL_STATE = user
  ? {
      isLoading: false,
      isLoggedIn: true,
      user,
      errorMessage: null,
    }
  : {
      isLoading: false,
      isLoggedIn: false,
      user: null,
      errorMessage: null,
    };

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN_START:
      return {
        ...state,
        isLoading: true,
        errorMessage: null,
      };
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        isLoading: false,
        user: action.payload,
      };
    case SIGN_IN_FAILURE:
      return {
        ...state,
        isLoading: false,
        user: null,
        errorMessage: action.payload,
      };
    case SIGN_UP_START:
      return { ...state, isLoading: true, errorMessage: false };
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        errorMessage: null,
      };
    case SIGN_UP_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
      };
    case REFRESH_TOKEN:
      return {
        ...state,
        user: { ...user, accessToken: action.payload },
      };
    case ADD_USER_DETAILS_START: {
      return {
        ...state,
        isLoading: true,
        errorMessage: null,
      };
    }
    case ADD_USER_DETAILS_FAILURE: {
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload,
      };
    }
    case ADD_USER_DETAILS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        errorMessage: null,
      };
    }
    case LOGOUT:
      return { ...state, isLoggedIn: false, user: null };
    default:
      return state;
  }
};

export default userReducer;
