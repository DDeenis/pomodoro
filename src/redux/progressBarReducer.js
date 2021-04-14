import { actionTypes } from "./actionCreators";

const initialState = {
    progressWidth: 0
}

function changeProgressBarState(state, newWidth) {
    return {...state, progressWidth: newWidth};
}

function progressBarReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.CHANGE_PROGRESS_BAR_STATE:
            return changeProgressBarState(state, action.width);
    
        default:
            return state;
    }
}

export default progressBarReducer;