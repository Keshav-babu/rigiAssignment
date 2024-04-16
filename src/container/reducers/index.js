import { combineReducers } from "redux";
import homeReducer from "../Home/reducer";
import postReducer from "../Post/reducer";



const rootReducer = combineReducers({
    home:homeReducer,
    post:postReducer
})


export default rootReducer;