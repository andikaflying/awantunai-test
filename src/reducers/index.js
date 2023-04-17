import photosReducer from "./photos";
import { combineReducers } from "redux";

const rootReducer = combineReducers({ photosReducer });

export default rootReducer;
