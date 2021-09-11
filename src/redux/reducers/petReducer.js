import {
  FETCH_ALL_PETS_SUCCESS,
  FETCH_PETS_BY_CATEGORY_SUCCESS,
  FETCH_PETS_FAILURE,
  FETCH_PETS_START,
  FETCH_PET_BY_ID,
  RESERVE_PET_FAILURE,
  RESERVE_PET_SUCCESS,
  SEARCH_PETS,
} from "../actions/type";

const allPets = JSON.parse(localStorage.getItem("pets"));

const INIIIAL_STATE = allPets
  ? {
      isloading: false,
      petsList: null,
      allPets,
      searchedPet: null,
      selectedPet: null,
      error: null,
    }
  : {
      isloading: false,
      petsList: null,
      allPets: null,
      searchedPet: null,
      selectedPet: null,
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
    case FETCH_PET_BY_ID:
      return {
        ...state,
        isloading: false,
        error: null,
        selectedPet: action.payload,
      };
    case RESERVE_PET_SUCCESS:
      return {
        ...state,
        error: null,
        allPets: state.allPets.filter((pets) => pets.id !== action.payload),
      };
    case RESERVE_PET_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default petReducer;
