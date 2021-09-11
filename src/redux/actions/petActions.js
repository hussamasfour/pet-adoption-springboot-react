import adoptionApi from "../../api/adoptionApi";
import {
  FETCH_ALL_PETS_SUCCESS,
  FETCH_PETS_BY_CATEGORY_SUCCESS,
  FETCH_PETS_FAILURE,
  FETCH_PETS_START,
  FETCH_PET_BY_ID,
  RESERVE_PET_FAILURE,
  RESERVE_PET_SUCCESS,
  SEARCH_PETS,
} from "./type";

export const fetchPetsByCategory = (category) => async (dispatch) => {
  try {
    dispatch({ type: FETCH_PETS_START });

    const response = await adoptionApi.get("/pet/category", {
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

    const response = await adoptionApi.get("/pet/all");
    dispatch({ type: FETCH_ALL_PETS_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: FETCH_PETS_FAILURE, payload: error.response.data });
  }
};

export const searchPets = (formValues, history) => async (dispatch) => {
  try {
    dispatch({ type: FETCH_PETS_START });
    const response = await adoptionApi.get("/pet/search", {
      params: {
        animal: formValues.animal,
        city: formValues.city,
        age: formValues.age,
      },
    });
    dispatch({ type: SEARCH_PETS, payload: response.data });
    history.push("/search");
  } catch (error) {
    dispatch({ type: FETCH_PETS_FAILURE, payload: error.response.data });
  }
};

export const fetchPetById = (id) => async (dispatch) => {
  try {
    dispatch({ type: FETCH_PETS_START });
    const response = await adoptionApi.get("/pet/" + id);
    dispatch({ type: FETCH_PET_BY_ID, payload: response.data });
  } catch (error) {
    dispatch({ type: FETCH_PETS_FAILURE, payload: error.response.data });
  }
};

export const reservePet = (petId, history) => async (dispatch) => {
  try {
    const response = await adoptionApi.post("/adopt/" + petId);

    if (response.status === 201) {
      dispatch({ type: RESERVE_PET_SUCCESS, payload: petId });

      history.push("/");
    }
  } catch (error) {
    dispatch({ type: RESERVE_PET_FAILURE, error });
  }
};
