const CHANGE_PROGRESS_BAR_STATE = 'CHANGE_PROGRESS_BAR_STATE';

const initialState = {
    progressWidth: 0
}

function changeProgressBarState(state, newWidth) {
    return { ...state, progressWidth: newWidth };
}

export default function progressBarReducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_PROGRESS_BAR_STATE:
            return changeProgressBarState(state, action.width);
    
        default:
            return state;
    }
}

export const changeProgressBarCreator = (width) => ({ type: CHANGE_PROGRESS_BAR_STATE, width });
