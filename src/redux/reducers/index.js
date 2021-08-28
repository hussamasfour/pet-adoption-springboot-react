import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import petReducer from "./petReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  form: formReducer,
  user: userReducer,
  pets: petReducer,
});

export default rootReducer;
