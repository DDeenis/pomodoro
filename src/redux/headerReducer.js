import { actionTypes } from "./actionCreators";

const initialState = {
    tomatoesFull: 0,
    tomatoSlices: 0,
    defaultHeight: 78
};

const setTomatoesFull = (state, newValue) => ({ ...state, tomatoesFull: newValue });

const setTomatoSlices = (state, newValue) => ({ ...state, tomatoSlices: newValue });

export default function headerReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.SET_TOMATOES_FULL:
            return setTomatoesFull(state, action.newValue);

        case actionTypes.SET_TOMATO_SLICES:
            return setTomatoSlices(state, action.newValue);
    
        default:
            return state;
    }
}