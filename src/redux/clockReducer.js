import { actionTypes } from "./actionCreators";

function formatTime(minutes, seconds) {
    if((minutes + '').length < 2) minutes = '0' + minutes;
    if((seconds + '').length < 2) seconds = '0' + seconds;

    return minutes + ':' + seconds;
}

const initialState = {
    timeLeftFormatted: formatTime(new Date().getMinutes(), new Date().getSeconds()),
    clockState: 'work'
};

function updateTime(state, newTime) {
    return {...state, timeLeftFormatted: formatTime(newTime.getMinutes(), newTime.getSeconds())};
}

function changeClockState(state, newState) {
    return {...state, clockState: newState};
}

export default function clockReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.UPDATE_TIME:
            return updateTime(state, action.time);

        case actionTypes.CHANGE_CLOCK_STATE:
            return changeClockState(state, action.clockState);

        default:
            return state;
    }
}