import { combineReducers } from "redux";
import inputReducer from "./inputReducer";
import userReducer from "./userReducer";



const rootReducers = combineReducers({
    user:userReducer,
    input:inputReducer
})
export default rootReducers