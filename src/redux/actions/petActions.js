import adoptionApi from "../../api/adoptionApi";
import {
  FETCH_ALL_PETS_SUCCESS,
  FETCH_PETS_BY_CATEGORY_SUCCESS,
  FETCH_PETS_FAILURE,
  FETCH_PETS_START,
} from "./type";

export const fetchPetsByCategory = (category) => async (dispatch) => {
  try {
    dispatch({ type: FETCH_PETS_START });

    const response = await adoptionApi.get("/pets", {
      params: {
        animal: category,
      },
    });
    dispatch({ type: FETCH_PETS_BY_CATEGORY_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: FETCH_PETS_FAILURE, payload: error.response.data });
  }
};

export const fetchAllPets = () => async (dispatch) => {
  try {
    dispatch({ type: FETCH_PETS_START });

    const response = await adoptionApi.get("/allpets", {});
    dispatch({ type: FETCH_ALL_PETS_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: FETCH_PETS_FAILURE, payload: error.response.data });
  }
};
