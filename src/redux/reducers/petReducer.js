import {
  FETCH_ALL_PETS_SUCCESS,
  FETCH_PETS_BY_CATEGORY_SUCCESS,
  FETCH_PETS_FAILURE,
  FETCH_PETS_START,
  SEARCH_PETS,
} from "../actions/type";

const INIIIAL_STATE = {
  isloading: false,
  petsList: null,
  allPets: null,
  searchedPet: null,
  error: null,
};
const petReducer = (state = INIIIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_PETS_START:
      return {
        ...state,
        isloading: true,
        error: null,
      };
    case FETCH_PETS_BY_CATEGORY_SUCCESS:
      return {
        ...state,
        isloading: false,
        petsList: action.payload,
        error: null,
      };
    case FETCH_PETS_FAILURE:
      return {
        ...state,
        isloading: false,
        error: action.payload,
        petsList: null,
      };
    case FETCH_ALL_PETS_SUCCESS:
      return {
        ...state,
        isloading: false,
        error: null,
        allPets: action.payload,
      };
    case SEARCH_PETS:
      return {
        ...state,
        isloading: false,
        error: null,
        searchedPet: action.payload,
      };
    default:
      return state;
  }
};

export default petReducer;
