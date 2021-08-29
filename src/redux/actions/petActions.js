import adoptionApi from "../../api/adoptionApi";
import {
  FETCH_ALL_PETS_SUCCESS,
  FETCH_PETS_BY_CATEGORY_SUCCESS,
  FETCH_PETS_FAILURE,
  FETCH_PETS_START,
  SEARCH_PETS,
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

    const response = await adoptionApi.get("/allpets");
    dispatch({ type: FETCH_ALL_PETS_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: FETCH_PETS_FAILURE, payload: error.response.data });
  }
};

export const searchPets = (formValues) => async (dispatch) => {
  try {
    dispatch({ type: FETCH_PETS_START });
    const response = await adoptionApi.get("/searchpet", {
      params: {
        animal: formValues.animal,
        city: formValues.city,
        age: formValues.age,
      },
    });
    dispatch({ type: SEARCH_PETS, payload: response.data });
  } catch (error) {
    dispatch({ type: FETCH_PETS_FAILURE, payload: error.response.data });
  }
};
