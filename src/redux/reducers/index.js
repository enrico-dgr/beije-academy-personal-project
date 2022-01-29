import { combineReducers } from "redux";
import userMeDuck from "../ducks/userMeDuck";

//API

//DUCK

const rootReducer = combineReducers({
	userMeDuck,
});

export default rootReducer;
