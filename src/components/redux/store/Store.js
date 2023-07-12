import { createStore } from "redux";
import reducerStore from "../reducer";

const Stores = createStore(reducerStore);

export default Stores;
