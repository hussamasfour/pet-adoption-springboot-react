import adoptionApi from "../../api/adoptionApi";
import TokenService from "../../utils/tokenService";
import {
  ADD_USER_DETAILS_FAILURE,
  ADD_USER_DETAILS_START,
  ADD_USER_DETAILS_SUCCESS,
  LOGOUT,
  REFRESH_TOKEN,
  SIGN_IN_FAILURE,
  SIGN_IN_START,
  SIGN_IN_SUCCESS,
} from "./type";

export const fetchUser = (formValues, history) => async (dispatch) => {
  try {
    dispatch({
      type: SIGN_IN_START,
    });
    const response = await adoptionApi.post("/login", formValues);
    if (response.status === 200) {
      TokenService.setUser(response.data);
      dispatch({
        type: SIGN_IN_SUCCESS,
        payload: response.data,
      });
      history.push("/");
    }
  } catch (error) {
    dispatch({
      type: SIGN_IN_FAILURE,
      payload: error.response.data.message,
    });
  }
};
export const refreshToken = (accessToken) => (dispatch) => {
  dispatch({
    type: REFRESH_TOKEN,
    payload: accessToken,
  });
};
export const addUserDetails = (userDetails, history) => (dispatch) => {
  try {
    dispatch({ type: ADD_USER_DETAILS_START });
    adoptionApi.post("/userdetails", userDetails);
    dispatch({ type: ADD_USER_DETAILS_SUCCESS });
  } catch (error) {
    dispatch({ type: ADD_USER_DETAILS_FAILURE, error });
  }
};

export const logout = () => (dispatch) => {
  TokenService.removeUser();
  dispatch({ type: LOGOUT });
};
