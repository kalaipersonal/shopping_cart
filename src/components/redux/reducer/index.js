import { combineReducers } from "redux";
import ReducerLocalData from "./Reducer";

const reducerStore = combineReducers({
    usernames: ReducerLocalData,
});

export default reducerStore;
