import adoptionApi from "../../api/adoptionApi";
import TokenService from "../../utils/tokenService";
import { SIGN_IN_FAILURE, SIGN_IN_START, SIGN_IN_SUCCESS } from "./type";

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
