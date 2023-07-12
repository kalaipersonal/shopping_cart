import { USERNAME } from "../action/Action";

const ReducerLocalData = (state = [], action) => {
    switch (action.type) {
        case USERNAME:
            return { ...state, username: state.value };
        default:
            return state;
    }
};

export default ReducerLocalData;
