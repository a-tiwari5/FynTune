import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import shopsReducer from "./reducer";

const rootReducer = combineReducers({
  data: shopsReducer,
  form: formReducer,
});

export default rootReducer;
